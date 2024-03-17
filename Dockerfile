FROM node:20.11.0

WORKDIR /usr/src/app

COPY package*.json ./

# Añade esta línea para asegurar que cualquier módulo nativo se compile para Linux
RUN npm install --force bcrypt

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
