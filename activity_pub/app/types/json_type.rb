class JsonType < ActiveRecord::Type::Value
  def type
    :json
  end

  def cast(value)
    # return value if value.is_a?(Time)
    # return value.to_time if value.is_a?(Date)
    return nil if value.blank?

    JSON.parse(value)
  rescue ArgumentError, TypeError
    nil
  end
end
