FROM ruby:2.7.2
ENV LANG C.UTF-8

ENV APP_DIR="/app"

# Add new user to run the whole thing as non-root.
RUN set -ex \
    && addgroup app \
    && adduser --ingroup app --home $APP_DIR --disabled-password app;

RUN apt-get update -y
RUN apt-get install vim -y
RUN apt-get install nodejs -y

RUN mkdir ~/.ssh

COPY ./Gemfile Gemfile

RUN gem install bundler
RUN bundle install

COPY --chown=app:app . $APP_DIR

USER app

WORKDIR $APP_DIR
EXPOSE 4567
