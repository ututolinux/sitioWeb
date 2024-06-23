# Ututo Linux - Sitio Web

¡Bienvenido/a! Gracias por considerar contribuir a nuestro proyecto. Para mantener un historial de commits claro y consistente, utilizamos [Conventional Commits](https://www.conventionalcommits.org/) junto con [Husky](https://github.com/typicode/husky) para automatizar la validación de mensajes de commit. Aquí te explicamos cómo configurarlo y utilizarlo.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Configuración Inicial](#configuración-inicial)
- [Uso de Conventional Commits](#uso-de-conventional-commits)
- [Ejemplos de Mensajes de Commit](#ejemplos-de-mensajes-de-commit)
- [Contribuciones](#contribuciones)
- [Contacto](#contacto)

## Requisitos

Antes de empezar, asegurate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)

## Configuración Inicial

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/ututolinux/sitioWeb
   cd sitioWeb
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configura Husky:**

   Husky está preconfigurado en nuestro proyecto para validar los mensajes de commit. No necesitas hacer nada adicional para configurarlo. Al hacer un commit, Husky se va a encargar de verificar que tu mensaje siga el formato correcto.

## Uso de Conventional Commits

Los Conventional Commits son una convención para estructurar tus mensajes de commit. La estructura básica es:

```
tipo(scope opcional): descripción
```

Algunos ejemplos de tipos de commit son:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de errores
- `docs`: Cambios en la documentación
- `style`: Cambios de formato (no afectan el código)
- `refactor`: Refactorización del código (no añade funcionalidades ni corrige errores)
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplo:

```
feat(auth): añadir soporte para autenticación con Google
```

## Ejemplos de Mensajes de Commit

- `feat(ui): agregar componente de tarjeta`
- `fix(api): corregir error en endpoint de usuario`
- `docs: actualizar guía de contribución`
- `style: formatear código con Prettier`
- `refactor(core): optimizar lógica de validación`
- `test: agregar pruebas para el componente de botón`
- `chore(deps): actualizar dependencias`

## Contribuciones

Apreciamos cualquier tipo de contribución. Por favor, sigue estos pasos antes de enviar un pull request:

1. Crea una rama para tu contribución:

   ```bash
   git checkout -b mi-contribucion
   ```

2. Asegurate de que tus cambios cumplen con las convenciones de commits.
3. Enviá tu pull request con una descripción clara de los cambios.

## Contacto

Si tienes alguna pregunta, podés contactarnos en:
[Discord](https://discord.com/invite/ASEuyrfpFy)
[Twitter](https://twitter.com/UtutoLinux)

¡Gracias!
