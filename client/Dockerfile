# =============================
# 1. Builder Stage
# =============================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy application code
COPY . .

# Build Next.js app
RUN npm run build


# =============================
# 2. Runner Stage (Tiny, optimized)
# =============================
FROM node:20-alpine

# Add dumb-init for signal handling
RUN apk add --no-cache dumb-init

WORKDIR /app

# Copy ONLY required files
COPY package*.json ./

# Install ONLY production dependencies
RUN npm ci --omit=dev && npm cache clean --force

# Copy built output
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/next.config.* .

# Create non-root user
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
USER nodejs

EXPOSE 3000

ENTRYPOINT ["dumb-init", "--"]

CMD ["npm", "start"]
