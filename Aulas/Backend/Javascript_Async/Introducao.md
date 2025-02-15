# Callback

Callbacks são funções que passamos como parametros para outra função. A função parâmetro sera usada após o processamento da função pai.

Por exemplo. Vamos supor que após o calculo de dois numeros a gente queira mostrar na tela. Poderiamos criar uma função que faz a soma e outra função que mostra o dado na tela. Ao invés de chamar as duas funções separadamente fazemos com que uma chama a outra.

```js
function somar(a, b, meuCallback) {
  const result = a + b;
  meuCallback(result);
}

function print(valor) {
  console.log(valor);
}

somar(5, 5);
```

Callbacks geralmente são usadas em funções asyncronas que levam um certo tempo para serem executadas.

```js
const pessoas = [
  {
    id: 1,
    nome: "Lucas",
    idade: 26,
  },
  {
    id: 2,
    nome: "Joana",
    idade: 43,
  },
  {
    id: 3,
    nome: "Jack",
    idade: 12,
  },
];

function buscarPessoasPorId(id, callback) {
  let pessoa;
  setTimeout(function () {
    pessoa = pessoas.filter((pessoa) => pessoa.id === id);
    callback(pessoa);
  }, 5000);
}

function print(valor) {
  console.log(valor);
}

buscarPessoasPorId(1, print);
```

# Promises

Uma Promise é um objeto em JavaScript que representa um valor que pode estar disponível agora, no futuro ou nunca. Elas são usadas para trabalhar com operações assíncronas, como requisições a APIs, leitura de arquivos, ou temporizadores.

```js
const minhaPromise = new Promise((resolve, reject) => {
  let sucesso = true; // Simulando um resultado

  setTimeout(() => {
    if (sucesso) {
      resolve("Operação concluída com sucesso!");
    } else {
      reject("Algo deu errado...");
    }
  }, 2000); // Simula um atraso de 2 segundos
});
```

Como nós consumimos essa promise?

```js
minhaPromise
  .then((resultado) => {
    console.log("Sucesso:", resultado);
  })
  .catch((erro) => {
    console.log("Erro:", erro);
  });
```

Caso você precise executar varias operações assyncronas você pode encadear suas promises.

```js
function primeiraTarefa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primeira tarefa concluída!");
      resolve("Dados da primeira tarefa");
    }, 1000);
  });
}

function segundaTarefa(dados) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Segunda tarefa concluída! Recebi:", dados);
      resolve("Dados da segunda tarefa");
    }, 1000);
  });
}

primeiraTarefa()
  .then(segundaTarefa)
  .then((resultadoFinal) => {
    console.log("Fim do processo:", resultadoFinal);
  });
```

Hoje existe uma forma mais moderna de executar funções asyncronas apenas utilizando a técnica async/await

```js
async function executarTarefas() {
  try {
    const resultado1 = await primeiraTarefa();
    const resultado2 = await segundaTarefa(resultado1);
    console.log("Fim do processo:", resultado2);
  } catch (erro) {
    console.log("Erro capturado:", erro);
  }
}

executarTarefas();
```
