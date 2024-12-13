// Crea una función que tome un número como argumento y devuelva la cadena si el
// número es par o impar

function par_impar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

let numero = parseInt(prompt("Introduce un número:"));
let resultado = par_impar(numero);
alert(`El número ${numero} es ${resultado}.`);