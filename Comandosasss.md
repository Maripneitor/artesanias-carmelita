docker-compose up --build

"para detener los contenedores"
docker-compose down

"para iniciar los contenedores sin reconstruir"
docker-compose up

"para reconstruir los contenedores"
docker-compose up --build

"para reconstruir solo el backend"
docker-compose up backend

"para reconstruir solo el frontend"
docker-compose up frontend

Flujo de trabajo en git

1. git pull
2. git add .
3. git commit -m "mensaje"
4. git push
