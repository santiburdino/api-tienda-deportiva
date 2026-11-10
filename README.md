API REST - Tienda de Artículos Deportivos

Descripción

Este proyecto consiste en una API REST para una tienda de artículos deportivos. La idea es poder administrar los productos, las categorías y los usuarios de la tienda, utilizando Node.js, Express y MongoDB.

Tecnologías utilizadas

Node.js

Express

MongoDB

Mongoose

bcrypt

dotenv

CORS

Estructura de la base de datos

La base de datos se llama tienda_deportiva y está formada por tres colecciones:

Usuarios: contiene el nombre, email y contraseña de cada usuario.

Categorías: contiene el nombre y la descripción de cada categoría.

Productos: contiene el nombre, descripción, precio, stock y una referencia a la categoría correspondiente.

La relación entre productos y categorías permite organizar los artículos según el tipo de deporte o producto al que pertenecen.

Instalación y ejecución

Descargar o clonar el repositorio.

Ejecutar npm install para instalar las dependencias.

Crear el archivo .env tomando como referencia .env.example.

Configurar la conexión a MongoDB.

Ejecutar npm run dev para iniciar el servidor.

La API funciona en http://localhost:3000.

Endpoints disponibles

Productos

GET /api/productos: obtener todos los productos.

GET /api/productos/:id: buscar un producto por ID.

POST /api/productos: crear un producto.

PUT /api/productos/:id: modificar un producto.

DELETE /api/productos/:id: eliminar un producto.

Categorías

GET /api/categorias: obtener todas las categorías.

GET /api/categorias/:id: buscar una categoría por ID.

POST /api/categorias: crear una categoría.

DELETE /api/categorias/:id: eliminar una categoría.

Usuarios

GET /api/usuarios: obtener todos los usuarios.

GET /api/usuarios/:id: buscar un usuario por ID.

POST /api/usuarios: registrar un usuario.

DELETE /api/usuarios/:id: eliminar un usuario.

Ejemplos de datos JSON

Crear una categoría:

{
  "nombre": "Futbol",
  "descripcion": "Articulos y accesorios para la practica del futbol"
}

Crear un producto:

{
  "nombre": "Pelota de futbol",
  "descripcion": "Pelota profesional para partidos de futbol",
  "precio": 45000,
  "stock": 20,
  "categoria": "ID_DE_LA_CATEGORIA"
}

Registrar un usuario:

{
  "nombre": "Usuario Prueba",
  "email": "usuario.prueba@gmail.com",
  "contrasena": "Deporte123"
}

Funcionalidades implementadas

Crear, consultar, modificar y eliminar productos.

Crear, consultar y eliminar categorías.

Registrar, consultar y eliminar usuarios.

Relacionar productos con sus categorías.

Mostrar los datos de las categorías utilizando populate().

Guardar las contraseñas encriptadas con bcrypt.

Separar el proyecto en modelos, servicios, controladores y rutas.

Posibles mejoras a futuro

Más adelante se podría agregar un sistema de inicio de sesión con JWT y la administración de pedidos y carritos de compra.