class AddGuidToActivityPubLikes < ActiveRecord::Migration[7.1]
  def change
    add_column :activity_pub_likes, :guid, :string
  end
end
