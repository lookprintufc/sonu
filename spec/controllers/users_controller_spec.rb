require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #change_cotist" do
    it "returns http success" do
      get :change_cotist
      expect(response).to have_http_status(:success)
    end
  end

end
