FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Copy built code WITHOUT giving ownership
COPY --from=builder /app/dist ./dist

# Create non-root user
RUN adduser -S non_root_user
USER non_root_user

EXPOSE 4000
CMD ["node", "dist/server.js"]
