Rails.application.routes.draw do
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/auth/twitter', to: "social#create"
  post '/auth/:provider/callback', to: 'sessions#create'
  resources :users, only: [:show]
  
  resources :clients do
    resources :posts, only: [:create]
  end
  
  root 'sessions#index'
  get '/*path' => 'sessions#index'
end
