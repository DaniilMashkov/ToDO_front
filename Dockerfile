FROM node:lts AS development

ENV PORT=3000

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm ci
COPY . /code

RUN npm run build
CMD [ "npx", "serve", "-s", "build" ]
