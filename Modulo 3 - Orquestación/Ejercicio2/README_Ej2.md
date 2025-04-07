# Documentación del proceso despliegue BBDD PostgreSQL en Kubernetes con almacenamiento persistente

## 1. Construir la imagen de la app

Accediendo al directorio todo-app para construir la imagen a partir del Dockerfile dado.

```bash
docker build -t todo-app:v1 .
```

Carga de la imagen en minikube ya que el pod del deployment de todo-app quedaba en estado ErrImagePull

```sh
minikube image load todo-app:v1
```

## 2. Desplegar los recursos de PostgreSQL con capa de persistencia

```sh
kubectl apply -f postgres-config.yaml
kubectl apply -f postgres-pvc.yaml
kubectl apply -f postgres-service.yaml
kubectl apply -f postgres-statefulset.yaml
```

## 3. Desplegar los recursos para todo-app

```sh
kubectl apply -f todo-app-configmap.yaml
kubectl apply -f todo-app-deployment.yaml
kubectl apply -f todo-app-service.yaml
```

```sh
kubectl get pods
```

## 4. Aplicación en el navegador usando Minikube

```sh
minikube service todo-app-service
```

![minikube](./capturas/todo-app.png)

![Frontend](./capturas/navegador1.png)

Inserto registro.

![Frontend](./capturas/navegador2.png)

Verificación desde el pod de postgres

![postgres](./capturas/postgres.png)

## 5. **Conclusión**

Este procedimiento permite desplegar una base de datos PostgreSQL en Kubernetes con almacenamiento persistente y correcto manejo de variables de entorno a través de `ConfigMap`.
