# Ejercicio 2 - Docker Compose (corregido)

## Objetivo

Levantar la aplicación fullstack Node.js + Express + MongoDB + Frontend mediante Docker Compose, cumpliendo los siguientes requisitos:

- MongoDB debe persistir los datos en un volumen.
- Solo el contenedor del frontend debe exponer puertos al host.
- Todos los servicios deben estar conectados mediante una red personalizada.
- El backend debe obtener la conexión a MongoDB por variable de entorno.
- El frontend debe comunicarse con el backend mediante la variable `API_URI`.
- Se deben poblar los datos de MongoDB desde la API del backend usando `curl`.

---

### Paso 1. Generamos el Docker-compose.yml

El fichero `docker-compose.yml` se encuentra en la carpeta `Ejercicio2`. Contiene la definición de los tres servicios: `mongo`, `backend` y `frontend`, así como la red personalizada y el volumen persistente.

### Paso 2. Construye las imágenes y levanta el entorno

```bash
docker compose up -d --build
 ```

Utilizamos la opción --build para asegurarnos de que Docker reconstruya las imágenes usando los últimos cambios en los Dockerfile.

Salida del docker ps para verificar que los contenedores han sido arrancados.

![docker ps](./Captura%20Docker%20ps.png)

Para poder parar los contenedores:

```bash
docker compose down
 ```

Para eliminar volúmenes y la red personalizada:

```bash
docker compose down -v
```

## Paso 3. Poblar la base de datos MongoDB

Los registros deben insertarse usando la API expuesta por el backend, así garantizamos compatibilidad con el modelo de datos.

```bash
docker run --rm --network lemoncode-challenge curlimages/curl \
  -X POST http://topics-api:5000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"id":1,"name":"Docker_2"}'

docker run --rm --network lemoncode-challenge curlimages/curl \
  -X POST http://topics-api:5000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"id":2,"name":"Kubernetes_2"}'
  ```

  ```md
> Usamos la imagen `curlimages/curl` dentro de la red Docker para garantizar que el contenedor `topics-api` sea accesible desde dentro del entorno Docker Compose.
```

## Paso 4: Verificar que la API responde correctamente

Comprobamos si responde correctamente haciendo un GET:

![Listar topics](Captura%20Listar_Topics.png)

## Paso 5: Verificar en el navegador

Abrimos navegador y accedemos a [http://localhost:8080](http://localhost:8080)

![Navegadir topics](Captura%20Navegador_Topics.png)

---

## Resultado final

- La aplicación ha sido desplegada correctamente mediante Docker Compose.
- MongoDB persiste los datos en un volumen local (`mongo-volume`).
- Solo el frontend expone puertos al host (`localhost:8080`).
- La API y el frontend se comunican correctamente a través de la red interna.
- Los datos insertados desde la API se visualizan correctamente en el navegador.
