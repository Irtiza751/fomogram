# Stage 1: Install dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY ../../pnpm-lock.yaml ./
COPY package.json ./

# Copy client package.json and pnpm workspace files
COPY apps/client/package.json ./apps/client/
COPY pnpm-workspace.yaml ./

# Install pnpm globally and dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile --workspace-root

# Stage 2: Build the client
FROM node:18-alpine AS builder
WORKDIR /app

# Copy the node_modules and source code from the previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages ./packages
COPY --from=deps /app/apps ./apps

# Build the client
WORKDIR /app/apps/client
RUN pnpm run build

# Stage 3: Serve the client
FROM node:18-alpine AS runner
WORKDIR /app

# Copy build output and node_modules from the previous stage
COPY --from=builder /app/apps/client ./
COPY --from=builder /app/node_modules ./node_modules

# Expose port and run the application
EXPOSE 3000
CMD ["pnpm", "run", "start"]