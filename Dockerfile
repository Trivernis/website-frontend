FROM docker.io/node:20.15.0-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build


FROM docker.io/node:20.5.0-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit dev
COPY --from=builder /app/build /app
EXPOSE 3000

CMD ["node", "."]
