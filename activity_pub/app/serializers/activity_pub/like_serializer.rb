module ActivityPub
  class LikeSerializer < BaseSerializer
    def data
      result = {
        type: 'Like',
        actor: ActivityPub::PersonResource.new(object.source_ap_object).guid,
        object: ActivityPub::PersonResource.new(object.target_ap_object).guid,
      }

      result
    end
  end
end
