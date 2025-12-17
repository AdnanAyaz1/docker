
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i --only=production 

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/next.config.* .

RUN adduser -S nodejs
USER nodejs

EXPOSE 3000

CMD ["npm", "start"]
