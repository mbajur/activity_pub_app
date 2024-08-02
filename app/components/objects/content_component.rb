# frozen_string_literal: true

module Objects
  class ContentComponent < ViewComponent::Base
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
      @object = object
      @current_ap_actor = current_ap_actor
      @liked_ap_object_ids = liked_ap_object_ids
      super
    end

    def actor
      object.attributed_to[0]
    end

    def actor_decorated
      @actor_decorated ||= AuthorDecorator.new(actor)
    end

    def profile_name
      if actor.remote?
        actor.data['name']&.presence || actor.data['preferredUsername']
      else
        actor.name.presence || actor.preferred_username
      end
    end

    def profile_url
      # if actor.remote?
      #   actor.data['url']
      # else
      #   '/'
      # end
      panel_actor_objects_path(actor)
    end

    def preferred_username
      actor_decorated.display_username
    end

    def avatar_url
      if actor.local?
        actor.activity_pubable.avatar_url
      else
        actor.data.dig('icon', 'url')
      end
    end

    def object_url
      # if object.remote?
      #   object.data['url']
      # else
      #   group_object_path(current_ap_actor, object)
      # end
      # group_object_path(current_ap_actor, object)
      panel_object_path(object)
    end

    def public_object_url
      if object.local?
        ActivityPub::ObjectResource.new(object).public_url
      else
        object.data['url']
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

    def tags
      object.data['tag'] || []
    end

    def liked?
      liked_ap_object_ids&.include?(object['id'])
    end
  end
end
