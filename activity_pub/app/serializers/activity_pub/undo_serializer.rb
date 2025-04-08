module ActivityPub
  class UndoSerializer < BaseSerializer
    def data
      result = {
        type: 'Undo',
        object: ObjectSerializer.new(object),
        to: [ObjectResource.new(object.target_ap_object).guid],
        actor: ObjectResource.new(object.source_ap_object).guid
      }

      result
    end
  end
end
