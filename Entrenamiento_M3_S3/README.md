# Gestión de API con JSON Server y Fetch API

Este proyecto forma parte del entrenamiento **Módulo 3 - Semana 3** y tiene como objetivo practicar la interacción con servidores simulados y el consumo de APIs mediante operaciones CRUD utilizando JavaScript.

## 🚀 Descripción

El archivo `gestion_api.js` contiene un conjunto de ejemplos prácticos que permiten:

- Configurar un servidor local usando **JSON Server**.
- Realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) utilizando **Fetch API**.
- Validar los datos antes de enviarlos al servidor.
- Manejar errores de forma adecuada para mejorar la robustez y confiabilidad del código.

---

## 🛠 Tecnologías utilizadas

- **Node.js**
- **JSON Server**
- **JavaScript (Fetch API)**
- **Visual Studio Code** o cualquier editor de texto.

---

## 📋 Requisitos previos

1. Tener instalado **Node.js** y **JSON Server**:
   ```bash
   npm install -g json-server
Crear un archivo llamado db.json con los datos que se desean gestionar.

Iniciar el servidor local con el siguiente comando:

bash
Copy
Edit
json-server --watch db.json

## 📌 Operaciones Implementadas
GET: Obtiene todos los datos almacenados en el servidor y los muestra en la consola.

POST: Agrega un nuevo recurso al servidor. Antes de enviarlo, valida que los datos sean correctos y estén completos.

PUT: Actualiza completamente un recurso existente, reemplazando su contenido. Se validan los datos antes de enviarlos.

PATCH (opcional): Realiza una actualización parcial de un recurso específico.

DELETE: Elimina un recurso del servidor basándose en su ID.

## ⚠️ Validaciones y Manejo de Errores
Antes de cada operación POST o PUT, se verifica que los datos requeridos estén completos y que los valores sean válidos (por ejemplo, que la edad sea un número).

Se implementa el manejo de errores en todas las operaciones utilizando .catch(), lo que permite capturar cualquier fallo en las solicitudes sin que el programa se detenga abruptamente.

Los mensajes de error o éxito se muestran claramente en la consola para facilitar la depuración.

## 📂 Instrucciones de Ejecución
Asegúrate de tener el servidor corriendo en una ventana de la terminal:

bash
Copy
Edit
json-server --watch db.json
En una segunda ventana de la terminal, ejecuta el archivo gestion_api.js con Node.js:

bash
Copy
Edit
node gestion_api.js
Observa los resultados directamente en la consola:

Visualización de los datos obtenidos (GET).

Confirmación de creación de nuevos registros (POST).

Confirmación de actualización total o parcial (PUT/PATCH).

Confirmación de eliminación de registros (DELETE).

