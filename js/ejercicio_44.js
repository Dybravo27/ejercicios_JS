// Realice el siguiente algoritmo para convertir pesos a dolares y a euros, utilizando como
// constante el valor de una moneda.

const tasaConversionDolar = 0.00023;
const tasaConversionEuro = 0.00021;

let cantidad_pesos = parseFloat(prompt('Ingrese la cantidad en pesos:'));

if (isNaN(cantidad_pesos) || cantidad_pesos <= 0) {
    alert('Por favor ingrese una cantidad válida en pesos.');
} else {
    let dolares = cantidad_pesos * tasaConversionDolar;
    let euros = cantidad_pesos * tasaConversionEuro;
    alert(`La cantidad en dólares es: $${dolares.toFixed(2)} USD.\nLa cantidad en euros es: €${euros.toFixed(2)} EUR.`);
}