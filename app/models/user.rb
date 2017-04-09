class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
        validates_presence_of :email,:password,:name ,:general_register,:cpf,:birthday,:gender,:cel,:university, :facebook_profile_link
        validates :email,:general_register,:cpf, uniqueness: true
end
