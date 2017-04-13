class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def authenticate_user!
    @header_top = "header_top_unlogged"
    if user_signed_in?
      @header_top = "header_top_logged"
    end
  end
end
