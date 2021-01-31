FROM node:15.7.0-alpine3.10

RUN apk update && \
    apk add --no-cache --virtual \
      git bash less

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

ADD . /app

ENTRYPOINT ["./docker-entrypoint.sh"]
