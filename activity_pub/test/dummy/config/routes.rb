Rails.application.routes.draw do
  mount ActivityPub::Engine => "/ap"
end
