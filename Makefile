deploy:
	docker-compose run site bash -c "middleman build"

	# move SSH configuration to secrets
	rm -rf secrets/*
	mkdir -p secrets
	cp ~/.ssh/* secrets/

	# change container SSH configuration
	docker-compose run site bash -c 'cp secrets/* ~/.ssh/ && \
	git config --global user.email "celine.martinet.sanchez@gmail.com" && \
	git config --global user.name "Docker" && \
	middleman deploy'

	rm -rf secrets/*

run:
	docker-compose up

article:
	docker-compose run site bash -c 'middleman article "$(TITLE)"'
	mkdir -p source/$(CATEGORY)
	mv source/*.html.markdown source/$(CATEGORY)/
