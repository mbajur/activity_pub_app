module Objects
  class Liker < ApplicationService
    arg :actor, type: ActivityPub::Person
    arg :target

    step :upsert_like

    output :like

    private

    def upsert_like
      self.like = ActivityPub::Like.find_or_create_by!(
        source_ap_object: actor,
        target_ap_object: target
      )

      if target.remote?
        activity = ActivityPub::LikeSerializer.new(like, with_context: true)
        target.attributed_to.each do |target_actor|
          ActivityPub::FederateObjectJob.perform_later(actor, target_actor.data.inbox, activity.to_json)
        end
      end
    end
  end
end
