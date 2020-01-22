deploy:
	# move ssh key to secrets
# 	docker-compose run site bash -c "middleman build"
	cp ~/.ssh/id_rsa.pub secrets/id_rsa.pub
	cp ~/.ssh/id_rsa secrets/id_rsa

	# add this key to container
	docker-compose run site bash -c 'cp secrets/id_rsa.pub ~/.ssh/id_rsa.pub && \
	cp secrets/id_rsa ~/.ssh/id_rsa && \
	git config --global user.email "celine.martinet.sanchez@gmail.com" && \
	git config --global user.name "Docker" && \
	git checkout -b new_version && \
	git push origin new_version'

# 	docker-compose run site bash -c "middleman deploy"
