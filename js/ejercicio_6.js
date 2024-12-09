// Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.

let nombre = prompt('Ingrese su nombre').toLowerCase();
let sexo = prompt('Ingresa tu sexo (Hombre/Mujer)').toLowerCase();

const genero = function(nombre,sexo) {
    if (nombre !== '' && sexo !== '') {        
        if (sexo === 'mujer' && nombre[0]) {
            alert(`${nombre} perteneces al grupo A`);
        } 
        else if (sexo ==='hombre' && nombre[0]) {
            alert(`${nombre} perteneces al grupo B`);
        }
        else {
            alert('Sexo no valido, introduce hombre o mujer');
        }
    }
    else{
        alert('Error: no se puede dejar los campos vacios');
    }
}
genero(nombre,sexo);