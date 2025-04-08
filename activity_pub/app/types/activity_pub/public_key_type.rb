module ActivityPub
  class PublicKeyType
    include StoreModel::Model

    attribute :id, :string
    attribute :owner, :string
    attribute :public_key_pem, :string
  end
end
