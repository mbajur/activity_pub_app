module ActivityPub
  class ObjectEnsurer
    def initialize(uri, actor: nil)
      @uri = uri
      @actor = actor
    end

    def call
      object = ActivityPub::Object.create_or_find_by(guid: @uri)
      refresh_object(object) unless object.fresh?

      object
    end

    private

    # This basically does the same thing as `ResolveObjectJob` but in a sync
    # way and without all the dependencies.
    #
    # @todo We should think of a way on how to merge these two and operate in a
    #   more DRY and smart way
    def refresh_object(object)
      remote_object = HttpClient.new(@actor).get(URI.parse(@uri)).body
      remote_object = ActivityPub::ObjectDataSanitizer.new(remote_object).call
      object.data = remote_object

      if object.type == ActivityPub::Unknown.name
        object.update!(type: model_from_type(remote_object['type']))
      end
    end

    def model_from_type(type)
      ActivityPub.object_type_models[type] || ActivityPub::Unknown
    end
  end
end
