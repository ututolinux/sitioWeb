# <img src="./public/logo.png" style="height: 40px;"/> UTUTO

[![Vercel](https://vercelbadge.vercel.app/api/emirchus/ututo-web)](https://vercel.com/emirchus/ututo-web)

Bienvenido al repositorio del sitio web (no oficial) de UTUTO, la distribución GNU/Linux completamente libre. Este proyecto está desarrollado utilizando NextJS y ReactJS.
![web preview](public/web-preview.png)

## Acerca de UTUTO

UTUTO es una distribución del sistema operativo GNU que utiliza su propio núcleo Linux Libre. El nombre hace referencia a una especie de lagartija (Homonota borelli) del norte de Argentina. UTUTO fue la primera distribución reconocida como **totalmente libre** por el Proyecto GNU, y es conocida por su capacidad de optimización y rendimiento.

### Historia

- **2000**: Primera versión grabada por Diego Saravia de la Universidad Nacional de Salta.
- **2002**: Creación de UTUTO-R por Marcos Zapata, utilizada en escuelas públicas de Buenos Aires.
- **2004**: Nacimiento de UTUTO-e y su evolución a UTUTO XS.
- **2006**: Declaración de Interés Nacional por la Cámara de Diputados de la Nación Argentina.
- **2017**: Última versión antes de la pausa en el desarrollo.
- **2024**: Resurgimiento del proyecto con la versión UTUTO 11.

### Características

- **Completamente Libre**: No contiene software propietario.
- **Basado en Gentoo**: Utiliza ebuilds y el software emerge para la compilación.
- **Optimización**: Compilación de software desde el código fuente para optimizar el rendimiento según el procesador.
- **Diversidad de Entornos de Escritorio**: Incluye GNOME, KDE 4.1, KDE 3.5, e Icewm.
- **Gestor de Paquetes**: Utiliza UTUTO-Get desde la versión XS 2007.

## Instalación y Configuración del Proyecto

### Prerrequisitos

Asegurate de contar con [Node.js](https://nodejs.org/) y [PNPM](https://pnpm.io/es) instalado.

### Instalación

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/emirchus/ututo-web.git
   cd ututo-web
   ```

2. Instalá las dependencias:
   ```bash
   pnpm install
   ```

### Comandos disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Compila el proyecto para producción.
- `pnpm lint`: Ejecuta linters para verificar la calidad del código.
- `pnpm format`: Formatea el código según las reglas establecidas.

### Depuración

Para debugear el proyecto, utilizá el siguiente comando:

```bash
pnpm dev
```

Ésto iniciará el servidor de desarrollo, y te permitirá depurar el código en tiempo real utilizando las herramientas de desarrollo de tu navegador.

### Despliegue

Para desplegar el proyecto, seguí estos pasos:

1. Compilá el proyecto:

   ```bash
   pnpm build
   ```

2. Serví los archivos compilados:
   ```bash
   pnpm start
   ```

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abrí un issue, o enviá un pull request con tus mejoras y sugerencias.

## Licencia

Este proyecto está licenciado bajo la [Licencia GPL v3](LICENSE).

---

Esperamos que disfrutes utilizando UTUTO. Para más información, visitá nuestro [sitio web oficial](https://ututo.org).
