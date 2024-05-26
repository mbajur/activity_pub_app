module ActivityPub
  module BaseResource
    extend ActiveSupport::Concern

    DataAttribute = Struct.new(:key)

    Field = Struct.new(:key, :method) do
      def resolve_for(instance, object)
        return object.send(key) if method.blank?

        instance.send(method)
      end
    end

    delegate :type,
             :has_inbox,
             :has_outbox,
             :fields,
             to: 'self.class'

    attr_reader :object

    def initialize(object)
      @object = object
    end

    def public_url
      @object.url || self.class
                         .instance_variable_get(:@_public_url_resolver)
                         &.call(@object)
    end

    def object_type
      @type
    end

    def has_inbox?
      self.class.has_inbox
    end

    def has_outbox?
      self.class.has_outbox
    end

    def field_value(key)
      fields.find { |f| f.key == key }.resolve_for(self, @object)
    end

    module ClassMethods
      # Type
      def type(type = nil)
        @type = type if type.present?
        @type
      end

      # Data attributes
      def _data_attributes
        @_data_attributes ||= []
      end

      def register_data_attribute(key)
        _data_attributes.push(DataAttribute.new(key))
      end

      def data_attributes
        _data_attributes
      end

      # Fields
      def _fields
        @_fields ||= []
      end

      def register_field(key, method = nil)
        _fields.push(Field.new(key, method))
      end

      def fields
        _fields
      end

      # Public URL
      def public_url_resolver(&block)
        @_public_url_resolver = block
      end

      # Category
      def category(category = nil)
        @_category = category if category.present?
        @_category || :object
      end

      # Inbox and Outbox
      def has_inbox(val = nil)
        @_has_inbox = val if val.present?
        @_has_inbox || false
      end

      def has_outbox(val = nil)
        @_has_outbox = val if val.present?
        @_has_outbox || false
      end
    end
  end
end
