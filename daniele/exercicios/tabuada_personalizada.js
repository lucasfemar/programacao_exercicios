//function tabuadaPersonalizada (numero, inicio, fim)
    //numero = minha tabuada
    //inicio e = com qual numero minha tabuada começa
    //com qual numero minha tabuada termina
    //título da tabuada

    function tabuadaPersonalizada(numero, inicio, fim) {
        console.log(`\n Minha Tabuada do ${numero}, Iniciando em ${inicio} e terminando em ${fim}`);
        console.log("----------------------------------");
        
        for (let i = inicio; i <= fim; i++) {
            console.log(`| ${numero} x ${i} = ${numero * i}`);
        }
    }
    
    tabuadaPersonalizada(4, 3, 10.);
    console.log("----------------------------------------");
    