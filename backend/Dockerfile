FROM node:23 AS build

WORKDIR /app/frontend

COPY ./package*.json ./package*.json

COPY . .

RUN npm i

FROM node:23 AS dev

WORKDIR /app/frontend

COPY --from=build . .

CMD [ "npm", "run", "dev" ]