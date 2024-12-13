// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%

let duracion = parseFloat(prompt('Introduce la duración de la llamada en minutos: '));
let iva = 0.20;
let costo_minuto = 355;

const pago_llamada = function(duracion,iva,costo_minuto) {
    let costo_sin_iva = duracion * costo_minuto; 
    let monto_iva = costo_sin_iva * iva; 
    let costo_total = costo_sin_iva + monto_iva;
    alert(`Costo sin IVA: $${costo_sin_iva.toFixed(2)} pesos\nMonto del IVA: $${monto_iva.toFixed(2)} pesos\nCosto total: $${costo_total.toFixed(2)} pesos`);
}
pago_llamada(duracion,iva,costo_minuto);