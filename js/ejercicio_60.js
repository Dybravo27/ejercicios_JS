// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

let num_curso = parseInt(prompt('Ingrese la cantidad de cursos que lleva el alumno:'));
let pago_por_curso;
let total_pago;
const pago_cursos = function(num_curso,pago_por_curso,total_pago) {
    if (!isNaN(num_curso) && num_curso > 0) {
        if (num_curso < 6) {
            pago_por_curso = 2000000;
        } else {
            pago_por_curso = 1200000;
        }
        total_pago = num_curso * pago_por_curso;
        alert(`El pago por curso es: $${pago_por_curso}\nCantidad de cursos: ${num_curso}\nTotal a pagar: $${total_pago}`);
    } else {
        alert('Ingrese una cantidad válida de cursos.');
    }
}
pago_cursos(num_curso,pago_por_curso,total_pago);