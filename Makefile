deploy:
	docker-compose run site bash -c "bundle exec middleman build"

	# move SSH configuration to secrets
	rm -rf secrets/*
	mkdir -p secrets
	cp ~/.ssh/* secrets/

	# change container SSH configuration
	docker-compose run site bash -c 'cp secrets/* ~/.ssh/ && \
	git config --global user.email "celine.martinet.sanchez@gmail.com" && \
	git config --global user.name "Docker" && \
	bundle exec middleman deploy'

	rm -rf secrets/*

run:
	docker-compose up

bundle:
	docker-compose run site bash -c "bundle install"

# Default category
# not working with bash aliases.
CATEGORY = breves

article:
	docker-compose run -u app site bash -c 'bundle exec middleman article "$(TITLE)"'
	mkdir -p source/breves
	mv source/*.html.markdown source/breves/
