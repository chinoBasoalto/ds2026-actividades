//Cargo un par de datos para que no esté vacio
const catalogo = [
    { isbn: "978-1", titulo: "El Aleph", autor: "Borges", precio: 4500, disponible: true, genero: "Cuento" },
    { isbn: "978-2", titulo: "Rayuela", autor: "Cortazar", precio: 6200, disponible: false, genero: "Novela" },
    { isbn: "978-3", titulo: "Ficciones", autor: "Borges", precio: 3800, disponible: true },
    { isbn: "978-4", titulo: "Sobre heroes y tumbas", autor: "Sabato", precio: 5500, disponible: true, genero: "Novela" }
];
//Referencias al index
const divLista = document.getElementById("lista-libros");
const divStats = document.getElementById("stats");
const inputAutor = document.getElementById("inputAutor");
//Tipado de funciones pedidas
function buscarPorAutor(autor) {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(l => l.disponible === true);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const total = libros.reduce((acc, l) => acc + l.precio, 0);
    return total / libros.length;
}
//Funcion de renderizado
function renderizar(libros) {
    divLista.innerHTML = ""; //Limpio lo que había antes
    libros.forEach(l => {
        const card = document.createElement("div");
        card.style.border = "1px solid black"; // Un borde simple para que se note
        card.style.margin = "5px";
        card.style.padding = "5px";
        card.innerHTML = `
            <p><strong>${l.titulo}</strong></p>
            <p>Autor: ${l.autor}</p>
            <p>Precio: $${l.precio}</p>
            <p>Estado: ${l.disponible ? "Disponible" : "Sin stock"}</p>
        `;
        divLista.appendChild(card);
    });
    // Actualizo stats
    const promedio = precioPromedio(libros);
    divStats.innerHTML = `
        <hr>
        <p>Cantidad de libros: ${libros.length}</p>
        <p>Precio promedio: $${promedio.toFixed(2)}</p>
    `;
}
//Momento enganchar botones
document.getElementById("btnFiltrar")?.addEventListener("click", () => {
    const busqueda = inputAutor.value;
    const filtrados = buscarPorAutor(busqueda);
    renderizar(filtrados);
});
document.getElementById("btnDisponibles")?.addEventListener("click", () => {
    renderizar(librosDisponibles());
});
document.getElementById("btnTodos")?.addEventListener("click", () => {
    renderizar(catalogo);
});
// Carga inicial
renderizar(catalogo);
export {};
