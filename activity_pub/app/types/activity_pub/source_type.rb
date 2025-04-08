module ActivityPub
  class SourceType
    include StoreModel::Model

    attribute :content, :string
    attribute :media_type, :string
  end
end
