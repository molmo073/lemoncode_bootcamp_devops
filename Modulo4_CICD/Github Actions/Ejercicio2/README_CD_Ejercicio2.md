# Ejercicio 2 - CD con GitHub Actions

## Objetivo

Implementar un workflow de Entrega Continua (CD) para el proyecto `hangman-front`, que construya una imagen Docker y la publique en el registro de contenedores GitHub Container Registry (GHCR), de forma manual.

---

## Estructura del proyecto

El directorio del frontend se encuentra en:

```sh
Modulo4_CICD/Github Actions/.start-code/hangman-front/
```

El fichero del workflow se ha creado en la ruta estándar:

```sh
.github/workflows/cd-frontend_ej2.yaml
```

---

## Descripción del workflow CD

El workflow se denomina `CD Frontend` y contiene un único job:

* `build-and-push`: construye la imagen Docker y la sube al GHCR.

Se ejecuta únicamente **de forma manual**, a través de la pestaña *Actions* del repositorio.

Para ello, el bloque de activación es:

```yaml
on:
  workflow_dispatch:
```

---

## Detalle de pasos del job

Los pasos que ejecuta el job `build-and-push` son:

1. **Checkout del repositorio:** clona el código fuente.
2. **Login en GHCR:** se autentica usando `${{ github.actor }}` y `${{ secrets.GITHUB_TOKEN }}`.
3. **Build de imagen Docker:** construye una imagen con el Dockerfile ubicado en `hangman-front`.
4. **Push de imagen a GHCR:** publica la imagen con tag `latest`.

La imagen se etiqueta como:

```
ghcr.io/<usuario>/hangman-frontend:latest
```

---

## Evidencia de ejecución correcta

A continuación se muestra la ejecución satisfactoria del workflow `cd-frontend_ej2.yaml` en GitHub Actions:

![Ejecución exitosa del workflow](docs/img/cd-frontend-success.png)

---

## Acceso a la imagen publicada

La imagen generada está disponible en:

🔗 https://github.com/molmo073/lemoncode_bootcamp_devops/packages

Desde donde se puede descargar o usar en despliegues posteriores.
