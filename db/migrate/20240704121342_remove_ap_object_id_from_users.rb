class RemoveApObjectIdFromUsers < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :ap_object_id, :references
  end
end
