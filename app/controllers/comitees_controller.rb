class ComiteesController < ApplicationController
  layout 'site'
  before_action :authenticate_user!
  before_action :load_comitee, only: [:show, :check_cpf]
  before_action :get_user

  def show
  end

  def check_cpf
    user = User.where(cpf: Cpf.new(params[:cpf]))
    if user.any? && user.first != current_user
      if user.first.comitee_id.nil?
        render json: { success: true, name: user.first.name }
      else
        render json: { success: false, msg: 'Usuário já cadastrado em um Comitê' }
      end
    else
      render json: {success: false, msg: "Nada encontrado!"}
    end
  end

  def update
    respond_to do |format|
      @user.comitee_id = params[:id_evento]
      if @user.update_attributes(user_params)
        flash[:success] = "Cadastro completo, realize o pagamento para garantir sua vaga."
        format.html {  redirect_to show_comitee_path(@user.comitee_id) }
      else
        format.html { render 'show'}
        format.json { render json: @user.errors }
      end
    end


  end

  private

  def load_comitee
    @comitee = Comitee.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:cpf_dual, :categories_ids, :justify, :experience, :answer_1, :answer_2, :answer_3, :answer_4, :answer_5, :face_link)
  end
end
