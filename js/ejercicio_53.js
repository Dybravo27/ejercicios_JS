// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.
let subtotal = 0, iva,total;
for (let i = 0; i < 5; i++) {
    let producto = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}:`));
    if (!isNaN(producto) && producto > 0)subtotal += producto;
    else {
        alert('El dato ingresado no corresponde con lo solicitado');
        i--;
    }
}
iva = subtotal * 0.19;
total = subtotal + iva;
alert(`Subtotal: $${subtotal.toFixed(2)}\nIVA (19%): $${iva.toFixed(2)}\nTotal: $${total.toFixed(2)}`);