"use strict";
const boton = document.getElementById("generarBtn");
const input = document.getElementById("alturaInput");
const resultado = document.getElementById("resultado");
boton.addEventListener("click", () => {
    const altura = parseInt(input.value);
    //Validacion
    if (isNaN(altura) || altura <= 1) {
        resultado.innerText = "Error: Por favor, ingrese un número entero mayor a 1.";
        return;
    }
    //Generar el medio árbol
    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        arbol += generarAsteriscos(i) + "\n";
    }
    resultado.innerText = arbol;
});
//Reutilizo la lógica del ejercicio anterior para generar asteriscos
function generarAstericos(n) {
    let linea = "";
    for (let i = 0; i < n; i++) {
        linea += "*";
    }
    return linea;
}
