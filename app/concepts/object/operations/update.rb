module Object::Operations
  class Update < Trailblazer::Operation
    step :assign_attributes
    step :merge_content_blocks
    step :validate
    step :persist
    step :distribute

    def assign_attributes(ctx, model:, params:, **)
      ctx[:model].assign_attributes(
        params.without(:content_attachments, :content_text)
      )

      true
    end

    def merge_content_blocks(ctx, model:, params:, **)
      return true unless model.is_a?(ActivityPub::Note)

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
    end

    def validate(ctx, model:, **)
      ctx[:model].validate
    end

    def persist(ctx, model:, **)
      model.save!
    end

    def distribute(ctx, model:, site:, **)
      actor = site.activity_pub_object
      activity = ActivityPub::UpdateSerializer.new(model, with_context: true, actor: actor)

      actor.followers.remote.map { |p| p.data.inbox }.uniq.each do |inbox|
        ActivityPub::FederateObjectJob.perform_later(actor, inbox, activity.to_json)
      end

      true
    end
  end
end
