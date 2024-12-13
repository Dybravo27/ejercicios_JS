// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let cantidad_invertir = parseFloat(prompt('Ingrese la cantidad a invertir:'));
let interes_anual = parseFloat(prompt('Ingrese el interés anual (en porcentaje):'));
let num_anios = parseInt(prompt('Ingrese el número de años:'));

if (!isNaN(cantidad_invertir) && cantidad_invertir > 0 && !isNaN(interes_anual) && interes_anual > 0 && !isNaN(num_anios) && num_anios > 0) {
    let resultados = [];
    for (let i = 1; i <= num_anios; i++) {
        cantidad_invertir += cantidad_invertir * (interes_anual / 100);
        resultados.push(`Año ${i}: $${cantidad_invertir.toFixed(2)}`);
    }
    alert(`Capital obtenido cada año:\n${resultados.join('\n')}`);
} else {
    alert('Error ingrese datos validos para la cantidad a invertir, el interes anual y el numero de años.');
}