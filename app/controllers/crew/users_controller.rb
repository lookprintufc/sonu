class Crew::UsersController < Crew::BaseController
  before_action :load_user, only: [:edit, :update]

  layout 'admin_dashboard'

  def index
    @users= User.all.order('completed DESC, name ASC')
  end

  def edit
    # @payment = @user.payment
    # @lots = Lot.all
    # @user_lot = @user.lot unless @user.lot.nil?
  end

  def show
  end

  def update
    # if @user.update_attributes(user_params)
    #   redirect_to edit_crew_user_path(@user), notice: "Usuário atualizado com sucesso."
    # else
    #   flash[:error] = "Erro ao atualizar cadastro, verique os campos obrigatórios."
    #   redirect_to edit_crew_user_path(@user)
    # end
  end

  # def qualified
  #   @users = User.allocated
  # end

  # def waiting_list
  #   @users = User.eligible
  #   @list = true
  #
  #   @lot = Lot.active_lot
  #   if !@lot.nil? && !@lot.is_full?
  #     @lot_active = @lot
  #   else
  #     flash[:notice] = "Não há lotes abertos. Crie ou edite um lote."
  #   end
  # end

  # def disqualified
  #   @users = User.disqualified
  # end
  #
  # def pays_list
  #   @users = User.pays
  # end

  private
  def load_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email,:password,:name ,:general_register,:cpf,:birthday,:gender,:cel,:university, :facebook_profile_link)
  end
end
