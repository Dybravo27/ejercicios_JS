// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

function procesarNotas() {
    let n = parseInt(prompt("Ingrese el numero de alumnos:"));

    let nota_alta = -1;
    let nota_baja = 101;
    let nota_maxima_100 = 0;
    let rangoA = 0;
    let rangoB = 0;
    let rangoC = 0;
    let rangoD = 0;
    for (let i = 1; i <= n; i++) {
        let nota = parseInt(prompt(`Ingrese la nota del alumno ${i}:`));
        if (nota > nota_alta) nota_alta = nota;
        if (nota < nota_baja) nota_baja = nota;
        if (nota === 100) nota_maxima_100++;
        if (nota >= 90 && nota < 100) rangoA++;
        else if (nota >= 80 && nota < 90) rangoB++;
        else if (nota >= 70 && nota < 80) rangoC++;
        else if (nota >= 60 && nota < 70) rangoD++;
    }
    alert(`La nota mas alta es: ${nota_alta}
        La nota mas baja es: ${nota_baja}
        Numero de alumnos con la maxima nota de 100: ${nota_maxima_100}
        Numero de alumnos con nota 'a' (90-99): ${rangoA}
        Numero de alumnos con nota 'b' (80-89): ${rangoB}
        Numero de alumnos con nota 'c' (70-79): ${rangoC}
        Numero de alumnos con nota 'd' (60-69): ${rangoD}`);
}
procesarNotas();