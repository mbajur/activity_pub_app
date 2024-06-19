require "activity_pub/version"
require "activity_pub/engine"

require 'faraday'
require 'faraday_middleware'
require 'rails_api_logger'
require 'activity_pub/http_client'
require 'granola'
require 'oj'
require 'good_job'
require 'http_signatures'

require 'http_signatures/extensions/faraday'
require 'faraday_middleware/rails_api_outbound_logger'
require 'faraday_middleware/digest_header'

module ActivityPub
  mattr_accessor :domain
  mattr_accessor :object_handlers
  mattr_accessor :object_type_models

  self.domain = nil
  self.object_handlers = {}
  self.object_type_models = {}

  def self.setup(&block)
    yield self
  end
end
