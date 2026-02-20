module ActivityPub
  class Announce < ActivityPub::Object
    class ObjectType
      include StoreModel::Model

      attribute :id, :string
    end

    class DataType
      include StoreModel::Model

      attribute :object, ObjectType.to_type
    end

    attribute :data, DataType.to_type
  end
end
