module Object::Operations
  class Create < Trailblazer::Operation
    step :initialize_model
    step :assign_attribution
    step :assign_attributes
    step :populate_source
    step :validate
    step :persist
    step :distribute

    def initialize_model(ctx, params:, **)
      klass = (params[:type] == 'ActivityPub::Article') ? ActivityPub::Article : ActivityPub::Note
      ctx[:model] = klass.new(ancestry: '/')
      ctx[:model].data.published_at = Time.current
    end

    def assign_attribution(ctx, site:, **)
      ctx[:model].attributed_to << site.activity_pub_object
    end

    def assign_attributes(ctx, model:, params:, **)
      ctx[:model].assign_attributes(
        params.without(:content_attachments, :content_text)
      )

      true
    end

    def populate_source(ctx, model:, params:, **)
      if model.is_a?(ActivityPub::Note)
        content_attachments = JSON.parse(params[:content_attachments])
        content_text = JSON.parse(params[:content_text])

        model.data.source = ActivityPub::SourceType.new(
          content: {
            time: Time.current.to_i,
            blocks: content_attachments['blocks'] + content_text['blocks'],
            version: '2.29.0'
          }.to_json,
          media_type: 'application/vnd.editorjs+json'
        )
      elsif model.is_a?(ActivityPub::Article)
        model.data.source.media_type = 'application/vnd.editorjs+json'
      else
        true
      end
    end

    def validate(ctx, model:, **)
      ctx[:model].validate
    end

    def persist(ctx, model:, **)
      model.save!
    end

    def distribute(ctx, model:, site:, **)
      actor = site.activity_pub_object
      activity = ActivityPub::CreateSerializer.new(model, with_context: true, actor: actor)

      actor.followers.remote.map { |p| p.data.inbox }.uniq.each do |inbox|
        ActivityPub::FederateObjectJob.perform_later(actor, inbox, activity.to_json)
      end

      true
    end
  end
end
