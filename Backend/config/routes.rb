Rails.application.routes.draw do
  get 'communicable_diseases/no-test-framework'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # user
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/register", to: "users#create"
  get "/me", to: "users#show"
  

     # Routes for communicable diseases
  # resources :communicable_diseases, only: [:index, :show, :create, :update, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :areas, only: [:index, :show, :create, :update]
  resources :donations, only: [:index, :show, :create, :update]
  resources :communicable_diseases
end
