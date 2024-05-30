module ActivityPub
  module ActivityHandlers
    class CreateHandler < BaseHandler
      def call
        verify_signature!

        # local_target_guid = ActivityPub::UriToLocalObjectIdFinder.new(body['object']).call
        # local_target = ActivityPub::Object.local.find_by(id: local_target_guid)
        # raise ActiveRecord::RecordNotFound, "Local target #{local_target_guid} not found" unless local_target

        # follow = Follow.first_or_initialize(guid: body['id'])
        # follow.source_ap_object = ActivityPub::ObjectEnsurer.new(body['actor']).call
        # follow.target_ap_object = local_target
        # follow.state = 'confirmed' # @todo handle confirmation
        # follow.save!

        ActivityPub::RootObjectResolver.new(body.dig('object', 'id')).call
      end
    end
  end
end
