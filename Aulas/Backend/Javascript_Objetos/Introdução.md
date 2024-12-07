# Objetos

Objetos no javascript são váriaveis. Porém objetos possuem propriedades e métodos.

Pense em um carro como objeto, o carro tem várias características e funções e vamos chama-los de propriedades e métodos respectivamente.

Um carro possui propriedades como:

-   Ano
-   Modelo
-   Marca
-   Cor
-   Placa

e possui funções como.

-   Ligar
-   Andar
-   Freiar
-   Virar
-   Buzinar

Fazendo um paralelo como o javascrpt um objeto nada mais é do que uma várivel que descreve algum objeto virtual. Por exemplo o cadastro de um aluno no site da escola.

Nessa caso temos dois objetos, alunos e escola. Vamos ver esse exemplo na prática. Mas primerio como se declara um objeto?

```js
// Exemplo 1
const pessoa = { primeiroNome: 'John', ultimoNome: 'Doe', idade: 50, corDosOlhos: 'azuis' };
```

```js
// Exemplo 2
const pessoa = {};

pessoa.primeiroNome = 'John';
pessoa.secundoNome = 'Doe';
pessoa.idade = 50;
pessoa.corDosOlhos = 'azuis';
```

Agora vamos a o exemplo dos objetos alunos e escola.

```js
const escola = {
    nome: 'Escola de Programação IBPV',
    endenreço: 'Avenida Discord sala de estudos',
    fazerChamada: (alunos) => {
        alunos.forEach((aluno) => {
            console.log(aluno.nome.toUpperCase());
            aluno.responderChamada();
        });
    },
};

const aluno1 = {
    matricula: 'ABC123',
    nome: 'João da Silva',
    idade: 14,
    reponderChamada: () => {
        console.log('Presente');
    },
};
const aluno2 = {
    matricula: 'ABC123',
    nome: 'João da Silva',
    idade: 14,
    reponderChamada: () => {
        console.log('Presente');
    },
};
const alunos = [aluno1, aluno2];
escola.fazerChamada(alunos);
```

-   É comum fazer a declaração de um objeto utilizando o _const_.

## Objetos JavaScript são Mutáveis

Os objetos são mutáveis: eles são referenciados por endereço, não por valor.

Se um objeto **pessoa** é um objeto, a seguinte declaração não criará uma cópia de **pessoa**:

```js
const x = person;
```

O objeto **x** não é uma cópia de **pessoa**. O objeto **x** é o mesmo que **pessoa**.

Os objetos **x** e **pessoa** compartilham o mesmo endereço de memória.

Qualquer alteração em **x** também afetará **pessoa**:

Exemplo:

```js
// Criar um Objeto
const pessoa = {
    primeiroNome: 'John',
    ultimoNome: 'Doe',
    idade: 50,
    corDosOlhos: 'azuis',
};

// Criar uma "cópia"
const x = pessoa;

// Alterar a idade em ambos
x.idade = 10;
```
