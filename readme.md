##Creating a new project with Middleman
`gem install middleman`
`middleman init MYPROJECTNAME`

##Blogging with Middleman

- Insert `gem "middleman-blog"` in the Gemfile

- Activate the extension in config.rb
```ruby
activate :blog do |blog|
  # set options on blog
end
```

- Then add files running `middleman init --template=blog

That's it!

##Initialize a new Github repo
```git
git init
git add .
git commit -m first commit
git add remote origin myremotebranch
git push -u origin master
```
To delete a remote branch:
`git push origin :remote-branch`

##Creating a new post
run `middleman article --lang <locale> TITLE`

##Left to do
- Images path!!
- [Fix categories metadata](https://github.com/middleman/middleman/issues/1110) + categories description
- [Blog search](https://github.com/slashdotdash/jekyll-lunr-js-search) and [another link](http://forum.middlemanapp.com/t/site-search-e-g-via-lunr/1334). I could use [Google](https://www.google.com/cse/create/new)
- in the `<head>`, add links to language options for articles (rel="alternate" hreflang="x")
- newsletter more obvious (footer)
- About categories part 
- dates translation
- 404 to pimp
- make the blog public
- redirection according to languages + customize htaccess