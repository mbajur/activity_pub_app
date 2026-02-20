module ActivityPub
  class IconType
    include StoreModel::Model

    attribute :url, :string
  end
end
