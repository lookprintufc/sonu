# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Admin.create(email: "lucas64_64@hotmail.com", password:"123456")
User.create(name: "Lucas Simão da Costa",email:"lucas624_64@hotmail.com",password:"123456",birthday:"18/03/1996",general_register:"2145478545",
cpf:"060.570.583-65",gender: "Masculino",cep:'62850-000',adress: 'rua pereira',district:"Urupe",cel: '96357562',university:'ufc',facebook_profile_link: 'www.asfljadsf')
Comitee.create!(name:"COMITE",grade:"Ensino Médio",limit: 50,value_cotist:150.00,value_not_cotist: 200.00,start_date:'16/04/2017',end_date:'19/04/2017')
