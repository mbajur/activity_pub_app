class AddApObjectToUploads < ActiveRecord::Migration[7.1]
  def change
    add_reference :uploads, :ap_object, null: true, foreign_key: { to_table: :activity_pub_objects }, type: :bigint
  end
end
