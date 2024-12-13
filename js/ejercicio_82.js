// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.

function invertir_cadena(cadena) {
    return cadena.split('').reverse().join('');
}

let cadena = prompt("Introduce una cadena:");
let cadena_invertida = invertir_cadena(cadena);
alert(`La cadena invertida es: '${cadena_invertida}'`);