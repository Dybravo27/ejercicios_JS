// Genera un patrón de asteriscos en forma de pirámide.

function generarPiramide(niveles) {
    for (let i = 1; i <= niveles; i++) {
        let espacios = " ".repeat(niveles - i);
        let asteriscos = "*".repeat(2 * i - 1);
        console.log(espacios + asteriscos + espacios);
    }
}

let niveles = parseInt(prompt("Introduce el número de niveles para la pirámide:"));
generarPiramide(niveles);