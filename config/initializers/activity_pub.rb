# Rails.application.config.to_prepare do
#   ActivityPub::Engine.configure do |config|
#     config.routes.default_url_options[:host] = 'aptest.mbajur.com'
#   end
# end

# ActivityPub.logger = Rails.logger
ActivityPub.domain = ENV.fetch('APP_DOMAIN')
