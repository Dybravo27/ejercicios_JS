// Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

let grados_centi = parseInt(prompt('Ingrese el valor de Grados centigrados (°C):'));

function conversion_farenheit() {
    let formula = ((9 * grados_centi) / 5) + 32;
    alert(`La conversion de los grados ${grados_centi}°C a fahrenheit = ${formula}°F`);
}
conversion_farenheit();