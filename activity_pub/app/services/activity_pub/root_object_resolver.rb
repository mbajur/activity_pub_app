module ActivityPub
  # For initial/master object resolving, not for the subsequential resolve
  class RootObjectResolver
    def initialize(uri, shallow: false, skip_if_fresh: true)
      @uri = uri
      @shallow = shallow
      @skip_if_fresh = skip_if_fresh
    end

    def call
      remote_object = HttpClient.new(nil).get(URI.parse(@uri)).body

      local_object = ActivityPub::ObjectResolver.new(
        remote_object['id'], shallow: @shallow, skip_if_fresh: @skip_if_fresh
      ).call

      local_object
    end
  end
end
