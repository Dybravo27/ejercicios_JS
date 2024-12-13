// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este número es par o impar.

function numeroAleatorioParImpar() {
    let numero = Math.floor(Math.random() * 10) + 1;
    let resultado = (numero % 2 === 0) ? "par" : "impar";
    alert(`El número generado es ${numero} y es ${resultado}.`);
}
numeroAleatorioParImpar();