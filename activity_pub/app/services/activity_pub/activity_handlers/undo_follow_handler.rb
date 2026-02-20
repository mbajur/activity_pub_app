module ActivityPub
  module ActivityHandlers
    class UndoFollowHandler < BaseHandler
      def call
        local_target_guid = ActivityPub::UriToLocalObjectIdFinder.new(body.dig('object', 'object')).call
        local_target = ActivityPub::Object.find_by(id: local_target_guid)

        unless local_target
          Rails.logger.warn "Local target #{local_target_guid} not found"
          return
        end

        local_actor_guid = body.dig('object', 'actor')
        local_actor = ActivityPub::Object.find_by(guid: local_actor_guid)

        unless local_actor
          Rails.logger.warn "Local actor #{local_actor_guid} not found"
          return
        end

        follow = Follow.find_by(source_ap_object: local_actor, target_ap_object: local_target)

        unless follow
          Rails.logger.warn 'Follow record not found'
          return
        end

        follow.undoed!
      end
    end
  end
end
