// Seleccionar elementos del DOM
const loginForm = document.getElementById('loginForm');           // Formulario de login
const usernameInput = document.getElementById('username');        // Campo de usuario
const passwordInput = document.getElementById('password');        // Campo de contraseña
const message = document.getElementById('message');               // Elemento para mostrar mensajes
const welcomeMessage = document.getElementById('welcomeMessage'); // Encabezado que muestra el mensaje de bienvenida
const logoutBtn = document.getElementById('logoutBtn');           // Botón para cerrar sesión

// Función para mostrar mensajes en el DOM y en consola
function showMessage(text, className) {
  message.textContent = text;       // Cambia el contenido del elemento <p> de mensaje
  message.className = className;    // Aplica la clase CSS para estilos (por ejemplo, success o error)
  console.log(`Mensaje: ${text}`);  // También lo imprime en consola
}

// Función para actualizar la interfaz (DOM) según el estado de login
function updateUI() {
  const storedUser = localStorage.getItem('username');       // Verifica si hay un nombre de usuario guardado
  const sessionActive = sessionStorage.getItem('loggedIn');  // Verifica si la sesión está activa

  if (storedUser && sessionActive) {
    // Si hay un usuario guardado y sesión activa, mostramos la bienvenida
    welcomeMessage.textContent = `Bienvenido, ${storedUser}`;
    loginForm.style.display = 'none';      // Ocultamos el formulario de login
    logoutBtn.style.display = 'block';     // Mostramos el botón de cerrar sesión
  } else {
    // Si no hay sesión activa, mostramos el formulario de login
    welcomeMessage.textContent = 'Iniciar Sesión';
    loginForm.style.display = 'block';     // Mostramos el formulario
    logoutBtn.style.display = 'none';      // Ocultamos el botón de cerrar sesión
  }
}

// Evento de login 
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Previene que el formulario recargue la página

  const username = usernameInput.value.trim();     // Obtiene y limpia el nombre de usuario
  const password = passwordInput.value.trim();     // Obtiene y limpia la contraseña

  console.log(`Usuario ingresado: ${username}`);
  console.log(`Contraseña ingresada: ${password}`);

  // Llamada al servidor para verificar credenciales usando JSON Server
  fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
    .then(response => response.json())     // Convertimos la respuesta en JSON
    .then(data => {
      console.log('Respuesta de JSON Server:', data);

      if (data.length > 0) {
        // Si encontramos usuario, guardamos los datos en los almacenamientos
        localStorage.setItem('username', username);             // Persistente
        sessionStorage.setItem('loggedIn', 'true');             // Solo durante la sesión

        showMessage('Login exitoso.', 'success'); // Mostramos mensaje de éxito
        updateUI();                               // Actualizamos la interfaz
      } else {
        showMessage('Usuario o contraseña incorrectos.', 'error'); // Si no se encontró el usuario
      }
    })
    .catch(error => {
      console.error('Error de conexión:', error);  // En caso de error de red o fetch
      showMessage('Error al conectar con el servidor.', 'error');
    });

  loginForm.reset(); // Limpia los campos del formulario después de enviar
});

// Evento para cerrar sesión (logout)
logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('username');           // Borra el usuario almacenado
  sessionStorage.removeItem('loggedIn');         // Borra la sesión activa
  showMessage('Has cerrado sesión.', 'error');   // Muestra mensaje de logout
  updateUI();                                    // Actualiza la interfaz a estado "desconectado"
});

// Al cargar la página mostramos datos almacenados (útil para debugging)
console.log('Local Storage:', localStorage.getItem('username'));
console.log('Session Storage:', sessionStorage.getItem('loggedIn'));
updateUI(); // Ejecuta actualización inicial de la interfaz
