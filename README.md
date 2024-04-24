# MCTEKK Frontend Development Challenge

Esta es la entrega para la prueba de desarrollo frontend para MCTEKK. El objetivo de esta prueba es evaluar tus habilidades en el desarrollo frontend.

- URL del proyecto en producción: [https://mctekk-frontend-dev.vercel.app/](https://mctekk-frontend-dev.vercel.app/)

## Descripción

El proyecto consiste en una aplicación web que permita el registro y login de usuarios, utilizando el sdk de Kanvas Core. Tambien hay una pagina `/dashboard` donde solo pueden acceder los usuarios logeados donde se muestra un mensaje de bienvenida, con algunos datos del usuario y un boton para cerrar sesión.

El proyecto tambien cuenta con tests unitarios sobre las funciones principales de la aplicación como el login, el registro y el logout.

## Tecnologías utilizadas

- TypeScript: Como lenguaje de programación que permite la tipificación de datos.
- React: Como librería de desarrollo de interfaces de usuario.
- Next.js: Como framework de React que facilita la creación de paginás renderizadas del lado del servidor, manejo de rutas, cookies, y server actions.
- Jest: Como librería de testing para realizar pruebas unitarias.
- Zod: Como librería de validación de datos.
- Kanvas Core: Como sdk para el manejo de la autenticación de usuarios.

## Instalación

### Requisitos

- Node.js v20.11.1 o superior
- npm v10.2.4 o superior

### Pasos

1. Clonar el repositorio

```bash
git clone https://github.com/Oniel1721/mctekk-frontend-dev.git
```

2. Instalar las dependencias

```bash
npm install
```

3. Crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables de entorno:

```env
KANVAS_API_KEY=YOUR_KANVAS_API_KEY
KANVAS_GRAPH_URL=YOUR_KANVAS_GRAPH_URL
```

4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

Esto solo es una descripción de la estructura de carpetas y archivos más importantes del proyecto.

```
mctekk-frontend-dev/
├── public/
├── src/
│   ├── actions/ // Server actions de la aplicación
│   ├── app/
│   │   ├── dashboard/  // Página de dashboard
│   │   ├── login/    // Página de login
│   │   ├── register/ // Página de registro
│   ├── components/ // Componentes de la aplicación
│   ├── utils // Funciones de utilidad
│   ├── lib // Acceso a librerias o recursos externos
│   ├── services // Servicios de la aplicación
│   ├── types // Tipos de datos
│   ├── pages // Páginas de la aplicación
│   ├── hooks // Hooks personalizados
│   ├── styles // Estilos globales
├── .env.local // Variables de entorno
├── jest.config.ts // Configuración de Jest
├── next.config.mjs // Configuración de Next.js
├── tsconfig.json // Configuración de TypeScript
├── tailwind.config.ts // Configuración de Tailwind CSS
├── package.json
└── README.md
```
