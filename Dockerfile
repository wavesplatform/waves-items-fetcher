FROM node:alpine

WORKDIR /app

# Remove it for production
COPY .npmrc ./

COPY package.json package-lock.json ./

# Build deps for alpine
RUN apk update && apk upgrade && \
    apk add --no-cache --virtual .build-deps alpine-sdk python

# Install node packages
RUN npm cache clean --force && npm install --no-save

# Remove deps
RUN apk del .build-deps

COPY . .
