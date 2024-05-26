class EnableActivityPubPgExtensions < ActiveRecord::Migration[7.1]
  def change
    enable_extension 'pgcrypto'
    enable_extension 'hstore'
  end
end
