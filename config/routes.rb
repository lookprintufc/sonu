Rails.application.routes.draw do

# root 'crew/admins#dashboard',  as: :authenticated_admin_root
  namespace :crew do
    devise_for :admins,
    controllers:{
      sessions: "crew/admins/sessions",
      passwords: "crew/admins/passwords",
      confirmations: 'crew/admins/confirmations'
    },
      path: '/',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      password: 'secret',
      unlock: 'unblock'
    }

    devise_scope :admin do
      authenticated  do

        resources :users
        resources :comitees
        resources :admins
    #
    #     # get '/qualified_users' => 'users#qualified', as: :users_qualified
    #     # get '/disqualified_users' => 'users#disqualified', as: :users_disqualified
    #     # get '/waiting_list' => 'users#waiting_list', as: :users_waiting_list
    #     # get '/pays_list' => 'users#pays_list', as: :users_pays_list
    # #
    # #
    # #     #USUARIO ADMIN
    # #     patch 'move_user_to_lot/:user_id/:lot_id' => 'admins_methods#move_user_to_lot', as: :move_user_to_lot
    # #     patch 'change_users/:user_id/:user_2_email' => 'admins_methods#change_users', as: :change_users_position
    # #     patch 'disqualify/:id' => 'admins_methods#disqualify_user', as: :disqualify_user
    # #     patch 'move_first_user_to_lot/:lot_id' => 'admins_methods#move_first_user_to_lot', as: :move_first_user_to_lot
    # #
    # #     #PAYMENTS
    # #     patch 'change_payment_status/:id/:status' => 'admins_methods#change_payment_status', as: :change_payment_status
    # #     patch 'set_billet_portion_paid/:id/:portion_paid' => 'admins_methods#billet_portion_paid', as: :set_billet_portion_paid
    # #     patch 'remove_payment_method/:id' => 'admins_methods#remove_payment_method', as: :change_payment_method
    # #
    # #     #sistema
    # #     get '/info_system' => 'admins#info', as: :system_info
    # #     get '/ejs_list' => 'users#ejs_list', as: :ej_list
    # #
    # #     #excel
    # #     get 'excel/lot/users/:id' => 'excel#lot_users', as: :download_lot_users_excel
    # #     #relatorio
    # #     get 'relatorio' => 'excel#excel_handler', as: :excel_handler
    # #     get 'excel/generate_xls' => 'excel#generate_xls', as: :generate_xls, format: :xls
    # #     #ej
    # #     get 'excel/ejlist' => 'excel#ejlist', format: :xls_ejlist
    # #
    # #     #acess account
    # #     patch 'login_user/:user_id' => 'admins_methods#login', as: :login_user
      end

      unauthenticated do

      end

      root 'admins#dashboard',  as: :authenticated_admin_root
    end

  end

  devise_for :users,
  controllers: {
    sessions: "users/sessions",
    passwords: "users/passwords",
    registrations: "users/registrations",
    confirmations: 'users/confirmations'
  }
  get 'users/:id' => 'users#show'
    #routes for :users


    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'site#index'
    get '/comites' => 'site#comitees', as: :comitees
    get '/carta-de-apresentacao' => 'site#show_card', as: :show_card
    get '/o-que-sao-muns' => 'site#muns', as: :muns
    get '/historia-sonu' => 'site#story', as: :story
    get '/secretariado' => 'site#secretary', as: :secretary
    get '/diretoria' => 'site#diretory', as: :diretory
    get '/faq' => 'site#faq', as: :faq
    get '/cronograma' => 'site#cronogram', as: :cronogram
    get '/festas' => 'site#parties', as: :parties
    get '/fortaleza' => 'site#fortaleza', as: :fortaleza
    get '/certificados-sonu' => 'site#sonu_certificates', as: :sonu_certificates
    get '/sonu-academico' => 'site#academic', as: :academic
    get '/sonu-beta' => 'site#beta', as: :beta
    get '/sonu-escolas' => 'site#schools', as: :schools
    get '/minicursos-palestras-sonu-solidario' => 'site#speeches', as: :speeches
    get '/sonu-solidario' => 'site#solidary', as: :solidary
    get '/certificados' => 'site#certificates', as: :certificates
    get '/parceiros' => 'site#partners', as: :partners
    get '/inscricoes' => 'site#inscription', as: :inscription
    get '/contato' => 'site#contact', as: :contact
end
