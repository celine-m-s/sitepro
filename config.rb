# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# activate :autoprefixer do |prefix|
#   prefix.browsers = "last 2 versions"
# end

activate :directory_indexes

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

activate :blog do |blog|
  # https://middlemanapp.com/basics/blogging/
  # Put your article sources at cats/2013-11-12-best-cats.html and they will be written out to cats/2013/11/12/best-cats.html 
  # without you having to specify a category in frontmatter. 
  # You can also access the category extracted from the source
  # path via current_article.metadata[:page]['category'].
  blog.sources = "{category}/{year}-{month}-{day}-{title}.html"
  blog.permalink = "{category}/{year}/{month}/{day}/{title}.html"
  blog.taglink = "etiquettes/{tag}.html"
  blog.tag_template = "tag.html"
  blog.paginate = true
  blog.layout = "article"

  blog.custom_collections = {
    category: {
      link: '/categories/{category}.html',
      template: '/category.html'
    }
  }
end

activate :syntax, :line_numbers => true
set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true, :wrap_code => true

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

activate :deploy do |deploy|
  deploy.deploy_method = :git
  # Optional Settings
  # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
  # deploy.branch   = 'custom-branch' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end

Time.zone = "Paris"
page "/feed.xml", layout: false
