class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  belongs_to :comitee
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable
  validates_presence_of :email, :name ,:general_register,:cpf,:birthday,:gender,:cel,:university, :facebook_profile_link
  validates :email,:general_register, uniqueness: true
  usar_como_cpf :cpf


  def paid_comitee_value
    if self.comitee.nil? || self.comitee.dual == true
      total = 0
      if self.is_cotist == true
        total += self.comitee.value_cotist 
      else
        total += self.comitee.value_not_cotist
      end
      dupla = User.where(cpf: Cpf.new(self.cpf_dual)).first
      if dupla.is_cotist == true
        total += dupla.comitee.value_cotist 
      else
        total += dupla.comitee.value_not_cotist
      end
      total
    else
      self.is_cotist? ? self.comitee.value_cotist : self.comitee.value_not_cotist
    end
  end

  def set_name_description
    if self.comitee.dual == true
      '- Dupla'
    else
      '- Individual'
    end
  end


  def pay_pagseguro
    payment = PagSeguro::PaymentRequest.new

    payment.reference = "REFl#{self.comitee_id}user#{self.id}"

    payment.notification_url = 'https://ecej17.herokuapp.com/confirm_payment'
    payment.redirect_url = 'https://ecej17.herokuapp.com/'

    payment.items << {
      id: self.id,
      description: "#{self.comitee.name}  #{set_name_description}" ,
      amount: self.paid_comitee_value
    }

    payment.sender = {
      email: self.email

    }
    # Caso você precise passar parâmetros para a api que ainda não foram
    # mapeados na gem, você pode fazer de maneira dinâmica utilizando um
    # simples hash.
    # payment.extra_params << { paramName: 'paramValue' }
    #payment.extra_params << { senderBirthDate: self.user.birthday }
    #payment.extra_params << { senderCPF: self.user.cpf.numero.only_numbers  }
    #


    response = payment.register

    # Caso o processo de checkout tenha dado errado, lança uma exceção.
    # Assim, um serviço de rastreamento de exceções ou até mesmo a gem
    # exception_notification poderá notificar sobre o ocorrido.
    #
    # Se estiver tudo certo, redireciona o comprador para o PagSeguro.
    if response.errors.any?
      raise response.errors.join("\n")
    else
      response.url
    end
  end



end
