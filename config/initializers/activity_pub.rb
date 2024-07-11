# Rails.application.config.to_prepare do
#   ActivityPub::Engine.configure do |config|
#     config.routes.default_url_options[:host] = 'aptest.mbajur.com'
#   end
# end

# ActivityPub.logger = Rails.logger
# ActivityPub.domain = ENV.fetch('APP_DOMAIN')
ActivityPub.domain = 'aptest.mbajur.com'

Rails.application.config.to_prepare do
  module ActivityPub::ArticleResourcePatch
    def self.prepended(base)
      base.register_data_attribute :content_raw
    end
  end
  ActivityPub::ArticleResource.prepend(ActivityPub::ArticleResourcePatch)

  module ActivityPub::PersonPatch
    def to_liquid
      {
        name: name,
        summary: summary
      }.stringify_keys
    end
  end
  ActivityPub::Person.prepend(ActivityPub::PersonPatch)
end
