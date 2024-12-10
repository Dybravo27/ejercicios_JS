// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.

function generarPresupuesto() {
    let nombreCliente = prompt('Ingrese el nombre del cliente:');
    let superficie = parseFloat(prompt('Ingrese la superficie a pintar en m²:'));
    let precio_m2 = parseFloat(prompt('Ingrese el precio por m²:'));

    if (isNaN(superficie) || isNaN(precio_m2) || superficie <= 0 || precio_m2 <= 0)alert('Por favor ingrese valores válidos.');
    else{
        let costoTotal = superficie * precio_m2;
        alert(`Presupuesto para ${nombreCliente}:\nSuperficie a pintar: ${superficie} m²\nPrecio por m²: $${precio_m2.toFixed(2)}\nCosto total: $${costoTotal.toFixed(2)}`);
    }
}
generarPresupuesto();