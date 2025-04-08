# frozen_string_literal: true

module Objects
  class HeaderComponent < ViewComponent::Base
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

    attr_reader :object, :current_ap_actor, :liked_ap_object_ids

    def initialize(object, current_ap_actor:, liked_ap_object_ids: [])
      @original_object = object
      @current_ap_actor = current_ap_actor
      @liked_ap_object_ids = liked_ap_object_ids
      super
    end

    def object
      @object ||= begin
        if @original_object.is_a?(ActivityPub::Announce)
          ActivityPub::Object.find_by(guid: @original_object.data.object.id)
        else
          @original_object
        end
      end
    end

    # @todo rename that, actor is confusing because it also exists on Object
    # model as an association separate from attributed_to
    def actor
      object.attributed_to[0] || object.actors[0]
    end

    def original_author
      @original_object.attributed_to[0] || @original_object.actors[0]
    end

    def actor_decorated
      @actor_decorated ||= AuthorDecorator.new(actor)
    end

    def original_author_decorated
      @original_author_decorated ||= AuthorDecorator.new(@original_object.attributed_to[0] || @original_object.actors[0])
    end

    def profile_name
      actor.data.name&.presence || actor.data.preferred_username
    end

    def profile_url
      panel_actor_objects_path(actor)
    end

    def preferred_username
      actor_decorated.display_username
    end

    def avatar_url
      if actor.local?
        actor.activity_pubable.avatar_url
      else
        actor.data.icon.url
      end
    end

    def object_url
      panel_object_path(object)
    end

    def public_object_url
      if object.local?
        ActivityPub::ObjectResource.new(object).public_url
      else
        object.data.url
      end
    end

    def attachments
      col = if object.remote?
              object.data['attachment'] || []
            else
              object.ap_attachments.all
            end

      col.first(5).map { |att| AttachmentPresenter.new(att) }
    end

    def announce?
      @original_object.is_a?(ActivityPub::Announce)
    end
  end
end
