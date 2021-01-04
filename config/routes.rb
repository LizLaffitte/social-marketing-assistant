Rails.application.routes.draw do
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :users, only: [:show]
  
  root 'sessions#index'
  get '/*path' => 'sessions#index'
end
