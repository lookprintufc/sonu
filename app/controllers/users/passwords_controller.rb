class Users::PasswordsController < Devise::PasswordsController
  layout 'site'
  # GET /resource/password/new
  def new
    super
  end

  # POST /resource/password
  def create
    self.resource = resource_class.send_reset_password_instructions(resource_params)
    yield resource if block_given?

    if successfully_sent?(resource)
      flash[:success] = "Enviamos um email com as informações para recuperação da senha"
      redirect_to unauthenticated_user_root_path
    else
      flash[:error] = "Não foi possível enviar as instruções de recuperação, verifique se o email está correto"
      redirect_to new_user_password_path
    end
  end

  #GET /resource/password/edit?reset_password_token=abcdef
  def edit
   super

  end

  #PUT /resource/password
  def update
     self.resource = resource_class.reset_password_by_token(resource_params)
    yield resource if block_given?

    if resource.errors.empty?
      resource.unlock_access! if unlockable?(resource)
      if Devise.sign_in_after_reset_password
        flash_message = resource.active_for_authentication? ? :updated : :updated_not_active
        set_flash_message(:notice, flash_message) if is_flashing_format?
        sign_in(resource_name, resource)
      else
        set_flash_message(:notice, :updated_not_active) if is_flashing_format?
      end
      respond_with resource, location: after_resetting_password_path_for(resource)
    else
      flash[:error] = resource.errors.full_messages.to_sentence
      set_minimum_password_length
      respond_with resource
    end
  end

  protected

  def after_resetting_password_path_for(resource)
    super(resource)
  end

  #The path used after sending reset password instructions
  def after_sending_reset_password_instructions_path_for(resource_name)
    super(resource_name)
  end
end