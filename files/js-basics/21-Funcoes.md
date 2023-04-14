> **Funções**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Funções**  
- Blocos de códigos que só são executados quando chamados.  
- Funções pode retormar ou não valores.  
- Variáveis declaradas dentro da função só valem dentro da função (escopo local).  
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

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>