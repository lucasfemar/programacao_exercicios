function gerarTabuada(n) {
    let tabuada = [];
    let titulo = "|        Tabuada do " + n + "          |";
    console.log("-------------------------------");
    console.log(titulo);
    console.log("-------------------------------\n");

    for (let i = 0; i <= 10; i++) {
        tabuada.push(`| ${n} x ${i} = ${n * i}`);
    }
    return tabuada
}
const tabuada = gerarTabuada(1);
console.log("-------------------------------");
console.log(tabuada.join("\n"));
console.log("-------------------------------");
//refazer esse exercicio em: while, dowhile e switch