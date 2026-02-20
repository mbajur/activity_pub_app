class BaseDecorator < SimpleDelegator
  def class
    __getobj__.class
  end

  def initialize(resource)
    @resource = resource
  end

  delegate :data, to: :resource

  private

  attr_reader :resource
end
