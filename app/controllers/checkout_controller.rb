class CheckoutController < ApplicationController
  before_action :authenticate_user!
  before_action :get_user
  before_action :find_comitee

  def pagseguro
     redirect_to @user.pay_pagseguro
  end

  private
  def find_comitee
    if @user.comitee_id.nil?
      render json: {msg: 'Usuário nao cadastrado em um evento.'}
      return false
    end
  end


end
