FROM ruby:2.7.2
ENV LANG C.UTF-8

RUN apt-get update -y
RUN apt-get install vim -y
RUN apt-get install nodejs -y

RUN mkdir ~/.ssh

COPY ./Gemfile Gemfile

RUN gem install bundler
RUN bundle install

COPY . code
WORKDIR code
EXPOSE 4567
