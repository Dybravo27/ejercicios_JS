// En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
// cantidad de gramos de harina para hacer el bizcocho es?

function calcularHarina() {
    const harinaPorCacao = 100;
    const cacaoPorHarina = 10;
    let cacao = 20;

    let harinaNecesaria = (harinaPorCacao * cacao) / cacaoPorHarina;
    alert(`Se necesitan ${harinaNecesaria} gramos de harina para ${cacao} gramos de cacao.`);
}
calcularHarina();