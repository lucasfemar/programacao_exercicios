function verificaIdade(idade) {
    if (idade >= 18) {
        console.log("Adulto.");
    } else if (idade >= 12) {
        console.log("Adolescente.");
    } else {
        console.log("Criança.");
    }
}

verificaIdade(18);
verificaIdade(12);
verificaIdade(10);