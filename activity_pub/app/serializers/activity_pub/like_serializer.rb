module ActivityPub
  class LikeSerializer < BaseSerializer
    def data
      result = {
        type: 'Like',
        actor: ObjectResource.new(object.source_ap_object).guid,
        object: ObjectResource.new(object.target_ap_object).guid,
      }

      result
    end
  end
end
