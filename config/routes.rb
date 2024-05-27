Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  mount GoodJob::Engine => 'good_job'
  mount ActivityPub::Engine => 'ap'
  mount ActivityPubUi::Engine => 'ap_ui'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  get '.well-known/webfinger', to: 'activity_pub/well_known/webfinger#show', as: :webfinger
  get '.well-known/host-meta', to: 'activity_pub/well_known/host_meta#show', as: :host_meta

  # namespace :ui do
  #   resources :objects, only: [:index, :show] do
  #     post :resolve, on: :collection
  #   end
  # end

  # namespace :activity_pub do
  #   post :inbox, to: 'inbox#create'

  #   resources :objects, only: [:show] do
  #     post :inbox
  #     get :outbox
  #   end
  # end
end
