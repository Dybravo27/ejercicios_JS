// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

let califi_parcial1 = parseFloat(prompt('Ingrese la nota del primer parcial:'));
let califi_parcial2 = parseFloat(prompt('Ingrese la nota del segundo parcial:'));
let califi_parcial3 = parseFloat(prompt('Ingrese la nota del tercer parcial:'));
let califi_examen_fin = parseFloat(prompt('Ingrese la nota del examen final:'));
let califi_trabajo_fin = parseFloat(prompt('Ingrese la nota del trabajo final:'));
function calificacion() {
    let prom_parcial = (califi_parcial1 + califi_parcial2 + califi_parcial3) / 3;
    let porcen_parciales = prom_parcial * 0.55;
    let porcen_exam_fin = califi_examen_fin * 0.30;
    let porcen_trabajo_fin = califi_trabajo_fin * 0.15;
    let suma_porcen = porcen_parciales + porcen_exam_fin + porcen_trabajo_fin;
    alert(`Notas y porcentajes: 
    1. Promedio de parciales: ${prom_parcial.toFixed(2)} (55% = ${porcen_parciales.toFixed(2)}) 
    2. Examen final: ${califi_examen_fin.toFixed(2)} (30% = ${porcen_exam_fin.toFixed(2)}) 
    3. Trabajo final: ${califi_trabajo_fin.toFixed(2)} (15% = ${porcen_trabajo_fin.toFixed(2)}) 
    --- 
    Promedio final: ${suma_porcen.toFixed(2)}`);
}
calificacion();