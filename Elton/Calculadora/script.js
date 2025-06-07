// Função chamada quando um botão de número ou operador é clicado
// Adiciona o valor do botão ao display (campo de resultado)
function adicionar(valor) {
    document.getElementById("resultado").value += valor;
}

// Função chamada quando o botão '=' é clicado
// Calcula o resultado da expressão mostrada no display
function calcular() {
    try {
        // eval executa a expressão matemática digitada
        document.getElementById("resultado").value = eval(document.getElementById("resultado").value);
    } catch {
        // Se houver erro na expressão, mostra "Erro" no display
        document.getElementById("resultado").value = "Erro";
    }
}

// Função chamada quando o botão 'C' é clicado
// Limpa o display, apagando tudo
function limpar() {
    document.getElementById("resultado").value = "";
}

// Gerar todos os botões da calculadora em formato tradicional
// Este código roda quando a página termina de carregar
window.onload = function() {
    // Seleciona o div onde os botões serão inseridos
    const container = document.getElementById('botoes-calculadora');
    // Layout dos botões igual a uma calculadora tradicional
    const layout = [
        [7, 8, 9, '/'],
        [4, 5, 6, '*'],
        [1, 2, 3, '-'],
        [0, '.', '=', '+'],
        ["C"] // Linha só com o botão C
    ];
    layout.forEach(linha => {
        linha.forEach(botao => {
            // Cria o botão
            const btn = document.createElement('button');
            btn.textContent = botao;
            // Define a ação de cada botão
            if (botao === '=') {
                btn.onclick = calcular;
            } else if (botao === 'C') {
                btn.onclick = limpar;
            } else {
                btn.onclick = function() { adicionar(botao); };
            }
            container.appendChild(btn);
        });
        // Quebra de linha após cada linha de botões
        container.appendChild(document.createElement('br'));
    });
};