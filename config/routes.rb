Rails.application.routes.draw do
    devise_for :users, controllers: {
        sessions: 'users/sessions'
    }

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
