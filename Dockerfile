FROM node:latest
MAINTAINER clem <clement.boissie@gmail.com>

WORKDIR /opt/app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]