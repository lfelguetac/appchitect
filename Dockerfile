FROM node:12

WORKDIR /dist
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install --production
COPY ./dist .
COPY ormconfig.json .

EXPOSE 5000
CMD [ "npm", "run", "start:prod"]
