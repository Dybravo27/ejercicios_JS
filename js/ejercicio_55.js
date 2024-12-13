// En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.

let precio_helado = parseFloat(prompt('Ingrese el precio del helado:'));
let membresia = prompt('Ingrese el tipo de membresia (A, B o C)').toUpperCase();

if (!isNaN(precio_helado) && precio_helado > 0) {
    let pago;
    switch (membresia) {
        case 'A':
            pago = precio_helado - (precio_helado * 0.10);
            alert(`El precio a pagar por tener membresia tipo A es de: $${pago.toFixed(2)}`);
            break;
        case 'B':
            pago = precio_helado - (precio_helado * 0.15);
            alert(`El precio a pagar por tener membresia tipo B es de: $${pago.toFixed(2)}`);
            break;
        case 'C':
            pago = precio_helado - (precio_helado * 0.20);
            alert(`El precio a pagar por tener membresia tipo C es de: $${pago.toFixed(2)}`);
            break;
        default:
            alert('Ingrese un tipo de membresia valido (A, B o C).');
            break;
    }
} else {
    alert('Por favor, ingrese un precio valido para el helado.');
}