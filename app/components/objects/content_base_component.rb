# frozen_string_literal: true

module Objects
  class ContentBaseComponent < ViewComponent::Base
    class AttachmentPresenter
      def initialize(attachment)
        @attachment = attachment
      end

      def url
        if local?
          Rails.application.routes.url_helpers.rails_blob_path(attachment.file, only_path: true)
        else
          attachment['url']
        end
      end

      def media_type
        if local?
          attachment.file.mime_type
        else
          attachment['mediaType']
        end
      end

      def width
        attachment['width']
      end

      def height
        attachment['height']
      end

      private

      attr_reader :attachment

      def local?
        # attachment.is_a?(ActivityPub::Attachment)
        false
      end
    end

    attr_reader :object

    def initialize(object)
      @object = object
      super
    end

    def interactions_component
      Objects::InteractionsComponent.new(object)
    end

    def attachments
      col = if object.remote?
              object.data['attachment'] || []
            else
              JSON.parse(object.content_attachments.presence || {}).dig('blocks', 0, 'data', 'files') || []
            end

      col.first(5).map { |att| AttachmentPresenter.new(att) }
    end

    def excerpt
      result = if object.local?
        RenderEditorjs.render(object.content_raw)
      else
        object.data&.dig('content')
      end

      result = ActionView::Base.full_sanitizer.sanitize(result)

      truncate(result, length: 500, separator: ' ')
    end
  end
end
