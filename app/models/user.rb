class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
 #:confirmable
  belongs_to :comitee
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable 
  validates_presence_of :email, :name ,:general_register,:cpf,:birthday,:gender,:university, :facebook_profile_link
  
  validates :cpf, presence: true, uniqueness: true, cpf: true
  serialize :categories_ids, Array


  #VALIDAÇÕES DO EVENTO
  validates :justify, presence: true, :allow_nil => true
  validates :experience, presence: true, :allow_nil => true
  validates :face_link, presence: true, :allow_nil => true
  validates_with QuestionsValidator
  #EVENTOS ANSWER

  def set_name_description
    if self.comitee.dual == true
      '- Dupla'
    else
      '- Individual'
    end
  end

  def type_user
    self.is_cotist == true ? 'Cotista' : 'Não cotista'
  end


  def pay_pagseguro
    payment = PagSeguro::PaymentRequest.new

    payment.reference = "REFl#{self.comitee_id}user#{self.id}"

    payment.notification_url = 'http://www.sonu.com.br/confirm_payment'
    payment.redirect_url = 'http://www.sonu.com.br/'

    payment.items << {
      id: self.id,
      description: "#{self.comitee.name}  #{set_name_description}" ,
      amount: self.comitee.paid_comitee_value_pagseguro(self)
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
