# frozen_string_literal: true

module Objects
  class NoteBodyComponent < ViewComponent::Base
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

      private

      attr_reader :attachment

      def local?
        attachment.is_a?(Ap::Attachment)
      end
    end

    attr_reader :object

    def initialize(object)
      @object = object
      super
    end

    def attachments
      col = if object.remote?
              object.data['attachment'] || []
            else
              object.ap_attachments.all
            end

      col.first(5).map { |att| AttachmentPresenter.new(att) }
    end
  end
end
