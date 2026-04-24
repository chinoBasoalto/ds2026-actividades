// 2. Estado en memoria (Catálogo con 3 libros precargados)
let catalogo = [
    { isbn: "AUTO-1", titulo: "El Aleph", autor: "Borges", precio: 4500, disponible: true },
    { isbn: "AUTO-2", titulo: "Rayuela", autor: "Cortazar", precio: 6200, disponible: false },
    { isbn: "AUTO-3", titulo: "Ficciones", autor: "Borges", precio: 3800, disponible: true }
];
// 3. Referencias al DOM
const divLista = document.getElementById("lista-libros");
const divStats = document.getElementById("stats");
const errorDiv = document.getElementById("errorForm");
// Inputs del Formulario
const txtTitulo = document.getElementById("titulo");
const txtAutor = document.getElementById("autor");
const numPrecio = document.getElementById("precio");
const txtGenero = document.getElementById("genero");
const chkDisponible = document.getElementById("disponible");
// 4. Funciones de Lógica ABM
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
function eliminarLibro(isbn) {
    // Filtramos el array para sacar el que coincide con el ISBN
    catalogo = catalogo.filter(l => l.isbn !== isbn);
    renderizar(catalogo);
}
function validarFormulario() {
    // Limpiamos errores previos
    errorDiv.innerText = "";
    const titulo = txtTitulo.value.trim();
    const autor = txtAutor.value.trim();
    const precio = parseFloat(numPrecio.value);
    const genero = txtGenero.value.trim();
    const disponible = chkDisponible.checked;
    // Validaciones básicas
    if (titulo === "" || autor === "") {
        errorDiv.innerText = "Error: Título y Autor son obligatorios.";
        return null;
    }
    if (isNaN(precio) || precio <= 0) {
        errorDiv.innerText = "Error: El precio debe ser mayor a 0.";
        return null;
    }
    // Si todo está ok, creamos el objeto Libro
    const nuevoLibro = {
        isbn: "AUTO-" + Date.now(), // Generamos ID único
        titulo,
        autor,
        precio,
        disponible,
        genero: genero || undefined // Si está vacío queda como undefined
    };
    return nuevoLibro;
}
// 5. Renderizado (Con botón eliminar)
function renderizar(libros) {
    divLista.innerHTML = "";
    libros.forEach(l => {
        const card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.margin = "10px";
        card.style.padding = "10px";
        card.innerHTML = `
            <p><strong>${l.titulo}</strong> (ISBN: ${l.isbn})</p>
            <p>Autor: ${l.autor} | Precio: $${l.precio}</p>
            <p>Estado: ${l.disponible ? "Disponible" : "Sin Stock"}</p>
        `;
        // Botón Eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => eliminarLibro(l.isbn);
        card.appendChild(btnEliminar);
        divLista.appendChild(card);
    });
    // Actualizar Stats
    const total = libros.length;
    const promedio = total > 0 ? libros.reduce((acc, l) => acc + l.precio, 0) / total : 0;
    divStats.innerHTML = `
        <hr>
        <p>Libros mostrados: ${total}</p>
        <p>Precio promedio: $${promedio.toFixed(2)}</p>
    `;
}
// 6. Event Listeners
document.getElementById("btnAgregar")?.addEventListener("click", () => {
    const nuevo = validarFormulario();
    if (nuevo) {
        agregarLibro(nuevo);
        // Limpiar formulario
        txtTitulo.value = "";
        txtAutor.value = "";
        numPrecio.value = "";
        txtGenero.value = "";
    }
});
// Botones de filtro (Reusados del Ej 2)
document.getElementById("btnTodos")?.addEventListener("click", () => renderizar(catalogo));
document.getElementById("btnDisponibles")?.addEventListener("click", () => {
    const disponibles = catalogo.filter(l => l.disponible);
    renderizar(disponibles);
});
document.getElementById("btnFiltrar")?.addEventListener("click", () => {
    const busqueda = document.getElementById("inputAutor").value.toLowerCase();
    const filtrados = catalogo.filter(l => l.autor.toLowerCase().includes(busqueda));
    renderizar(filtrados);
});
// Carga Inicial
renderizar(catalogo);
export {};
