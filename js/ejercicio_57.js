// Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.

let calificacion = parseFloat(prompt('Ingrese la calificación numérica:'));
let califica_lite;
let comentario;

if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 10) {
    if (calificacion >= 9.1 && calificacion <= 10) {
        califica_lite = 'A';
        comentario = 'Excelente';
    } else if (calificacion >= 8.1 && calificacion <= 9) {
        califica_lite = 'B';
        comentario = 'Muy bien';
    } else if (calificacion >= 7.5 && calificacion <= 8) {
        califica_lite = 'C';
        comentario = 'Bien';
    } else {
        califica_lite = 'NA';
        comentario = 'No Aprobado';
    }
    alert(`Calificación numérica: ${calificacion}\nCalificación literal: ${califica_lite}\nComentario: ${comentario}`);
} else {
    alert('Por favor, ingrese una calificación válida entre 0.0 y 10.0');
}
