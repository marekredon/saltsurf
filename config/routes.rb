Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :spots, only: [:index, :show] do
    resources :sessions, only: [:create]
    resources :favorites, only: [:create, :destroy]
  end

  resource :profile, only: [:show ] do
    resources :sessions, only: [:update]
  end


  # if we want to update sessions uncomment the following :
  # resources :sessions, only: [:edit, :update]

end
