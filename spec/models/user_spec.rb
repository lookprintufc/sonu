# spec/models/user_spec.rb
require 'rails_helper'
require 'spec_helper'

RSpec.describe User, type: :model do
    pending "add some examples to (or delete) #{__FILE__}"
    it 'has a valid factory' do
        FactoryGirl.create(:user).should be_valid
    end
end
