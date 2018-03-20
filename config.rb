# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :directory_indexes

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

configure :development do
  set :debug_assets, true
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :gzip
  activate :minify_html
end

# https://middlemanapp.com/advanced/localization/
# activate :i18n, :mount_at_root => :fr

# Categories
# https://middlemanapp.com/advanced/sitemap/#using-the-sitemap-in-config-rb
# ready do
#   sitemap.resources.group_by {|p| p.data["category"] }.each do |category, pages|
#     proxy "/categories/#{category}.html", "category.html",
#       :locals => { :category => category, :pages => pages }
#   end
# end

# Cache
activate :asset_hash

