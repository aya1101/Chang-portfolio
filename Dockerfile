# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Build project (frontend + server bundle)
RUN npm run build

# Render sẽ set biến PORT (ví dụ 10000)
ENV PORT=10000

# Expose port (local test thì 5000, Render auto map PORT env)
EXPOSE 10000

# Start app in production
CMD ["npm", "start"]
