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

module ActivityPub
  mattr_accessor :domain

  self.domain = nil

  def self.setup(&block)
    yield self
  end
end
