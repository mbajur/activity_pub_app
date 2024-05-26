ActivityPub::Engine.routes.draw do
  post :inbox, to: 'inbox#create'

  resources :objects, only: [:show] do
    post :inbox
    get :outbox
  end
end
