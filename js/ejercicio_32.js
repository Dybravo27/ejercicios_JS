// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

let producto_1 = parseInt(prompt('Ingrese el valor del primer producto'));
let producto_2 = parseInt(prompt('Ingrese el valor del segundo producto'));
let producto_3 = parseInt(prompt('Ingrese el valor del tercer producto'));
let producto_4 = parseInt(prompt('Ingrese el valor del cuarto producto'));
let producto_5 = parseInt(prompt('Ingrese el valor del quinto producto'));
function calcular_descuento() {
    let tot_produ1 = producto_1 - (producto_1 * 0.05); 
    let tot_produ2 = producto_2 - (producto_2 * 0.05); 
    let tot_produ3 = producto_3;
    let tot_produ4 = producto_4 - (producto_4 * 0.02);
    let tot_produ5 = producto_5 - (producto_5 * 0.02);
    
    let total = tot_produ1 + tot_produ2 + tot_produ3 + tot_produ4 + tot_produ5;
    alert(`Valores a pagar por cada producto: 
    Producto 1: $${tot_produ1.toFixed(2)} 
    Producto 2: $${tot_produ2.toFixed(2)} 
    Producto 3: $${tot_produ3.toFixed(2)} 
    Producto 4: $${tot_produ4.toFixed(2)} 
    Producto 5: $${tot_produ5.toFixed(2)} 
    Total de la compra: $${total.toFixed(2)}`);
}
calcular_descuento();