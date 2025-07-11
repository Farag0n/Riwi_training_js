// Evento para guardar datos en el local Storage
document.getElementById("saveButton").addEventListener("click", ()=> {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    if (!nameInput || !ageInput) {
        console.error("los elementos del formulario no existen")
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        localStorage.setItem("userName", name)
        localStorage.setItem("userAge", age);
        displayData();
    }
    else{
        alert("Por favor ingresa un nombre valido y una edad numerica.")
    }
});

// Funcion para mostrar los datos almacenados
function displayData() {
    const name = localStorage.getItem("userName");
    const age = localStorage.getItem("userAge");
    const outputDiv = document.getElementById("output");

    if (name && age) {
        outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
    }
}
// Al cargar la pagina, mostrar los datos almacenados
window.onload = displayData;

// Iniciar el contador de interacciones en session storage
    if(!sessionStorage.getItem("interactionCount")){
        sessionStorage.setItem("interactionCount", 0);
    }

    // Actualizar contador de interacciones
    function updateInteractionCount(){
        let count = parseInt(sessionStorage.getItem("interactionCount"));
        count ++;
        sessionStorage.setItem("interactionCount", count);
        console.log(`Interacciones en esta sesion: ${count}`);
    }

    // Asignar eventos a el contador
    document.getElementById("saveButton").addEventListener("click", updateInteractionCount)
    document.getElementById("clearButton").addEventListener("click", updateInteractionCount);


// Evento para limpiar los datos del local Storage
document.getElementById("clearButton").addEventListener("click", () => {
    localStorage.clear();
    displayData();
})
