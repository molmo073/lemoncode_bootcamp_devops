# Manual de GitHub para Principiantes

## ¿Qué es GitHub y para qué sirve?

**GitHub** es una plataforma en la nube para alojar proyectos que utilizan **Git**, un sistema de control de versiones. Permite trabajar de forma colaborativa en proyectos de software, hacer seguimiento de los cambios en el código, revisar versiones anteriores, proponer mejoras y colaborar mediante ramas y pull requests.

### Principales funcionalidades de GitHub

* Alojamiento de repositorios de código.
* Control de versiones.
* Colaboración en equipo mediante ramas.
* Revisión de cambios (pull requests).
* Automatización mediante GitHub Actions.
* Wiki y documentación integrada.

---

## Flujo básico de trabajo con Git y GitHub

1. Clonar un repositorio (o inicializar uno nuevo).
2. Crear una rama de trabajo.
3. Realizar cambios y confirmarlos (commit).
4. Sincronizar con el repositorio remoto (push/pull).
5. Crear pull requests para revisar y fusionar cambios.

---

## Comandos principales de Git (ordenados por uso)

### 1. Configuración inicial (una sola vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"
```

### 2. Clonar un repositorio existente

```bash
git clone https://github.com/usuario/repositorio.git
```

### 3. Crear una nueva rama de trabajo

```bash
git checkout -b nombre-rama
```

### 4. Ver estado de los archivos

```bash
git status
```

### 5. Añadir archivos al staging (preparar para commit)

```bash
git add archivo.txt        # Un archivo específico
git add .                  # Todos los cambios
```

### 6. Hacer commit (confirmar los cambios)

```bash
git commit -m "Mensaje descriptivo del cambio"
```

### 7. Ver historial de commits

```bash
git log
```

### 8. Eliminar ramas remotas obsoletas

```bash
git remote prune origin
```

Este comando elimina referencias locales a ramas remotas que ya no existen en el servidor. Es útil para mantener el entorno limpio si se han eliminado ramas desde GitHub.

```bash
git log
```

### 9. Enviar cambios al repositorio remoto

```bash
git push origin nombre-rama
```

**Nota:** Si ya has hecho `git push` anteriormente para esta rama, puedes usar simplemente:

```bash
git push
```

Esto funciona porque Git recuerda la rama remota asociada mediante una referencia de seguimiento (tracking branch).

### 10. Verificar o cambiar la rama remota de seguimiento

#### Verificar la rama remota de seguimiento

```bash
git branch -vv
```

Esto mostrará la rama actual y a qué rama remota está vinculada.

#### Establecer o cambiar la rama remota de seguimiento

```bash
git push --set-upstream origin nombre-rama
```

Esto asocia la rama local `nombre-rama` con la remota `origin/nombre-rama`. A partir de ahí, podrás usar simplemente `git push` y `git pull` sin especificar rama.

---

### 11. Actualizar tu copia local con los cambios remotos

```bash
git pull origin main
```

### 12. Cambiar de rama

```bash
git checkout nombre-rama
```

### 13. Fusionar ramas (una vez revisados los cambios)

```bash
git merge nombre-rama
```

### 14. Eliminar una rama local de forma forzada

```bash
git branch -D nombre-rama
```

Este comando elimina una rama local incluso si no ha sido fusionada. Úsalo con precaución, ya que podrías perder cambios que no están en ninguna otra rama.

```bash
git merge nombre-rama
```

---

## Ejemplo práctico paso a paso

### 1. Clonar un repositorio

```bash
git clone https://github.com/ejemplo/proyecto.git
cd proyecto
```

### 2. Crear una rama para hacer cambios

```bash
git checkout -b nueva-funcionalidad
```

### 3. Realizar cambios en el proyecto

Editas archivos con tu editor favorito...

### 4. Añadir y confirmar los cambios

```bash
git add .
git commit -m "Agregada nueva funcionalidad X"
```

### 5. Subir la rama al repositorio remoto

```bash
git push origin nueva-funcionalidad
```

**O simplemente:**

```bash
git push
```

(si ya has empujado esta rama antes y tiene una rama remota asociada)

### 6. Ir a GitHub y abrir un Pull Request

Desde la interfaz web, comparar ramas y abrir un Pull Request para revisión.

---

## Buenas prácticas

* Usa nombres de ramas descriptivos.
* Haz commits pequeños y frecuentes.
* Siempre escribe mensajes de commit claros.
* Antes de hacer `push`, asegúrate de haber hecho `pull` para evitar conflictos.
* Usa Pull Requests para revisar código en equipo.

---

## Recursos adicionales

* [Documentación oficial de GitHub](https://docs.github.com/)
* [Pro Git Book (gratuito)](https://git-scm.com/book/es/v2)
