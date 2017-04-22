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
  },
    path: "/",
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    password: 'secret',
    unlock: 'unblock',
    registration: 'cadastro',
    sign_up: 'new'
  }

   devise_scope :user do
    authenticated :user do
      #root to: 'user_dashboard#index',  as: :authenticated_user_root

    end
    unauthenticated :user do
      #root to: "users/sessions#new", as: :unauthenticated_user_root
    end

    get 'comitee/:id' => 'comitees#show', as: :show_comitee
    get 'comitee/cpf/cpf_find' => 'comitees#check_cpf', as: :show_comitee_cpf
    put 'comitee/update' => 'comitees#update', as: :update_user_comitee

    get 'payment' => 'checkout#pagseguro'
  end


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
