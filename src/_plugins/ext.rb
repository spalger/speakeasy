require "jekyll-assets"
require "react-jsx-sprockets"
require "sprockets"

ReactJSXSprockets.configure do |config|
  config.extensions = %w( jsx )
end

indent = '  '

Sprockets.unregister_preprocessor "application/javascript", Sprockets::DirectiveProcessor
Sprockets.register_preprocessor "application/javascript", :module_wrap do |context, data|
  data.scan(/\bload\('([^\'\n]+)'\)/) { |match| context.require_asset match[0] }
  indented = data.gsub(/\n/, "\n  ")

"provide('#{context.logical_path}', function (module, exports, load) {
  'use strict';

  #{indented}
});"

end
Sprockets.register_preprocessor "application/javascript", Sprockets::DirectiveProcessor