
const products = {
    productInfo1: {
        id: 174320,                  
        name: "Keyboard 65%",        
        price: 100.000               
    },
    productInfo2: {
        id: 590231,
        name: "Keyboard 65%",       
        price: 80.000
    },
    productInfo3: {
        id: 843920,
        name: "mouse",
        price: 120.100
    },
    productInfo4: {
        id: 712658,
        name: "monitor",
        price: 978.000
    },
    productInfo5: {
        id: 390416,
        name: "headphones",
        price: 245.000
    },
    productInfo6: {
        id: 652107,
        name: "hard drive",
        price: 366.700
    },
    productInfo7: {
        id: 948503,
        name: "usb",
        price: 10.000
    }
};

// Convertir a un Set para eliminar nombres duplicados
const setProductos = new Set(
  Object.values(products).map(producto => product.name.toLowerCase())
);

console.log("Set de nombres de productos únicos:");
console.log(setProducts);

// Asociar categorías a los productos
const mapProductos = new Map([
  ["Periféricos", ["Keyboard 65%", "keyboard 65%", "mouse"]],
  ["Pantallas", ["monitor"]],
  ["Audio", ["headphones"]],
  ["Almacenamiento", ["hard drive", "usb"]]
]);

// Mostrar el Map con las categorías y sus productos asociados
console.log("Map de categorías y productos:");
console.log(mapProducts);

// Recorremos todas las claves del objeto 'products'
console.log("Recorrido del objeto 'products' con for...in:");
for (const key in products) {
  const producto = products[key]; 
  console.log(`${key} ID: ${producto.id}, Nombre: ${producto.name}, Precio: ${producto.price}`);
}

// Recorremos el conjunto de nombres únicos de productos
console.log("Recorrido del Set con for...of (nombres únicos):");
for (const nombre of setProductos) {
  console.log(nombre);
}


// Recorremos el Map 
console.log("Recorrido del Map con forEach:");
mapProductos.forEach((productos, categoria) => {
  console.log(`Categoría: ${categoria}`); 
  productos.forEach(nombre => {
    console.log(`   - ${nombre}`); 
  });
});


console.log("Validaciones finales:");

//Mostrar todos los productos extraídos del objeto
console.log("Todos los productos (Object.values):");
console.log(Object.values(products));

//Mostrar los nombres únicos del Set como un array
console.log("Productos únicos (nombres):");
console.log([...setProductos]);

//Mostrar todo el contenido del Map
console.log("Map de categorías y productos:");
console.log(mapProductos);
