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

      batch = GoodJob::Batch.new
      batch.description = "Resolve #{remote_object['id']} object"

      batch.add do
        @local_object = ActivityPub::ObjectResolver.new(
          remote_object['id'], shallow: @shallow, skip_if_fresh: @skip_if_fresh
        ).call
      end

      batch.enqueue(uri: remote_object['id'])

      @local_object
    end
  end
end
