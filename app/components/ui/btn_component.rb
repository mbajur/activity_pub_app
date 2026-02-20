# frozen_string_literal: true

class Ui::BtnComponent < ViewComponent::Base
  def initialize(**args)
    @args = args
    args.merge!(class: classes)

    super
  end

  private

  def classes
    'border border-black text-xs h-fit py-1 px-4 inline-block ml-auto uppercase tracking-widest bg-black text-white cursor-pointer'
  end
end
