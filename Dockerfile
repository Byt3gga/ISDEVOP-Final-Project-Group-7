# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker cache if dependencies don’t change
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --loglevel silly

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 80

# Start the application
CMD ["npm", "start"]
