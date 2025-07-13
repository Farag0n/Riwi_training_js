// Seleccionar elementos del DOM
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const welcomeMessage = document.getElementById('welcomeMessage');
const logoutBtn = document.getElementById('logoutBtn');

// Función para mostrar mensajes en el DOM y en consola
function showMessage(text, className) {
  message.textContent = text;
  message.className = className;
  console.log(`Mensaje: ${text}`);
}

// Función para actualizar la interfaz (DOM) según el estado de login
function updateUI() {
  const storedUser = localStorage.getItem('username');
  const sessionActive = sessionStorage.getItem('loggedIn');

  if (storedUser && sessionActive) {
    welcomeMessage.textContent = `Bienvenido, ${storedUser}`;
    loginForm.style.display = 'none';
    logoutBtn.style.display = 'block';
  } else {
    welcomeMessage.textContent = 'Iniciar Sesión';
    loginForm.style.display = 'block';
    logoutBtn.style.display = 'none';
  }
}

// Evento de login 
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  console.log(`Usuario ingresado: ${username}`);
  console.log(`Contraseña ingresada: ${password}`);

  // Llamada al servidor para verificar credenciales
  fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta de JSON Server:', data);

      if (data.length > 0) {
        // Guardamos datos en Local Storage y Session Storage
        localStorage.setItem('username', username);
        sessionStorage.setItem('loggedIn', 'true');

        showMessage('Login exitoso.', 'success');
        updateUI();
      } else {
        showMessage('Usuario o contraseña incorrectos.', 'error');
      }
    })
    .catch(error => {
      console.error('Error de conexión:', error);
      showMessage('Error al conectar con el servidor.', 'error');
    });

  loginForm.reset();
});

// Evento para cerrar sesión (logout)
logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('username');
  sessionStorage.removeItem('loggedIn');
  showMessage('Has cerrado sesión.', 'error');
  updateUI();
});

// Al cargar la página mostramos datos almacenados
console.log('Local Storage:', localStorage.getItem('username'));
console.log('Session Storage:', sessionStorage.getItem('loggedIn'));
updateUI();