FROM node:20-alpine as base
WORKDIR /user/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
