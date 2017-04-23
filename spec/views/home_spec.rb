# spec/views/home_spec.rb
require 'rails_helper'
require 'spec_helper'
RSpec.describe User, type: :model do
    describe 'the initial process', type: :feature do
        # render_views
        # before :each do
        #   User.make(email: 'user@example.com', password: 'password')
        # end

        it 'click at login button' do
            visit '/'
            click_on('Login')
            expect(page.current_path).to eq user_session_path
        end

        it 'click at sign up button' do
            visit '/'
            click_on('Cadastre-se')
            expect(page.current_path).to eq new_user_registration_path
        end

    end
end
