> **Estrutura de decisão - Switch Case**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
 
**Exercício:**  Escreva um algoritmo que leia dois números e faça as operações de soma, subtração, multiplicação e divisão.  
Para que o usuário escolha a operação desejada, crie um menu com as 4 opções, utilizando a estrutura `switch case`.

```js

// As arrow functions para os cálculos
let soma = (num1, num2) => num1 + num2;
let subtracao = (num1, num2) => num1 - num2;
let multiplicacao = (num1, num2) => num1 * num2;
let divisao = (num1, num2) => num1 / num2;

// O programa principal
console.log(`
	Menu de calculadora:
	- Digite 1 para somar 
	- Digite 2 para subtrair
	- Digite 3 para multiplicar
	- Digite 4 para dividir
`);
let opcao = parseInt(prompt('Qual operação deseja realizar?'));
let num1 = parseInt(prompt('Agora, digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));

switch (opcao) {
    case 1:
        console.log(`O resultado da soma de ${num1} com ${num2} é ${soma(num1, num2)}`);
        break;
    case 2:
        console.log(`O resultado da subtração de ${num1} menos ${num2} é ${subtracao(num1, num2)}`);
        break;
    case 3:
        console.log(`O resultado da multiplicação de ${num1} por ${num2} é ${multiplicacao(num1, num2)}`);
        break;
    case 4:
        console.log(`O resultado da divisão de ${num1} por ${num2} é ${divisao(num1, num2)}`);
        break;
    default:
        console.log(`Você escolheu uma opção inválida, por isso nenhuma operação foi realizada!`)
        break;
}


/* Alguns outputs possíveis:
 Qual operação deseja realizar? // Input: 1
 Agora, digite o primeiro número: // Input: 10
 Digite o segundo número: // Input: 20
 Retorna: O resultado da soma de 10 com 20 é 30

 Qual operação deseja realizar? // Input: 3
 Agora, digite o primeiro número: // Input: 5
 Digite o segundo número: // Input: 9
 Retorna: O resultado da multiplicação de 5 por 9 é 45

 Qual operação deseja realizar? // Input: 7
 Agora, digite o primeiro número: // Input: 1
 Digite o segundo número: // Input: 3
 Retorna: Você escolheu uma opção inválida, por isso nenhuma operação foi realizada!
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>