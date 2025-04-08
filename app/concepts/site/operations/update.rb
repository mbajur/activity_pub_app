module Site::Operations
  class Update < Trailblazer::Operation
    step :assign_attributes
    step :validate
    step :persist
    step :distribute

    def assign_attributes(ctx, params:, **)
      ctx[:model].assign_attributes(params)
      true
    end

    def validate(ctx, model:, **)
      ctx[:model].validate
    end

    def persist(ctx, model:, **)
      model.save!
    end

    def distribute(ctx, model:, **)
      ap_object = model.activity_pub_object
      activity = ActivityPub::UpdateSerializer.new(ap_object, with_context: true, actor: ap_object)

      ap_object.followers.find_each do |follower|
        ActivityPub::FederateObjectJob.perform_later(ap_object, follower.data.inbox, activity.to_json)
      end

      true
    end
  end
end
