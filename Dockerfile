FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DATABASE_NAME="./frozen.db" SECRET_KEY="AHMEDMOFTAH" PORT=8080

EXPOSE 8080

CMD ["npm", "start"]