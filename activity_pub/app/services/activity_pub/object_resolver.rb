module ActivityPub
  class ObjectResolver
    # Creates a new draft ActivityPub::Object record or finds already existing
    # one for given guid and enqueues `ActivityPub::ResolveObjectJob` for this
    # record.
    #
    # For subsequential object resolving. Should be called by
    # RootObjectResolver, do not call it directly.
    def initialize(uri, shallow: false, skip_if_fresh: true)
      @uri = uri
      @shallow = shallow
      @skip_if_fresh = skip_if_fresh
    end

    def call
      local_object = ActivityPub::Object.create_or_find_by(guid: @uri)
      ActivityPub::ResolveObjectJob.perform_later(
        local_object, shallow: @shallow, skip_if_fresh: @skip_if_fresh
      )

      local_object
    end
  end
end
