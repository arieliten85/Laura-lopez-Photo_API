# API Estudio Fotográfico - Laura López

Esta API proporciona una solución para la gestión de imágenes y categorías en un estudio fotográfico. Permite pre-cargar una serie de imágenes con sus respectivas categorías, que luego se utilizan en el frontend del cliente. La API también incluye endpoints para crear, buscar, actualizar y eliminar imágenes.

## Funcionalidades

- **Carga Inicial de Imágenes:** Permite la carga de un conjunto de imágenes con sus categorías correspondientes.
- **Gestión de Imágenes:** Endpoints para crear, buscar, actualizar y eliminar imágenes.
- **Gestión de Categorías:** Implementación de un CRUD para categorías.

## Instalación

1. **Instala las dependencias:**

   npm install

2. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y añade las variables necesarias. Puedes basarte en el archivo `.env.example` si está disponible.

3. **Levanta el servidor:**

   npm run dev

## Uso

Una vez que el servidor esté en funcionamiento, puedes utilizar los siguientes endpoints para interactuar con la API:

- **POST /api/images** - Crea una nueva imagen.
- **GET /api/images** - Obtiene una lista de imágenes.
- **GET /api/images/:id** - Obtiene una imagen específica por ID.
- **PUT /api/images/:id** - Actualiza una imagen existente.
- **DELETE /api/images/:id** - Elimina una imagen.
