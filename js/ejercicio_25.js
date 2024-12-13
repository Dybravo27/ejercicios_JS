// Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

let medicamento = parseInt (prompt('Ingrese el precio del medicamento:'));
let descuento = 0.10;

function farmacia() {
    let costo_descuento = medicamento * descuento;
    let precio_final = medicamento - costo_descuento;
    alert(`Costo original: ${descuento}\nDescuento: ${costo_descuento}\nPrecio final: $${precio_final}`);
}
farmacia();