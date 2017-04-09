# spec/factories/users.rb

require 'faker'
FactoryGirl.define do
    factory :user do |f|
        f.email 'lucas64_64@hotmail.com'
        f.password '123456'

        f.name 'Lucas'
        f.general_register '459059971'
        f.cpf '060.570.583-64'
        f.birthday '18-03-1996'
        f.gender 'Masculino'
        f.cep '62850-000'
        f.state 'Ceará'
        f.adress 'Rua Pereira e Silva'
        f.adress_number '445'
        f.complement 'Perto do pitom'
        f.city 'Cascavel'
        f.district 'Parque Urupê'
        f.phone '(085)99635-7562'
        f.cel '(085)99635-7562'
        f.university 'Universidade Federal do Ceará'
        f.university_id 385_204
        f.semester 3
        f.facebook_profile_link 'www.fb.com'
    end
end
