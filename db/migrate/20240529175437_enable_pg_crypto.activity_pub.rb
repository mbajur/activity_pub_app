# This migration comes from activity_pub (originally 20240511093223)
class EnablePgCrypto < ActiveRecord::Migration[7.1]
  def change
    enable_extension("pgcrypto")
  end
end
