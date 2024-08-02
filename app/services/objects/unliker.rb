module Objects
  class Unliker < ApplicationService
    arg :actor, type: ActivityPub::Person
    arg :target

    step :remove_like

    private

    def remove_like
      like = ActivityPub::Like.find_by(
        source_ap_object: actor,
        target_ap_object: target
      )
      like&.destroy
    end
  end
end
