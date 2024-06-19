require_relative "lib/activity_pub/version"

Gem::Specification.new do |spec|
  spec.name        = "activity_pub"
  spec.version     = ActivityPub::VERSION
  spec.authors     = ["mbajur"]
  spec.email       = ["mbajur@gmail.com"]
  spec.homepage    = "https://github.com/mbajur"
  spec.summary     = "Summary of ActivityPub."
  spec.description = "Description of ActivityPub."

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the "allowed_push_host"
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/mbajur"
  spec.metadata["changelog_uri"] = "https://github.com/mbajur/changelog"

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]
  end

  spec.add_dependency "rails", ">= 7.1.3.2"
  spec.add_dependency "faraday", "~> 1.10.3"
  spec.add_dependency "faraday_middleware", "~> 1.2.0"
  spec.add_dependency "granola", "~> 1.0.0"
  spec.add_dependency "oj", "~> 3.16.3"
  spec.add_dependency "good_job", "~> 3.28"
  spec.add_dependency "http_signatures"

  spec.add_development_dependency 'rspec', '~> 3.6'
  spec.add_development_dependency 'rspec-rails', '~> 4.0'
  spec.add_development_dependency 'factory_bot_rails'
  spec.add_development_dependency 'webmock'
end
