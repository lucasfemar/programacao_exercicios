/* numero = minha tabuada
inicio = com qual numero começa
fim = qual numero termina
titulo (tabuada do 'numero', iniciado em 'inicio' e terminando em 'fim')
e design de traços */

function tabuadaPersonalizada(numero, inicio, fim) {
    console.log('------------------------------------')
    console.log(`tabuada do ${numero}, iniciado em ${inicio} e terminando em ${fim}`)
    console.log('------------------------------------\n')

    for (i = inicio; i <= fim; i++){
        console.log(`| ${numero} x ${i} = ${numero * i}`);
    }
}

tabuadaPersonalizada(3, 7, 20)