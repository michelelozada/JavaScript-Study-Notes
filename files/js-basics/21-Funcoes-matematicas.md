> **Funções Matemáticas**  
> Repositório: JavaScript - Notas de estudo  
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
**Objeto `Math`**    
Na linguagem JavaScript, realiza operações matemáticas, sendo que alguns de seus métodos estão relacionados abaixo.  

&nbsp;

**Retornando o valor inteiro arredondado um número: método `Math.round()`**  
```js

let num1 = Math.round(10.45);  
console.log(num1); // Retorna: 10 (números menores que 0.5 => arrendonda para baixo)

let num2 = Math.round(10.5); 
console.log(num2); // Retorna: 11 (números iguais ou maiores que 0.5  => arrenda para cima)
```

&nbsp;  

**Retornando a parte inteira de um número: método `Math.trunc()`**

```js

let num = Math.trunc(10.75);  
console.log(num); // Retorna: 10
```

&nbsp;  

**Retornando um número pseudo-aleatório de 0 a 1: método `Math.random()`**  
```js

let num1 = Math.random(); 
console.log(num1); // Retornou nesta vez: 0.27276881397180563
```
&nbsp;    

**Retornando o valor absoluto de um número: método `Math.abs()`**  
```js

let num1 = -5;
num1 = Math.abs(num1);
console.log(num1); // Retorna: 5
```

&nbsp;
    
**Retornando o valor inteiro de um número arredondado para cima: método `Math.ceil()`**  
```js

let num1 = 5.6;
num1 = Math.ceil(num1);
console.log(num1); // Retorna: 6
			
let num2 = 5.3;
num2 = Math.ceil(num2);
console.log(num2); // Retorna: 6
```

&nbsp;
    
**Retornando o valor inteiro de um número arredondado para baixo: método `Math.floor()`**  
```js

let num1 = 5.6;
num1 = Math.floor(num1); 
console.log(num1); // Retorna: 5
			
let num2 = 5.3;
num2 = Math.floor(num2); 
console.log(num2); // Retorna: 5
```

&nbsp;
    
**Retornando o maior de dois ou mais números: método `Math.max()`**  
```js

let maiorNumero = Math.max(104, 53, 11, 96, 4);
console.log(maiorNumero); // Retorna: 104
```	

&nbsp;    

**Retornando o menor de dois ou mais números: método `Math.min()`**  
```js

let menorNumero = Math.min(104, 53, 11, 96, 4);
console.log(menorNumero); // Retorna: 4
```

&nbsp;    

**Realizando a operação exponencial: método `Math.pow()`**  
```js

let resultado = Math.pow(5,2)
console.log(resultado); // Retorna: 25
```

&nbsp;
    
**Retornando a raiz quadrada de um número: método `Math.sqrt()`**  
```js

let resultado = Math.sqrt(9)
console.log(resultado); // Retorna: 3
```	

&nbsp;    

**Informando o valor da constante pi(π): método `Math.PI`**
```js

console.log('Valor do número pi: ' + Math.PI);
// Retorna: Valor do número pi: 3.141592653589793
```
```js				

// Escreva um programa que retorne o comprimento de uma circunferência de diâmetro de 1,70 m.

function calculaCircunferencia(diametro) {
  let raio = diametro/2;
  return 2 * Math.PI.toFixed(2) * raio;
}
				
console.log('O comprimento desta circunferência é ' + calculaCircunferencia(1.70) + "m"); 
// Retorna: O comprimento desta circunferência é 5.338m
```	

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>