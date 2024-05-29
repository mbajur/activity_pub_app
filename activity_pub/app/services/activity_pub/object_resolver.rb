module ActivityPub
  class ObjectResolver
    # Creates a new draft ActivityPub::Object record or finds already existing
    # one for given guid and enqueues `ActivityPub::ResolveObjectJob` for this
    # record.
    #
    # For subsequential object resolving. Should be called by
    # RootObjectResolver, do not call it directly.
    def initialize(uri)
      @uri = uri
    end

    def call
      local_object = ActivityPub::Object.create_or_find_by(guid: @uri)
      ActivityPub::ResolveObjectJob.perform_later(local_object)

      local_object
    end
  end
end
