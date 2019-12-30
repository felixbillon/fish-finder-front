ARG VERSION=1.17.6

FROM nginx:$VERSION-alpine

WORKDIR /app

COPY dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80