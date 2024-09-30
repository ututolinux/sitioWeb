FROM node:18-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY --from=builder /app /app
EXPOSE 3000
CMD ["pnpm", "start"]
