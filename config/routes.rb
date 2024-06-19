Rails.application.routes.draw do
  devise_for :users

  mount ActivityPub::Engine => 'ap'

  authenticate :user do
    mount ExceptionHunter::Engine => 'exception_hunter'
    mount GoodJob::Engine => 'good_job'
    mount ActivityPubUi::Engine => 'ap_ui'
  end

  get "up" => "rails/health#show", as: :rails_health_check

  get '.well-known/webfinger', to: 'activity_pub/well_known/webfinger#show', as: :webfinger
  get '.well-known/host-meta', to: 'activity_pub/well_known/host_meta#show', as: :host_meta
  get '.well-known/nodeinfo', to: 'activity_pub/well_known/node_info#show', as: :node_info
  get '.well-known/nodeinfo/2.0', to: 'activity_pub/well_known/node_info#v20', as: :node_info_v20

  resources :conversations, only: [:index, :show]
  resources :topics, only: [] do
    resources :conversations, only: [:index]
  end

  root to: 'conversations#index'
end
