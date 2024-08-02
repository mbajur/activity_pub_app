# frozen_string_literal: true

class Ui::TwoColumnsLayoutComponent < ViewComponent::Base
  renders_one :left
  renders_one :right

  def current_class?(pattern)
    return 'flex items-center p-3 bg-gray-50 text-gray-900 font-semibold hover cursor-pointer' if request.path =~ pattern

    'flex items-center p-3 hover:bg-gray-50 cursor-pointer'
  end
end
