class CreateUploads < ActiveRecord::Migration[7.1]
  def change
    create_table :uploads, id: :bigint do |t|
      t.json :file_data

      t.timestamps
    end
  end
end
