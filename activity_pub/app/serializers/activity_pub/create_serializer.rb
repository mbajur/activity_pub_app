module ActivityPub
  class CreateSerializer < BaseSerializer
    def data
      result = {
        id:   local_guid,
        type: 'Create',
        object: ObjectSerializer.new(object),
        published: object.updated_at,
        to: ['https://www.w3.org/ns/activitystreams#Public'],
        actor: actor_resource.local_guid,
        cc: [
          actor_resource.followers_url
        ]
      }

      result
    end

    private

    def actor_resource
      @actor_resoure ||= PersonResource.new(options[:actor])
    end

    def local_guid
      ActivityPub::Engine.routes.url_helpers.activity_object_url(object, **default_url_options)
    end
  end
end
