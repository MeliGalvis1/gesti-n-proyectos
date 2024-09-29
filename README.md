# gesti-n-proyectos
GESTIÓN DE PROYECTOS

PROYECTO DE EJEMPLO
modelo cliente/servidor

RESUMEN
Esta es una aplicación web para gestionar proyectos, miembros y tareas. La aplicación permite a los usuarios crear nuevos proyectos, agregar miembros a proyectos y asignar tareas a proyectos.

CARACTERÍSTICAS
Crear nuevos proyectos con nombre, descripción, fecha de inicio y fecha de fin
Agregar nuevos miembros a proyectos con nombre, apellido, correo electrónico y ID de proyecto
Crear nuevas tareas con nombre, descripción, fecha de inicio, fecha de fin y ID de proyecto
Mostrar todos los proyectos, miembros y tareas en tablas
Utilizar AJAX para enviar solicitudes al servidor y actualizar las tablas dinámicamente

DETALLES TÉCNICOS
Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap
Backend: Node.js con framework Express.js
Base de datos: MongoDB
Estructura del Código
app.js: El archivo principal del servidor, que configura la conexión a la base de datos y define las rutas para los proyectos, miembros y tareas.
routes/: La carpeta que contiene las rutas para los proyectos, miembros y tareas.
models/: La carpeta que contiene los modelos de datos para los proyectos, miembros y tareas.
index.html: El archivo HTML principal de la aplicación.
index.js: El archivo JavaScript de la aplicación, que contiene las solicitudes AJAX y los listeners de eventos.

RUTAS
/proyectos: La ruta para los proyectos, que permite crear nuevos proyectos y mostrar todos los proyectos existentes.
/miembros: La ruta para los miembros, que permite crear nuevos miembros y mostrar todos los miembros existentes.
/tareas: La ruta para las tareas, que permite crear nuevas tareas y mostrar todas las tareas existentes.
Modelos de Datos
Miembro.js: El modelo de datos para los miembros, que define las propiedades de un miembro (nombre, apellido, correo electrónico y ID de proyecto).
Proyecto.js: El modelo de datos para los proyectos, que define las propiedades de un proyecto (nombre, descripción, fecha de inicio, fecha de fin, tareas y miembros).
Tarea.js: El modelo de datos para las tareas, que define las propiedades de una tarea (nombre, descripción, fecha de inicio, fecha de fin y ID de proyecto).

CÓMO USAR
Abre el archivo index.html en un navegador web.
Llena los formularios para crear nuevos proyectos, miembros y tareas.
Haz clic en los botones de envío para enviar las solicitudes al servidor.
Las tablas se actualizarán dinámicamente con los nuevos datos.
Conexión a la Base de Datos
La aplicación se conecta a una base de datos MongoDB local utilizando el framework Mongoose. La conexión se establece en el archivo app.js.

Seguridad
La aplicación utiliza el middleware cors para permitir solicitudes de origen cruzado (CORS). Esto permite que la aplicación se comunique con el servidor desde cualquier origen.
