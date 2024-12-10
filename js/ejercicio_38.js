// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena?

let cantida_tapas = parseFloat(prompt(`Ingrese la cantidad de tapas recogidas:`));

if (cantida_tapas <= 0 || Number.isNaN(cantida_tapas)) alert('Error: No se acepta campos vacios o menor a 0');

let martin = (2/3) * cantida_tapas;
let jairo = (1/4) * cantida_tapas;
let lorena = cantida_tapas - martin - jairo;
alert(`La parte que le corresponde a lorena es de ${lorena.toFixed(3)} tapas.`);