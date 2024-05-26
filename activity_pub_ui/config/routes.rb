ActivityPubUi::Engine.routes.draw do
  resources :objects, only: [:index, :show] do
    post :resolve, on: :collection
  end
end
