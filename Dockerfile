FROM node:15.13.0-alpine as build

WORKDIR /node/client

COPY ./package.json .

RUN yarn install

COPY . .

RUN yarn build 

FROM nginx:stable-alpine

COPY --from=build /node/client/build /usr/share/nginx/html

COPY nginx.config /etc/nginx/templates/default.conf.template

ENV PORT 8080

EXPOSE $PORT
