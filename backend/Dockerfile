# backend/Dockerfile
FROM node:20-alpine

# Instalamos nodemon globalmente para el modo desarrollo
RUN npm install -g nodemon

WORKDIR /app

# Copiamos solo los archivos de dependencias para aprovechar el cache
COPY package*.json ./

RUN npm install

# Copiamos el resto del código (server.js, etc.)
COPY . .

# El backend usa el puerto 4000
EXPOSE 4000

# Usamos el script 'dev' definido en tu package.json
CMD ["npm", "run", "dev"]