FROM node:14

WORKDIR /src

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install
RUN npm run build

COPY . .

EXPOSE 7001

CMD ["npm", "run", "dev"]

