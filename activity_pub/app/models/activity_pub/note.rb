module ActivityPub
  class Note < ActivityPub::Object
    store_accessor :data, NoteResource.data_attributes.map(&:key)
  end
end
