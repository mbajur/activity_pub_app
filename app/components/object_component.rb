# frozen_string_literal: true

class ObjectComponent < ViewComponent::Base
  class AttachmentPresenter
    def initialize(attachment)
      @attachment = attachment
    end

    def url
      if local?
        attachment.file_url
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
    object.ap_actors[0]
  end

  def profile_name
    if actor.remote?
      actor.data['name']&.presence || actor.data['preferredUsername']
    else
      actor.name.presence || actor.preferred_username
    end
  end

  def profile_url
    if actor.remote?
      actor.data['url']
    else
      '/'
    end
  end

  def preferred_username
    if actor.remote?
      "@#{actor.preferred_username}@#{URI.parse(actor.guid).host}"
    else
      "@#{actor.preferred_username}"
    end
  end

  def avatar_url
    if actor.local?
      actor.icon_url
    else
      actor.data.dig('icon', 'url')
    end
  end

  def object_url
    if object.remote?
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
    liked_ap_object_ids.include?(object['id'])
  end
end
