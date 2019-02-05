Rails.application.routes.draw do
  root to: 'pages#home'

  resources :contact, only: [:create]

  Rails.application.routes.draw do
    get "/:page" => "pages#show"
  end

  Rails.application.routes.draw do
    get "/projects/:project" => "pages#projects"
  end

  # Routing for download files from folder files
  match 'download/:filename', to: 'files#download', as: 'download', via: :get
end
