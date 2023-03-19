FROM node:19
ENV NODE_ENV=production

WORKDIR /app

RUN npm install --omit=dev
COPY ["package.json", "package-lock.json*", "./"]

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
