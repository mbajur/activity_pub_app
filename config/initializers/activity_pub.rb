Rails.application.config.to_prepare do
  ActivityPub::Engine.configure do |config|
    config.routes.default_url_options[:host] = 'me.lvh.me'
  end
end
