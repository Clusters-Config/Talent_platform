FROM node:alpine AS  build-backend 

WORKDIR /app 

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3001
EXPOSE 8080

CMD ["npm","run","test"]





