FROM node:12.16.2-alpine3.9

#RUN apk --no-cache add git python make g++ bash

WORKDIR  /var/www

ADD ./package.json /var/www/package.json

RUN yarn install

ENV PATH /var/www/node_modules/.bin:$PATH

