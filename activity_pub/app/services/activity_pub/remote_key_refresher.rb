module ActivityPub
  class RemoteKeyRefresher
    def initialize(uri)
      @uri = uri
    end

    def call
      local_object = ActivityPub::Object.create_or_find_by(guid: @uri)
      remote_object = HttpClient.new(nil).get(URI.parse(local_object.guid)).body
      remote_object = ActivityPub::ObjectDataSanitizer.new(remote_object).call

      local_object.update!(public_key: remote_object['public_key'])

      local_object
    end
  end
end
