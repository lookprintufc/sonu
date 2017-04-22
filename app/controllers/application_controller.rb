class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def get_comitees
    @comitees = Comitee.all
  end
  protected
  def get_user
    @user = current_user
  end
end
