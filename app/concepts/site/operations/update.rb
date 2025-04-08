module Site::Operations
  class Update < Trailblazer::Operation
    step :assign_attributes
    step :validate
    step :persist
    step :distribute

    def assign_attributes(ctx, params:, **)
      ap_object = ctx[:model].activity_pub_object

      ctx[:model].avatar = params[:avatar] if params[:avatar].present?
      ap_object.data.name = params.dig(:activity_pub_object_attributes, :data, :name)
      ap_object.data.summary = params.dig(:activity_pub_object_attributes, :data, :summary)

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
