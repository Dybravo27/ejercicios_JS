// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let consumo = parseFloat(prompt('Ingrese el pago por su consumo:'));

if (!isNaN(consumo) && consumo > 0) {
    if (consumo > 130000) {
        let total = consumo - (consumo * 0.15);
        alert(`Su consumo fue de ${consumo} por lo que recibira un descuento del 15%\nPor lo que el total a pagar es: ${total}`);
    } else {
        alert(`Su consumo fue de ${consumo} por lo que no habra descuento.\nEl total a pagar es: ${consumo}`);
    }
} else {
    alert('Por favor, ingrese un valor valido para el consumo.');
}
