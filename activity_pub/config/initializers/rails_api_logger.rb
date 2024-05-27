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

InboundRequestLog.prepend InboundRequestLogPatch
