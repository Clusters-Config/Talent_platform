FROM node:latest as build-app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG NODE_ENV=production

RUN npm run build



FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-app /app/dist /usr/share/nginx/html


ENTRYPOINT ["nginx", "-g", "daemon off;"]
