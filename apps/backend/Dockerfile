# Stage 1: Install dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY ../../pnpm-lock.yaml ./
COPY package.json ./

# Copy backend package.json and pnpm workspace files
COPY apps/backend/package.json ./apps/backend/
COPY pnpm-workspace.yaml ./

# Install pnpm globally and dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile --workspace-root

# Stage 2: Build the backend
FROM node:18-alpine AS builder
WORKDIR /app

# Copy the node_modules and source code from the previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages ./packages
COPY --from=deps /app/apps ./apps

# Build the backend
WORKDIR /app/apps/backend
RUN pnpm run build

# Stage 3: Serve the backend
FROM node:18-alpine AS runner
WORKDIR /app

# Copy build output and node_modules from the previous stage
COPY --from=builder /app/apps/backend ./
COPY --from=builder /app/node_modules ./node_modules

# Expose port and run the application
EXPOSE 4000
CMD ["pnpm", "run", "start"]