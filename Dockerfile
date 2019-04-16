FROM ruby:2.6
ENV LANG C.UTF-8

COPY ./Gemfile Gemfile
COPY ./Gemfile.lock Gemfile.lock

RUN gem install bundler
RUN bundle install

COPY . code
WORKDIR code
EXPOSE 4567

# CMD middleman build