Rails.application.routes.draw do
  root 'sessions#index'
  get '/*path' => 'sessions#index'
end
