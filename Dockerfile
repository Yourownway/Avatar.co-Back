
FROM node:10

WORKDIR /SIMPLON/final/appSport.co/Back

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]