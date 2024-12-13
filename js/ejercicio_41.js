// Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida

function invertirFrase() {
    const frase = prompt("Ingresa una frase que te identifique como programador de Software:");
    const fraseInvertida = frase.split('').reverse().join('');
    alert(`Frase normal: ${frase}\nFrase invertida:  ${fraseInvertida}`);
}
invertirFrase();