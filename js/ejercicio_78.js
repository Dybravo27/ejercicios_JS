// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
// cortas menores de 5 caracteres).

function longi_palabra(palabra) {
    if (palabra.length < 5) {
        return "corta";
    } else {
        return "larga";
    }
}

let palabra = prompt("Introduce una palabra:");
let resultado = longi_palabra(palabra);
alert(`La palabra '${palabra}' es ${resultado}.`);