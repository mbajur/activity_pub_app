ActivityPubUi::Engine.routes.draw do
  resources :objects, only: [:index, :show] do
    post :resolve, on: :collection
  end

  resources :inbound_request_logs, only: [:index, :show]
end
