# frozen_string_literal: true

class Ui::TopBarComponent < ViewComponent::Base
  renders_one :title
  renders_one :left
  renders_one :actions
end
