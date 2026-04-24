const inputAltura = document.getElementById("alturaInput");
const botonGenerar = document.getElementById("generarBtn");
const contenedorResultado = document.getElementById("resultado");
// Función para dibujar el árbol
function dibujarArbol(altura) {
    let contenido = "";
    for (let i = 1; i <= altura; i++) {
        contenido += "*".repeat(i) + "\n";
    }
    contenedorResultado.innerText = contenido;
}
// Evento del botón
if (botonGenerar) {
    botonGenerar.addEventListener("click", () => {
        console.log("Botón clickeado!"); // Esto nos dirá si funciona
        const valor = parseInt(inputAltura.value);
        if (!isNaN(valor) && valor > 0) {
            dibujarArbol(valor);
        }
        else {
            alert("Por favor, ingresa un número válido");
        }
    });
}
export {};
