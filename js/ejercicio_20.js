// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante

let a = parseFloat(prompt("Introduce el valor de a: "));
let b = parseFloat(prompt("Introduce el valor de b: "));
let c = parseFloat(prompt("Introduce el valor de c: "));

let discriminante = b * b - 4 * a * c;
function ecuacion() {
    if (discriminante < 0) {
      alert('La ecuación no tiene raíces reales.');
    } else if (discriminante === 0) {
      let x = -b / (2 * a);
      alert(`La ecuación tiene una raíz real: ${x}`);
    } else {
      let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      alert(`La ecuación tiene dos raíces reales: ${x1} y ${x2}`);
    }
}
ecuacion();