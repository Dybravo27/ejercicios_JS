// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

function inver_aditivo(numeros) {
    return numeros.map(numero => -numero);
}

let numeros = [3, -2, 5, -1, 0, 7];
let inversos = inver_aditivo(numeros);
console.log("Los inversos aditivos son: " + inversos);