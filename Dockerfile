FROM docker.io/node:20.15.0-alpine AS builder

ARG STRAPI_CMS_URL
ENV STRAPI_CMS_URL $STRAPI_CMS_URL  

ARG STRAPI_CMS_API_KEY
ENV STRAPI_CMS_API_KEY $STRAPI_CMS_API_KEY

ENV NODE_ENV production

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
