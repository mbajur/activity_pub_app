require "activity_pub/version"
require "activity_pub/engine"
require 'activity_pub/http_client'

require 'faraday'
require 'faraday_middleware'
require 'granola'
require 'oj'
require 'good_job'
require 'rails_api_logger'
require 'http_signatures'

require 'http_signatures/extensions/faraday'

module ActivityPub
  mattr_accessor :domain

  self.domain = nil

  def self.setup(&block)
    yield self
  end
end
