# This migration comes from activity_pub (originally 20240511093224)
class EnableHstore < ActiveRecord::Migration[7.1]
  def change
    disable_extension("hstore")
  end
end
