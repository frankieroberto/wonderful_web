require File.expand_path('../boot', __FILE__)

require "action_controller/railtie"
require "sprockets/railtie"

if defined?(Bundler)
  Bundler.require(*Rails.groups(:assets => %w(development test)))
end

module WonderfulWeb
  class Application < Rails::Application

    config.session_store :disabled
    config.encoding = "utf-8"
    config.logger = Logger.new(STDOUT)

    config.secret_key_base = ENV['SECRET_KEY_BASE']

    config.active_support.escape_html_entities_in_json = true
    config.active_support.deprecation = :log

    config.assets.enabled = true
    config.assets.version = '1.0'

    config.action_dispatch.best_standards_support = :builtin

  end
end
