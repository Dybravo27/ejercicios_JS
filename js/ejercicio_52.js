// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let rol = prompt('Ingrese su rol como empleado (planta o administrativo):').toLowerCase();
let horas_trabajadas = parseInt(prompt('Ingrese el total de horas trabajadas:'));
let pago = 0;

if (!isNaN(horas_trabajadas) && horas_trabajadas > 0) {
    switch (rol) {
        case 'planta':
            pago = horas_trabajadas * 20000;
            alert(`El pago por trabajar ${horas_trabajadas} horas y ser de PLANTA es: ${pago}`);
            break;
        case 'administrativo':
            pago = horas_trabajadas * 10000;
            alert(`El pago por trabajar ${horas_trabajadas} horas y ser ADMINISTRATIVO es: ${pago}`);
            break;
        default:
            alert('Ingrese un rol válido (planta o administrativo).');
            break;
    }
} else {
    alert('Ingrese un numero válido de horas trabajadas.');
}
