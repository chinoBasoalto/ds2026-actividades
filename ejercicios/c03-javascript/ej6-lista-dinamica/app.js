const input = document.getElementById("productoInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("listaProductos");
const contador = document.getElementById("contador");

let totalProductos = 0;

boton.addEventListener("click", () => {
    const nombre = input.value.trim();

    // Validación
    if (nombre === "") {
        alert("Por favor, ingresa un nombre de producto.");
        return;
    }

    // Crear el elemento de lista (li)
    const li = document.createElement("li");
    li.innerHTML = `
        ${nombre} 
        <button class="eliminarBtn">Eliminar</button>
    `;

    // Lógica para eliminar
    li.querySelector(".eliminarBtn").addEventListener("click", () => {
        li.remove();
        totalProductos--;
        actualizarContador();
    });

    // Agregar a la lista y actualizar contador
    lista.appendChild(li);
    totalProductos++;
    actualizarContador();

    // Limpiar input
    input.value = "";
    input.focus();
});

function actualizarContador() {
    contador.innerText = `${totalProductos} productos en la lista`;
}