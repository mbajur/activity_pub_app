class CreateRailsApiLoggerTable < ActiveRecord::Migration[7.1]
  def change
    create_table :inbound_request_logs do |t|
      t.string :uuid
      t.string :method
      t.string :path
      t.text :request_body
      t.text :request_headers
      t.text :response_body
      t.integer :response_code
      t.inet :ip_used
      t.timestamp :started_at
      t.timestamp :ended_at
      t.references :loggable, index: true, polymorphic: true, type: :uuid
      t.timestamps null: false
    end

    create_table :outbound_request_logs do |t|
      t.string :uuid
      t.string :method
      t.string :path
      t.text :request_body
      t.text :request_headers
      t.text :response_body
      t.integer :response_code
      t.inet :ip_used
      t.timestamp :started_at
      t.timestamp :ended_at
      t.references :loggable, index: true, polymorphic: true, type: :uuid
      t.timestamps null: false
    end
  end
end
