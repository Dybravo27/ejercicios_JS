// Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

function calcularEdad() {
    const ano_nacimiento = prompt('Por favor, ingrese su año de nacimiento:');
    const edad = 2024 - ano_nacimiento;
    alert(`La edad de la persona es: ${edad} años.`);
}
calcularEdad();