# Use the official Node.js image (v18)
FROM node:18

# Set the working directory in the container
WORKDIR /src

EXPOSE 80

# Upgrade npm to the latest version
RUN npm install -g npm@latest

# Copy package.json, package-lock and install dependencies
COPY package.json /src
COPY node_modules /src
RUN npm install --loglevel silly

# Copy the rest of the application code
COPY . /src


