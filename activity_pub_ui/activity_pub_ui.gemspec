require_relative "lib/activity_pub_ui/version"

Gem::Specification.new do |spec|
  spec.name        = "activity_pub_ui"
  spec.version     = ActivityPubUi::VERSION
  spec.authors     = ["mbajur"]
  spec.email       = ["mbajur@gmail.com"]
  spec.homepage    = "https://github.com/mbajur"
  spec.summary     = "Summary of ActivityPubUi."
  spec.description = "Description of ActivityPubUi."

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the "allowed_push_host"
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/mbajur"
  spec.metadata["changelog_uri"] = "https://github.com/mbajur"

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]
  end

  spec.add_dependency "rails", ">= 7.1.3.2"
  spec.add_dependency "pagy", "~> 8.4.0"
  spec.add_dependency "ransack", "~> 4.1.1"
end
