module Objects
  class Unliker < ApplicationService
    arg :actor, type: ActivityPub::Person
    arg :target

    step :remove_like
    step :distribute

    output :like

    private

    def remove_like
      self.like = ActivityPub::Like.find_by(
        source_ap_object: actor,
        target_ap_object: target
      )
      like&.destroy
    end

    def distribute
      if target.remote?
        activity = ActivityPub::UndoSerializer.new(like, with_context: true)
        target.attributed_to.each do |target_actor|
          ActivityPub::FederateObjectJob.perform_later(actor, target_actor.data.inbox, activity.to_json)
        end
      end
    end
  end
end
