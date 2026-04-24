"use strict";
// Obtenemos los elementos y les asignamos su tipo específico
const inputAltura = document.getElementById("alturaInput");
const botonGenerar = document.getElementById("generarBtn");
const contenedorResultado = document.getElementById("resultado");
// Función con tipado en el parámetro (number)
function generarAsteriscos(altura) {
    let contenido = "";
    for (let i = 1; i <= altura; i++) {
        contenido += "*".repeat(i) + "\n";
    }
    contenedorResultado.innerText = contenido;
}
// Evento
botonGenerar.addEventListener("click", () => {
    // Convertimos el value a número
    const altura = parseInt(inputAltura.value);
    if (!isNaN(altura)) {
        generarAsteriscos(altura);
    }
    else {
        alert("Por favor, ingresa un número válido");
    }
});
