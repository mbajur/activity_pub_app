module ActivityPub
  class Group < ActivityPub::Object
    store_accessor :data, GroupResource.data_attributes.map(&:key)

    before_create :generate_keys

    def local_username_and_domain
      "#{preferred_username}@#{ActivityPub.domain}"
    end

    def to_webfinger_s
      "acct:#{local_username_and_domain}"
    end

    def to_activitypub_type
      'Group'
    end

    private

    def generate_keys
      return unless local? && private_key.blank? && public_key.blank?

      keypair = OpenSSL::PKey::RSA.new(2048)
      self.private_key = keypair.to_pem
      self.public_key  = keypair.public_key.to_pem
    end
  end
end
