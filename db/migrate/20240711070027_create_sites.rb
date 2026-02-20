class CreateSites < ActiveRecord::Migration[7.1]
  def change
    create_table :sites, id: :bigint do |t|
      t.string :domain
      t.text :template_markup
      t.json :avatar_data

      t.timestamps
    end
    add_index :sites, :domain, unique: true
  end
end
