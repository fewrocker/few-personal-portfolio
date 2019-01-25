Rails.application.routes.draw do
  root to: 'pages#home'

  Rails.application.routes.draw do
    get "/:page" => "pages#show"
  end

  # Routing for download files from folder files
  match 'download/:filename', to: 'files#download', as: 'download', via: :get
end
