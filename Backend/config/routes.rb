Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:create, :show, :update, :destroy]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: "users#show"

  resources :communicable_diseases
  resources :areas
  resources :donations, only: [:index, :show, :create, :update]
  get "/donations/:area_id" , to: "donations#index"
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
end
