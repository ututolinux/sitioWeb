# Sitio Web Ututo - Docker Setup

Este es el sitio web oficial de Ututo Linux, containerizado con Docker para facilitar el despliegue y desarrollo.

## Requisitos

- Docker
- Docker Compose

## Instalación y Uso

### Opción 1: Usando Docker Compose (Recomendado)

```bash
# Construir y ejecutar el contenedor
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build
```

El sitio web estará disponible en: http://localhost:8080

### Opción 2: Usando Docker directamente

```bash
# Construir la imagen
docker build -t ututo-website .

# Ejecutar el contenedor
docker run -p 8080:80 ututo-website
```

## Características

- **PHP 8.2** con Apache
- **Contador de descargas** persistente
- **Puerto 8080** para evitar conflictos
- **Reinicio automático** del contenedor
- **Volumen persistente** para el contador de descargas

## Comandos Útiles

```bash
# Ver logs del contenedor
docker-compose logs -f

# Detener el contenedor
docker-compose down

# Reconstruir la imagen
docker-compose up --build

# Acceder al contenedor
docker-compose exec ututo-website bash
```

## Estructura del Proyecto

```
sitioWeb/
├── index.php              # Página principal
├── styles.css             # Estilos CSS
├── scripts.js             # JavaScript
├── logo.png               # Logo de Ututo
├── downloads_counter.txt  # Contador de descargas
├── Dockerfile             # Configuración de Docker
├── docker-compose.yml     # Configuración de Docker Compose
└── .dockerignore          # Archivos a ignorar en Docker
```

## Desarrollo

Para desarrollo local, puedes montar el directorio actual como volumen:

```bash
docker run -p 8080:80 -v $(pwd):/var/www/html ututo-website
```

Esto permitirá que los cambios en los archivos se reflejen inmediatamente sin reconstruir la imagen.