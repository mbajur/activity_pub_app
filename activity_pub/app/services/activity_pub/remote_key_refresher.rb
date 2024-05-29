module ActivityPub
  class RemoteKeyRefresher
    def initialize(uri)
      @uri = uri
    end

    def call
      local_object = ActivityPub::Object.create_or_find_by(guid: @uri)
      remote_object = HttpClient.new(nil).get(URI.parse(local_object.guid)).body

      local_object.update!(public_key: remote_object.dig('publicKey', 'publicKeyPem'))

      local_object
    end
  end
end
