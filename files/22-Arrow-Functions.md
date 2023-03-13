> **Arrow functions**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  

**Exercício:** Escreva um algoritmo que leia dois números e faça as operações de soma, subtração, multiplicação e divisão. Devem ser usadas arrow functions para isso.   

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
console.log(`  Adição: ${num1} + ${num2} = ${soma(num1,num2)}`);
console.log(`  Subtração: ${num1} - ${num2} = ${subtracao(num1,num2)}`);
console.log(`  Multiplicação: ${num1} x ${num2} = ${multiplicacao(num1,num2)}`);
console.log(`  Divisão: ${num1} / ${num2} = ${divisao(num1,num2)}`);

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