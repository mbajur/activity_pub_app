module ActivityPub
  class PersonResource
    include RoutingHelper
    include BaseResource

    object_type 'Person'
    category :actor

    has_inbox true
    has_outbox true

    register_data_attribute :name
    register_data_attribute :public_key
    register_data_attribute :private_key
    register_data_attribute :preferred_username
    register_data_attribute :summary
    register_data_attribute :url
    register_data_attribute :public_key

    register_field :name
    register_field :preferred_username
    register_field :summary
    register_field :public_key, :public_key_field

    public_url_resolver do |object|
      "https://some-domain.com/users/#{object.id}"
    end

    private

    def public_key_field
      {
        id: public_key_id,
        owner: activity_pub_app.object_url(@object),
        public_key_pem: @object.public_key
      }
    end

    def public_key_id
      activity_pub_app.object_url(@object, anchor: 'main-key')
    end
  end
end
