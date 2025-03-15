const pessoa = {
    nome: "Victor",
    idade: 15,
    Cidade: "São Paulo",
}

function alterarCidade(novaCidade) {
    console.log("Cidade antiga:", pessoa.Cidade);
    pessoa.Cidade = novaCidade;
    console.log("Nova Cidade:", pessoa.Cidade)
}

alterarCidade("Rio de janeiro");