# API REST - Tienda de Artículos Deportivos

## Descripción
API REST desarrollada para administrar productos, categorías y usuarios de una tienda de artículos deportivos.

## Tecnologías
- Node.js
- Express
- MongoDB y Mongoose
- bcrypt
- dotenv
- CORS

## Instalación y ejecución

1. Ejecutar `npm install`.
2. Configurar el archivo `.env` tomando como referencia `.env.example`.
3. Iniciar el servidor con `npm run dev`.

La API funciona en `http://localhost:3000`.

## Endpoints

- **Productos:** GET, POST, PUT y DELETE.
- **Categorías:** GET, POST y DELETE.
- **Usuarios:** GET, POST y DELETE.

## Funcionalidades
- Administración de productos, categorías y usuarios.
- Relación entre productos y categorías mediante MongoDB.
- Uso de `populate()` para consultar las categorías.
- Encriptación de contraseñas con bcrypt.
- Organización del proyecto en modelos, servicios, controladores y rutas.

## Base de datos
Nombre: `tienda_deportiva`. 