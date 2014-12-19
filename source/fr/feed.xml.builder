xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  site_url = data.site.french.url
  xml.title data.site.french.title
  xml.subtitle data.site.french.description
  xml.id URI.join(site_url, '/fr')
  xml.link "href" => URI.join(site_url, '/fr')
  xml.link "href" => URI.join(site_url, current_page.path), "rel" => "self"
  xml.updated(blog.local_articles('fr').first.date.to_time.iso8601) unless blog.local_articles('fr').empty?
  xml.author { xml.name "Céline Martinet Sanchez" }

  blog.local_articles('fr')[0..5].each do |article|
    xml.entry do
      xml.title article.title
      xml.link "rel" => "alternate", "href" => URI.join(site_url, article.url)
      xml.id URI.join(site_url, article.url)
      xml.published article.date.to_time.iso8601
      xml.updated File.mtime(article.source_file).iso8601
      xml.author { xml.name "Céline Martinet Sanchez" }
      xml.summary article.data.summary, "type" => "html"
      xml.content article.body, "type" => "html"
    end
  end
end
