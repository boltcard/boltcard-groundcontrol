# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY ./ /app

# Install any needed packages specified in package.json
RUN npm install


# Set the command to run the application
CMD npm start & npm run worker-blockprocessor & npm run worker-processmempool & npm run worker-sender