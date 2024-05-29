require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Activitypub
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1

    # Please, add to the `ignore` list any other `lib` subdirectories that do
    # not contain `.rb` files, or that should not be reloaded or eager loaded.
    # Common ones are `templates`, `generators`, or `middleware`, for example.
    config.autoload_lib(ignore: %w(assets tasks))

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    config.active_job.queue_adapter = :good_job

    config.action_mailer.default_url_options = { host: 'aptest.mbajur.com' }

    config.middleware.insert_before Rails::Rack::Logger, InboundRequestsLoggerMiddleware, only_state_change: false,
                                                                                          path_regexp: /ap\/|\.well-known\//,
                                                                                          skip_body_regexp: /ap\//,
                                                                                          keep_headers: InboundRequestsLoggerMiddleware::DEFAULT_HEADERS + %w[HTTP_DIGEST HTTP_DATE HTTP_SIGNATURE HTTP_HOST CONTENT_TYPE]
  end
end
