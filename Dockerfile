FROM node:16-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
RUN npm run format
RUN npm run lint
RUN npm run test

# Run the app on container startup.
EXPOSE 3000
ENTRYPOINT [ "npm", "run" , "start" ]