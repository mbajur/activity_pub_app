class BaseDecorator < SimpleDelegator
  def class
    __getobj__.class
  end

  def initialize(resource)
    @resource = resource
  end

  private

  attr_reader :resource
end
