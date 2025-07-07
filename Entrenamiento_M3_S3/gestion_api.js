// ----------------------
// GET - Leer Datos
// ----------------------

fetch('http://localhost:3000/books', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('GET Success:', data);
})
.catch(error => {
  console.error('GET Error:', error);
});

// ----------------------
// POST - Crear Nuevo Dato (con validación)
// ----------------------
const newData = {
  "id": 37604,
  "name": "El Hobbit",
  "author": "J.K.Tolkkien",
  "year": "1937"

};

// Validación de datos antes de enviar
if (!newData.name || !newData.email || isNaN(newData.age)) {
  console.error('POST Error: Invalid data');
} else {
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('POST Success:', data);
  })
  .catch(error => {
    console.error('POST Error:', error);
  });
}

// ----------------------
// PUT - Actualizar (Reemplazar) un Recurso Completo (con validación)
// ----------------------
const updatedData = {
  name: "Alice Updated",
  email: "alice.updated@example.com",
  age: 31
};

// Validación de datos antes de enviar
if (!updatedData.name || !updatedData.email || isNaN(updatedData.age)) {
  console.error('PUT Error: Invalid data');
} else {
  fetch('http://localhost:3000/books/1e54', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('PUT Success:', data);
  })
  .catch(error => {
    console.error('PUT Error:', error);
  });
}

// ----------------------
// PATCH - Actualizar Parcialmente un Recurso (Opcional)
// ----------------------
const partialUpdate = {
  author: "Nuevo Autor"
};

fetch('http://localhost:3000/books/67015', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(partialUpdate)
})
.then(response => response.json())
.then(data => {
  console.log('PATCH Success:', data);
})
.catch(error => {
  console.error('PATCH Error:', error);
});

// ----------------------
// DELETE - Eliminar un Recurso
// ----------------------
const idToDelete = '67015';

fetch(`http://localhost:3000/books/${idToDelete}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(() => {
  console.log(`DELETE Success: Book with ID ${idToDelete} has been deleted.`);
})
.catch(error => {
  console.error('DELETE Error:', error);
});