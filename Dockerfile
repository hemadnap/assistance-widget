# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/index.html

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 80
EXPOSE 80

# Start the application
CMD ["npx", "serve", "-l", "80"]