# frontend/Dockerfile
# Use official Node.js 20 image for the build stage
FROM node:20-alpine as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Vue.js project files
COPY . .

# Build the Vue app
RUN npm run build

# Use an Nginx image to serve the built files
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80
