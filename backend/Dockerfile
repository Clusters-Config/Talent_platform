FROM node:alpine as build-backend 

WORKDIR /app 

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3001

CMD ["npm","run","come"]

# give me the docker commands to build the backend image
# docker build -t backend .
# give me the docker commands to run the backend container and pass the environment variables
# docker run -d -p 3001:3001 --name backend -e PORT=3001 -e MONGO_URL=mongodb+srv://Cluster03625:football66A@project.zrmmz.mongodb.net/?retryWrites=true&w=majority&appName=Project -e JWT_SECRET=secret backend
# give me the docker commands to see the logs of the backend container
# docker logs backend
# give me the docker commands to stop the backend container
# docker stop backend
# give me the docker commands to remove the backend container
# docker rm backend




