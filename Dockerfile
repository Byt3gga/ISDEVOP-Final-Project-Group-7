# Use the official Node.js image (v18)
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Upgrade npm to the latest version
RUN npm install -g npm@latest

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 80

# Run the app
CMD ["npm", "start"]
