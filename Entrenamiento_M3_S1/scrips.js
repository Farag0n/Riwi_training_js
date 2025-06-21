// sistema_interactivo.js

let nombreUsuario = "";
let edadConvertida = -1;

// Bucle para pedir un nombre válido
while (true) {
  nombreUsuario = prompt("Por favor, ingresa tu nombre:");
  
  // Validamos que el nombre no esté vacío y no sea solo números
  if (nombreUsuario && isNaN(nombreUsuario.trim())) {
    break; // Salimos del bucle si el nombre es válido
  } else {
    alert("Error: El nombre no puede estar vacío ni ser un número.");
  }
}

// Bucle para pedir una edad válida
while (true) {
  let edadUsuario = prompt("Ingresa tu edad:");
  
  // Convertimos a número
  edadConvertida = parseInt(edadUsuario);

  // Verificamos que sea un número positivo
  if (!isNaN(edadConvertida) && edadConvertida >= 0) {
    break; // Salimos del bucle si la edad es válida
  } else {
    alert("Error: La edad debe ser un número válido y positivo.");
  }
}

// Condicionales con mensajes personalizados
if (edadConvertida < 18) {
  alert(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
} else {
  alert(`Hola ${nombreUsuario}, tienes ${edadConvertida} años. ¡Es un gran momento para explorar nuevas oportunidades en la programación como por ejemplo empezar a usar Linux!`);
}