# Login con manipulacion del DOM

## Recursos
Este proyecto consiste en un login funcional desarrollado con:

HTML para la estructura.

CSS básico para el estilo.

JavaScript para la manipulación del DOM, Local Storage, Session Storage y la consulta a una base de datos simulada con JSON Server.


## ⚙️ Requisitos Previos
Tener instalado Node.js y npm en el sistema.

Tener instalado JSON Server globalmente:

bash
Copy
Edit
npm install -g json-server
🏗️ Estructura de Archivos
pgsql
Copy
Edit
Entrenamiento_M3_S4/
├── index.html
├── style.css
├── script.js
└── db.json

## 🚀 Cómo levantar JSON Server
Abre una terminal o consola en la carpeta del proyecto.

Ejecuta el siguiente comando para iniciar el servidor en el puerto 3000:


json-server --watch db.json --port 3000

La url de la base datos estará disponible en:

http://localhost:3000/users
✅ Este servidor simula una API  que se consulta desde el JavaScript.

## 👥 Credenciales de los Usuarios
En el archivo db.json se encuentran los usuarios registrados:

```
 {
  "users": [
    { "id": 1, "username": "admin", "password": "1234" },
    { "id": 2, "username": "usuario", "password": "abcd" }
  ]
}
```
| Rol               | Usuario  | Contraseña |
|-------------------|----------|------------|
| Administrador     | admin    | 1234       |
| Usuario Estándar  | usuario  | abcd       |
---

## 💾 Almacenamiento en el Navegador
El nombre de usuario se guarda en Local Storage (username).

El estado de login activo se guarda en Session Storage (loggedIn).

✅ El usuario se mantiene logueado mientras no cierre la pestaña o cierre sesión.