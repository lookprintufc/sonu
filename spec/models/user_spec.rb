# spec/models/user_spec.rb
require 'rails_helper'
require 'spec_helper'

RSpec.describe User, type: :model do
    it 'has a valid factory' do
        # FactoryGirl.create(:user).should be_valid
        expect(FactoryGirl.create(:user)).to be_valid
    end
    it 'is invalid without a email' do
      expect(FactoryGirl.build(:user, email: nil)).not_to be_valid
    end
    it 'is invalid without a name' do
      expect(FactoryGirl.build(:user, name: nil)).not_to be_valid
    end
    it 'is invalid without a name' do
      expect(FactoryGirl.build(:user, name: nil)).not_to be_valid
    end
    it 'is invalid without a password' do
      expect(FactoryGirl.build(:user, password: nil)).not_to be_valid
    end
    it 'is invalid without a rg' do
      expect(FactoryGirl.build(:user, rg: nil)).not_to be_valid
    end
    it 'is invalid without a gender' do
      expect(FactoryGirl.build(:user, gender: nil)).not_to be_valid
    end

    it 'is invalid without a cel' do
      expect(FactoryGirl.build(:user, cel: nil)).not_to be_valid
    end
    it 'is invalid without a university' do
      expect(FactoryGirl.build(:user, university: nil)).not_to be_valid
    end


    #Be valid
    it 'is valid without a cep' do
      expect(FactoryGirl.build(:user, cep: nil)).to be_valid
    end
    it 'is valid without a adress' do
      expect(FactoryGirl.build(:user, adress: nil)).to be_valid
    end
    it 'is valid without a complement' do
      expect(FactoryGirl.build(:user, complement: nil)).to be_valid
    end
    it 'is valid without a district' do
      expect(FactoryGirl.build(:user, district: nil)).to be_valid
    end
    it 'is valid without a city' do
      expect(FactoryGirl.build(:user, city: nil)).to be_valid
    end
    it 'is valid without a phone' do
      expect(FactoryGirl.build(:user, phone: nil)).to be_valid
    end

    it 'is valid without a university_id' do
      expect(FactoryGirl.build(:user, university_id: nil)).to be_valid
    end
    it 'is valid without a semester' do
      expect(FactoryGirl.build(:user, semester: nil)).to be_valid
    end
    it 'is valid without a facebook_profile_link' do
      expect(FactoryGirl.build(:user, facebook_profile_link: nil)).to be_valid
    end
end
