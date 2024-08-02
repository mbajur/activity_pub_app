Rails.application.routes.draw do
  devise_for :users

  mount ActivityPub::Engine => 'ap'

  authenticate :user do
    mount ExceptionHunter::Engine => 'exception_hunter'
    mount GoodJob::Engine => 'good_job'
    mount ActivityPubUi::Engine => 'ap_ui'
    mount ActivityPub::ObjectAttachmentUploader.upload_endpoint(:cache) => '/panel/object_attachments/upload'
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

  namespace :panel do
    resources :objects, only: [:index, :new, :show, :create, :edit, :update] do
      get 'new/article', action: :new_article, on: :collection, as: :new_article
      get :replies_preview
      post :like, on: :member
      post :unlike, on: :member
    end

    resources :comments, only: [:show] do
      post :like, on: :member
      post :unlike, on: :member
    end

    resources :actors, only: [] do
      post :follow, on: :member
      post :unfollow, on: :member

      resources :objects, only: [:index, :show]
    end

    resources :uploads, only: [:create]
    resource :design, controller: :design, only: [:edit, :update]
    resource :settings, only: [:edit, :update]

    root to: 'objects#index'
  end

  get 'uploads/:signed_id/redirect', to: 'uploads#redirect', as: :upload_redirect

  resources :objects, path: :posts, controller: 'public/objects', only: [:index, :show]

  root to: 'public/objects#index'
end
