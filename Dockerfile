# SERVER DOCKERFILE
# Select a base image that includes Node
FROM node:22-slim

# Set up a working directory in the container for your application
WORKDIR /app

# Copy the backend code into the container
COPY . /app

ENV PORT=8080

RUN npm install

CMD [ "npm", "start" ]
