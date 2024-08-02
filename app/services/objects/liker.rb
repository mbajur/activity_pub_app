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
    end
  end
end
