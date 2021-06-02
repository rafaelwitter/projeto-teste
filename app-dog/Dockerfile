FROM node:10.19.0-alpine

RUN apk add --no-cache bash

RUN npm config set cache /home/node/projeto-teste/app-dog/.npm-cache --global

RUN npm i -g @nestjs/cli@7.6.0

USER node

WORKDIR /home/node/projeto-teste/app-dog