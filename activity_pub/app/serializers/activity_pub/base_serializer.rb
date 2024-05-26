module ActivityPub
  class BaseSerializer < Granola::Serializer
    include RoutingHelper

    CONTEXT = [
      'https://www.w3.org/ns/activitystreams',
      'https://w3id.org/security/v1'
    ].freeze

    attr_reader :options

    def initialize(object, options = {})
      @options = options
      super(object)
    end

    def as_json(opts = {})
      options.merge!(opts)

      json = data
      json['@context'] = CONTEXT if options[:with_context]

      json = json.deep_transform_keys do |key|
        base_key = key.is_a?(Symbol) ? key.to_s : key
        base_key.camelize(:lower).to_sym
      end

      json
    end

    def to_json(opts = {})
      Oj.dump(as_json(opts))
    end

    private

    def local_guid
      ActivityPub::Engine.routes.url_helpers.object_url(object)
    end
  end
end
