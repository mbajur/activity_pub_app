module ActivityPub
  class AcceptSerializer < BaseSerializer
    def data
      result = {
        type: 'Accept',
        object: FollowSerializer.new(object),
        published: object.updated_at,
        to: [ObjectResource.new(object.source_ap_object).guid],
        actor: ObjectResource.new(object.target_ap_object).guid
      }

      result
    end
  end
end
