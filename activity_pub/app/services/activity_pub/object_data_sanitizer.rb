module ActivityPub
  class ObjectDataSanitizer
    def initialize(data)
      @data = data
    end

    def call
      data = @data

      data = @data.deep_transform_keys(&:underscore)
      data = sanitize_object(data)
      data = sanitize_actor(data)
      data = sanitize_in_reply_to(data)
      data = sanitize_attributed_to(data)
      data = sanitize_replies(data)

      data
    end

    private

    def sanitize_object(data)
      object = data['object']
      return data unless object.present?

      if object.is_a?(String)
        data['object'] = { 'id' => object }
      else
        data['object'] = object
      end

      data
    end

    def sanitize_actor(data)
      actor = data['actor']
      return data unless actor.present?

      if actor.is_a?(String)
        data['actor'] = { 'id' => actor }
      else
        data['actor'] = actor
      end

      data
    end

    def sanitize_in_reply_to(data)
      in_reply_to = data['in_reply_to']
      return data unless in_reply_to.present?

      data['in_reply_to'] = in_reply_to.is_a?(Array) ? in_reply_to[0] : in_reply_to

      data
    end

    def sanitize_attributed_to(data)
      attributed_to = data['attributed_to']
      return data unless attributed_to.present?

      data['attributed_to'] = attributed_to.is_a?(Array) ? attributed_to : [attributed_to]

      data
    end

    def sanitize_replies(data)
      replies = data['replies']
      return data unless data['replies'].present?

      result = if replies.is_a?(String)
                 { 'id' => replies }
               else
                  replies
               end

      data['replies'] = result
      data
    end
  end
end
