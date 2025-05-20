# Laboratorio Contenedores Docker

## Ejercicio 1

### Creamos la red

``` bash
docker network create lemoncode-challenge
```

### Crear y ejecutar el contenedor MongoDB, exponiendo el puerto 27017 al host

``` bash
docker run -d --name some-mongo --network lemoncode-challenge -p 27017:27017 -v mongo-data:/data/db mongo
```

### Desde la carpeta backend donde hemos creado el Dockerfile realizamos el build del backend

``` bash
docker build -t backend-lemoncode:22.14 .
```

### Arrancamos contenedor basado en la imagen backend-lemoncod:22.14 conectandolo a la red lemoncode-challege y exponiendo el puerto 5000

``` bash
docker run -d --name backend-api --network lemoncode-challenge -p 5000:5000 backend-lemoncode:22.14
```

### Prueba de conexión de backend con mongodb a través de la URL mongodb://some-mongo:27017 a través de la aplicación mongosh instalada previamente en contenedor backend

```bash
docker exec -it backend-api mongosh "mongodb://some-mongo:27017"
```

En la terminal de `mongosh`, ejecutamos:

```bash
show dbs
use TopicstoreDb
show collections
db.Topics.find().pretty()
```

Esto devuelve los registros como:

```json
  { _id: ObjectId("67b4ce5f977dbcde0eb2c323"), Name: 'Contenedores' },
  { _id: ObjectId("67b4ce5f977dbcde0eb2c324"), Name: 'Docker' },
  { _id: ObjectId("67b4ce5f977dbcde0eb2c325"), Name: 'Kubernetes' },
  { _id: ObjectId("67b4ce5f977dbcde0eb2c326"), Name: 'DevOps' },
  { _id: ObjectId("67b4ce5f977dbcde0eb2c327"), Name: 'Cloud' }
```

### Desde la carpeta frondend donde hemos creado el Dockerfile realizamos el build del frondend

```bash
docker build -t frontend-lemoncode:22.14 .
```

### Arrancamos contenedor del frontend asegurando que se conecta a la red lemoncode-challege se exponga el puerto del 8080 para acceder desde el navegador y se defina la URL de la API

```bash
docker run -d --name frontend-app --network lemoncode-challenge -p 8080:3000 -e API_URI=http://backend-api:5000/api/topics frontend-lemoncode:22.14
```

### Pruebas realizadas

Abrimos un navegador y accedemos a:

<http://localhost:8080>

Vemos el frontend funcionando y mostrando los datos de la API. Añadimos registros en la base de datos y refrescamos el navegador mostrando los nuevos registros
