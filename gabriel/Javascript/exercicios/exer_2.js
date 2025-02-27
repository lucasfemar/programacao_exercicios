const p = {
    nome: "Gabriel",
    idade: 21,
    cidade: "SP"
}


function trocarCidade(pessoa, novacidade) {
    pessoa.cidade = novacidade
}

console.log("Cidade antiga: "+ p.cidade)
trocarCidade(p, "Rio de janeiro")
console.log("Cidade nova: "+ p.cidade)