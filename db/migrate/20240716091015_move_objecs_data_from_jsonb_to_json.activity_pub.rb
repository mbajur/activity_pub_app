# This migration comes from activity_pub (originally 20240716090938)
class MoveObjecsDataFromJsonbToJson < ActiveRecord::Migration[7.1]
  def change
    change_column :activity_pub_objects, :data, :jsonb, default: nil
    change_column :activity_pub_objects, :data, 'json USING CAST(data AS json)', default: '{}'
  end
end
