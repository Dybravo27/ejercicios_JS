// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.

function contarSilabas(palabra) {
    let contador = 0;
    let vocales = "aeiouáéíóú";

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
            while (i + 1 < palabra.length && vocales.includes(palabra[i + 1])) {
                i++;
            }
        }
    }
    return contador;
}

let palabra = prompt("Introduce una palabra:").toLowerCase();
let num_silabas = contarSilabas(palabra);
alert(`La palabra '${palabra}' tiene ${num_silabas} sílabas.`);