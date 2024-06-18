# This migration comes from activity_pub (originally 20240618212159)
class AddGuidToActivityPubLikes < ActiveRecord::Migration[7.1]
  def change
    add_column :activity_pub_likes, :guid, :string
  end
end
