module ActivityPub
  class Person < ActivityPub::Object
    class DataType
      include StoreModel::Model

      attribute :name, :string
      attribute :public_key, ActivityPub::PublicKeyType.to_type, default: -> { {}}
      attribute :private_key, :string
      attribute :preferred_username, :string
      attribute :summary, :string
      attribute :url, :string
      attribute :manually_approves_followers, :boolean, default: -> { false }
      attribute :inbox, :string
      attribute :icon, ActivityPub::IconType.to_type
    end

    attribute :data, DataType.to_type

    before_create :generate_keys

    def local_username_and_domain
      "#{data.preferred_username}@#{ActivityPub.domain}"
    end

    def to_webfinger_s
      "acct:#{local_username_and_domain}"
    end

    def to_activitypub_type
      'Person'
    end

    private

    def generate_keys
      return unless local? && data.private_key.blank? && data.public_key.blank?

      keypair = OpenSSL::PKey::RSA.new(2048)
      self.data.private_key = keypair.to_pem
      self.data.public_key = ActivityPub::PublicKeyType.new(public_key_pem: keypair.public_key.to_pem)
    end
  end
end
