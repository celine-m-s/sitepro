##Creating a new project with Middleman:
`gem install middleman`
`middleman init MYPROJECTNAME`

##Blogging with Middleman:

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