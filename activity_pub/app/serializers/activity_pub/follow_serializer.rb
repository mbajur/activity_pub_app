module ActivityPub
  class FollowSerializer < BaseSerializer
    def data
      result = {
        type: 'Follow',
        actor: ActivityPub::PersonResource.new(object.source_ap_object).guid,
        object: ActivityPub::PersonResource.new(object.target_ap_object).guid,
      }

      result
    end
  end
end
