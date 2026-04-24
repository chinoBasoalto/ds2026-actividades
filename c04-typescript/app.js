// Selección de elementos con tipado
const inputAltura = document.getElementById("alturaInput");
const botonGenerar = document.getElementById("generarBtn");
const contenedorResultado = document.getElementById("resultado");
// Función tipada: recibe número, no devuelve nada (void)
function dibujarArbol(altura) {
    let contenido = "";
    for (let i = 1; i <= altura; i++) {
        contenido += "*".repeat(i) + "\n";
    }
    contenedorResultado.innerText = contenido;
}
// Evento del botón
botonGenerar.addEventListener("click", () => {
    const valor = parseInt(inputAltura.value);
    if (!isNaN(valor) && valor > 0) {
        dibujarArbol(valor);
    }
    else {
        alert("Por favor, ingresa un número válido mayor a 0");
    }
});
export {};
