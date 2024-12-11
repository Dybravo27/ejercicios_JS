// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo = parseFloat(prompt('Ingrese el saldo a ingresar:'));
let intereses;
let saldo_final;

if (!isNaN(saldo) && saldo > 0) {
    if (saldo < 100000) {
        intereses = saldo * 0.03;
        saldo_final = saldo + intereses;
    } else {
        intereses = saldo * 0.04;
        saldo_final = saldo + intereses;
    }
    alert(`Saldo inicial: $${saldo.toFixed(2)}\nInterés pagado: $${intereses.toFixed(2)}\nSaldo final: $${saldo_final.toFixed(2)}`);
} else {
    alert('Ingrese un valor valido para el saldo.');
}
