# frozen_string_literal: true

class Ui::CardComponent < ViewComponent::Base
  renders_one :header
  renders_one :body
  renders_one :footer

  def initialize(id: nil)
    @id = id

    super
  end

  private

  attr_accessor :id
end
