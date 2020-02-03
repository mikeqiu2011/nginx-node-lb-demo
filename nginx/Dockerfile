FROM nginx:1.17.8

RUN apt-get update && apt-get install -y \
  iputils-ping \
  curl \
  && rm -rf /var/lib/apt/lists/*

COPY nginx.conf /etc/nginx/conf.d/default.conf