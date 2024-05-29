class EnableHstore < ActiveRecord::Migration[7.1]
  def change
    disable_extension("hstore")
  end
end
