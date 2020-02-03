FROM node:alpine3.11
RUN mkdir -p /usr/src/app
COPY index.js /usr/src/app
EXPOSE 3000
CMD [ "node", "/usr/src/app/index" ]