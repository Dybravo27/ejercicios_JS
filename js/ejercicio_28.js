// Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let nombre = prompt('Nombre del empleado:');
let horas_trabajo = parseInt(prompt('Numero de horas que trabajo:'));
let pago_hora = parseFloat(prompt('Digita el pago por hora:'));

function pago_empleado() {
    let sueldo = horas_trabajo *pago_hora;
    alert(`Empleado: ${nombre}\nHoras trabajadas: ${horas_trabajo}\nPago por hora: $${pago_hora.toFixed(2)}\nSueldo total: $${sueldo.toFixed(2)}`);
}
pago_empleado();