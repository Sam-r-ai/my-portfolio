# Use an official lightweight Node.js image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the correct subdirectory (gimhoportfolio/)
COPY gimhoportfolio/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files after installing dependencies
COPY gimhoportfolio ./

# Build the Next.js app (output stored in `.next`)
RUN npm run build

# ---------------------------
# Create a lightweight production image
# ---------------------------
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/public public

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
