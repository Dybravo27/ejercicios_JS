// Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

let mes = prompt('Ingrese el nombre del mes:').toLowerCase();
let dia = parseInt(prompt('Ingrese el día:'));
let signo_zodiacal;

function zigno() {
    if (!isNaN(dia) && dia >= 1 && dia <= 31) {
        if (mes === 'enero') {
            signo_zodiacal = (dia < 20) ? 'Capricornio' : 'Acuario';
        } else if (mes === 'febrero') {
            signo_zodiacal = (dia < 19) ? 'Acuario' : 'Piscis';
        } else if (mes === 'marzo') {
            signo_zodiacal = (dia < 21) ? 'Piscis' : 'Aries';
        } else if (mes === 'abril') {
            signo_zodiacal = (dia < 20) ? 'Aries' : 'Tauro';
        } else if (mes === 'mayo') {
            signo_zodiacal = (dia < 21) ? 'Tauro' : 'Géminis';
        } else if (mes === 'junio') {
            signo_zodiacal = (dia < 21) ? 'Géminis' : 'Cáncer';
        } else if (mes === 'julio') {
            signo_zodiacal = (dia < 23) ? 'Cáncer' : 'Leo';
        } else if (mes === 'agosto') {
            signo_zodiacal = (dia < 23) ? 'Leo' : 'Virgo';
        } else if (mes === 'septiembre') {
            signo_zodiacal = (dia < 23) ? 'Virgo' : 'Libra';
        } else if (mes === 'octubre') {
            signo_zodiacal = (dia < 23) ? 'Libra' : 'Escorpio';
        } else if (mes === 'noviembre') {
            signo_zodiacal = (dia < 22) ? 'Escorpio' : 'Sagitario';
        } else if (mes === 'diciembre') {
            signo_zodiacal = (dia < 22) ? 'Sagitario' : 'Capricornio';
        } else {
            signo_zodiacal = 'Mes no válido';
        }
        alert(`El mes ingresado es ${mes} y el día es ${dia}. Tu signo zodiacal es: ${signo_zodiacal}`);
    } else {
        alert('Por favor, ingrese un día válido entre 1 y 31.');
    }
}
zigno();