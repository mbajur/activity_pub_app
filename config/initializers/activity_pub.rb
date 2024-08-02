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

  module ActivityPub::ObjectPatch
    def self.prepended(base)
      base.has_ancestry ancestry_format: :materialized_path2,
                        counter_cache: true,
                        cache_depth: true

      base.before_save :assign_parent

      private

      def assign_parent
        self.parent = ActivityPub::Object.find(self.in_reply_to_ap_object_id) if in_reply_to_ap_object_id.present? && ancestry == '/'
      end
    end
  end
  ActivityPub::Object.prepend(ActivityPub::ObjectPatch)
end
