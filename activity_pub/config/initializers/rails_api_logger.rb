module InboundRequestLogPatch
  module ClassMethods
    def ransackable_attributes(auth_object = nil)
      super + ['response_code']
    end

    def ransackable_associations(auth_object = nil)
      []
    end
  end

  def self.prepended(base)
    base.singleton_class.prepend(ClassMethods)
  end
end

module OutboundRequestLogPatch
  module ClassMethods
    def ransackable_attributes(auth_object = nil)
      super + ['response_code']
    end

    def ransackable_associations(auth_object = nil)
      []
    end
  end

  def self.prepended(base)
    base.singleton_class.prepend(ClassMethods)
  end
end

Rails.application.config.to_prepare do
  RailsApiLogger::InboundRequestLog.prepend InboundRequestLogPatch
  RailsApiLogger::OutboundRequestLog.prepend OutboundRequestLogPatch
end
