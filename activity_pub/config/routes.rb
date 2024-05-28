ActivityPub::Engine.routes.draw do
  post :inbox, to: 'inbox#create'

  resources :objects, only: [:show] do
    post :inbox, to: 'inbox#create'
    get :outbox
  end
end
