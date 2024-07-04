module ActivityPub
  class GroupResource
    include RoutingHelper
    include BaseResource

    object_type 'Group'
    category :actor

    has_inbox true
    has_outbox true
    has_followers true

    register_data_attribute :name
    register_data_attribute :public_key
    register_data_attribute :private_key
    register_data_attribute :preferred_username
    register_data_attribute :summary
    register_data_attribute :url
    register_data_attribute :public_key
    register_data_attribute :manually_approves_followers
    register_data_attribute :inbox

    register_field :name
    register_field :preferred_username
    register_field :summary
    register_field :public_key, :public_key_field
    register_field :manually_approves_followers

    public_url_resolver do |object|
      "https://#{ActivityPub.domain}/groups/#{object.id}"
    end

    def public_key_id
      activity_pub_app.object_url(@object, anchor: 'main-key', **default_url_options)
    end

    def guid
      @object.guid.presence || activity_pub_app.object_url(@object, **default_url_options)
    end

    private

    def public_key_field
      {
        id: public_key_id,
        owner: guid,
        public_key_pem: @object.public_key
      }
    end
  end
end
