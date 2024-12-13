// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales

function elimi_vocal(cadena) {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
}

let cadena = prompt("Introduce una cadena:");
let cade_sin_vocales = elimi_vocal(cadena);
alert("La nueva cadena sin vocales es: " + cade_sin_vocales);