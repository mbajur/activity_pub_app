module ActivityPub
  class AttachmentType
    include StoreModel::Model

    attribute :url, :string
    attribute :name, :string
    attribute :type, :string
    attribute :width, :integer
    attribute :height, :integer
    attribute :media_type, :string
  end
end
