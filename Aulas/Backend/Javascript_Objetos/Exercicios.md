# Exercícios de Objetos em JavaScript

## Exercício 1: Criação e Manipulação de Objetos

Crie um objeto chamado `car` com as seguintes propriedades:

-   `brand` (marca) com valor inicial `"Toyota"`.
-   `model` (modelo) com valor inicial `"Corolla"`.
-   `year` (ano) com valor inicial `2020`.
-   `color` (cor) com valor inicial `"silver"`.

Após criar o objeto:

1. Exiba todas as propriedades do objeto no console.
2. Altere a cor (`color`) do carro para `"blue"`.
3. Adicione uma nova propriedade chamada `mileage` (quilometragem) com o valor `50000`.
4. Exclua a propriedade `year` do objeto.
5. Exiba o objeto atualizado no console.

---

## Exercício 2: Comparação e Referência em Objetos

Leia o código abaixo e responda às perguntas:

```javascript
// Criação de um objeto
const student = {
    name: 'Alice',
    age: 22,
    course: 'Computer Science',
};

// Atribuição de referência
const anotherStudent = student;

// Alteração em anotherStudent
anotherStudent.age = 23;
anotherStudent.course = 'Mathematics';

// Exibição
console.log(student);
console.log(anotherStudent);
```

**Perguntas:**

1. Qual será a idade (`age`) e o curso (`course`) exibidos para o objeto `student` no console?
2. Explique por que as mudanças feitas em `anotherStudent` também afetam `student`.
3. Como você faria para criar uma **cópia independente** de `student` que não compartilhe o mesmo endereço de memória?

**Dica:** Tente executar o código em seu editor e observe os resultados.
