Rails.application.routes.draw do
  mount ActivityPub::Engine => "/activity_pub"
end
