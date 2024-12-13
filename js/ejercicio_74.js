// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.
let entrada;

do {
    entrada = prompt("Introduce algo (escribe 'salir' para terminar):").toLowerCase();
    if (entrada !== "salir") {
        alert(entrada);
    }
} while (entrada !== "salir");

alert("Programa terminado.");