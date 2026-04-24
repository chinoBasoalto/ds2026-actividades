// Obtenemos los elementos y les asignamos su tipo específico
const inputAltura = document.getElementById("alturaInput") as HTMLInputElement;
const botonGenerar = document.getElementById("generarBtn") as HTMLButtonElement;
const contenedorResultado = document.getElementById("resultado") as HTMLElement;

// Función con tipado en el parámetro (number)
function generarAsteriscos(altura: number): void {
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
    } else {
        alert("Por favor, ingresa un número válido");
    }
});