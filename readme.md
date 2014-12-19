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

- Then add files running 'middleman init --template=blog'

That's it!