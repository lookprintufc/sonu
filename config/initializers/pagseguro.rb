PagSeguro.configure do |config|
  #configurar modo de produção
  config.environment = :sandbox  # ou :sandbox. O padrão é production.
  config.token       = 'ED99460F3C75449E9F5F665AED134105'
  config.email       = 'pixelzip0@gmail.com'
  config.encoding    = "UTF-8" # ou ISO-8859-1. O padrão é UTF-8.
end
