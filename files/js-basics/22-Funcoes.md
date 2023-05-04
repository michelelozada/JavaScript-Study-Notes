> **Funções**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
:one: **Funções**  

\- São blocos de códigos que só são executados quando chamados.  
\- Podem retornar um resultado para o trecho de código que a chamou.  
\- Variáveis declaradas dentro da função só são visíveis dentro da função (escopo local).  
\- Uma função também pode receber como parâmetro ou retornar como resposta arrays, objetos e funções.  

```js

// Sintaxe básica

function nomeDaFuncao(parâmetros) {
  (...)
}

// Chamada da função
nomeDaFuncao(argumentos);
```
&nbsp;    

:arrow_forward: **Exercício:** Dado o seguinte array de números [1,2,3,4,5,6,7,8,9,10] e um 
número (que vamos considerar aqui como sendo 7), escreva um algoritmo que crie uma nova lista 
para armazenar *apenas* os valores menores que o valor da variável 'num'.  

```js

// Criando a função criarNovoArray
function criarNovoArray(originalArray, num) {
  let novoArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    if(originalArray[i] < num) {
      novoArray.push(originalArray[i]);
    }
  }
  return novoArray;
}

let originalArray = [1,2,3,4,5,6,7,8,9,10];
let num = 7;
console.log(`Este é o array resultante: [${criarNovoArray(originalArray, num)}].`);

// Retorna: Este é o array resultante: [1,2,3,4,5,6]. 
```

&nbsp;

:two: **Função anônima**  

\- É uma função sem nome, sendo que para chamá-la temos de atribuí-la a uma variável.  
\- Pode ser usada como argumento em outras funções.  
```js

// Sintaxe básica
let exemplo = function() {
  console.log('Esta é uma função anônima');
}
```
```js

setTimeout(function() {
  console.log('Foi impresso na tela após 3 segundos');
}, 3000)
```

&nbsp;  

:three: **Arrow function**  

É uma função anônima, portanto, para ser executada chamamos a variável na qual esta função foi atribuída.  
```js

// Sintaxe básica  

(num1, num2) => num1 + num2; 
```
```js

let soma = (num1, num2) => num1 + num2;

console.log(c(8, 10));  // Retorna: 18
```

&nbsp;    
Ou, alternativamente:  
```js

(num1, num2) => {
  return num1 + num2;
};
```
```js

let resultado = (num1, num2) => {
  let operacao;
  if (num1 >= 5) {
    operacao = num1 + num2;
  } else {
    operacao = num1 * num2;
  }
  return operacao;
}

console.log(resultado(4, 10));  // Retorna: 40
```

&nbsp;  

:arrow_forward: **Exercício:** Escreva um algoritmo que leia dois números e faça as operações de soma, subtração, multiplicação e divisão. Devem ser usadas arrow functions para isso.   

```js

// As arrow functions
let soma = (num1,num2) => num1 + num2;
let subtracao = (num1,num2) => num1 - num2;
let multiplicacao = (num1,num2) => num1 * num2;
let divisao = (num1,num2) => num1 / num2;

// O programa principal
let num1 = parseInt(prompt('Por favor, digite o primeiro número:')); 
let num2 = parseInt(prompt('Digite o segundo número:')); 

console.log('Resultado das operações');
console.log(`Adição: ${num1} + ${num2} = ${soma(num1,num2)}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtracao(num1,num2)}`);
console.log(`Multiplicação: ${num1} x ${num2} = ${multiplicacao(num1,num2)}`);
console.log(`Divisão: ${num1} / ${num2} = ${divisao(num1,num2)}`);

/* Retorna:
 Por favor, digite o primeiro número: // Input: 50
 Digite o segundo número: // Input: 10
 Resultado das operações
 Adição: 50 + 10 = 60
 Subtração: 50 - 10 = 40
 Multiplicação: 50 x 10 = 500
 Divisão: 50 / 10 = 5
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>