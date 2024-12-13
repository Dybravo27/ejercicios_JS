// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?

function calcularDineroTotal() {
    let costoLlaves = 5 * 11500;
    let costoBomba = 1168000;
    let costoPernos = 3 * 87000;
    let dineroSobra = 91000;
    let dineroTotal = costoLlaves + costoBomba + costoPernos + dineroSobra;
    alert(`El jefe de obra tenía inicialmente: $${dineroTotal}`);
}

calcularDineroTotal();

