// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

const precioLibro = 10000;
const precioCuaderno = 7550;
const precioLapicero = 5550;

let cantidadLibros = parseInt(prompt('Ingrese la cantidad de libros vendidos:'));
let cantidadCuadernos = parseInt(prompt('Ingrese la cantidad de cuadernos vendidos:'));
let cantidadLapiceros = parseInt(prompt('Ingrese la cantidad de lapiceros vendidos:'));

if (isNaN(cantidadLibros) || isNaN(cantidadCuadernos) || isNaN(cantidadLapiceros) || 
cantidadLibros < 0 || cantidadCuadernos < 0 || cantidadLapiceros < 0) alert('Por favor ingrese cantidades válidas.');
else {
    let totalLibros = cantidadLibros * precioLibro;
    let totalCuadernos = cantidadCuadernos * precioCuaderno;
    let totalLapiceros = cantidadLapiceros * precioLapicero;

    let montoTotal = totalLibros + totalCuadernos + totalLapiceros;
    alert(`Monto total de la venta: $${montoTotal.toFixed(2)}`);
}