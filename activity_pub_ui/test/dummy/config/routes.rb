Rails.application.routes.draw do
  mount ActivityPubUi::Engine => "/activity_pub_ui"
end
