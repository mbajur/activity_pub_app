class AddCounterCachesToActivityPubObject < ActiveRecord::Migration[7.1]
  def change
    add_column :activity_pub_objects, :attributions_count, :integer, default: 0
    add_column :activity_pub_objects, :children_count, :integer, default: 0
    add_column :activity_pub_objects, :followers_count, :integer, default: 0
    add_column :activity_pub_objects, :following_count, :integer, default: 0
    add_column :activity_pub_objects, :likes_count, :integer, default: 0
    add_column :activity_pub_objects, :liked_by_count, :integer, default: 0
    add_column :activity_pub_objects, :announced_count, :integer, default: 0
  end
end
