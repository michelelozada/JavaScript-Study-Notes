> **Outros Operadores Úteis**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Operador `in`**  
\- Utilizado para definir se um objeto possui uma index/key específica. 
\- Retorna um valor booleano.    

```js

frutas = ['pêra', 'uva', 'maçã'];

console.log(2 in frutas); // Retorna: true
console.log(4 in frutas); // Retorna: false
console.log(frutas.length in frutas); // Retorna: false
console.log('uva' in frutas); // Retorna: false
```
```js

const livro = {
  titulo: "Padrões JavaScript", 
  autor: "Stoyan Stefanov",
  editora:"Novatec"
};

console.log('titulo' in livro); // Retorna: true
console.log('autor' in livro); // Retorna: true
console.log('anoPublicacao' in livro); // Retorna: false
```

&nbsp;  

**Operador `instanceof`**   
\- Utilizado para testar se um objeto é de um determinado tipo informado.  
\- Retorna um valor booleano.  
```js

frutas = ['pêra', 'uva', 'maçã'];

console.log(frutas instanceof String); // Retorna: false
console.log(frutas instanceof Number); // Retorna: false
console.log(frutas instanceof Object); // Retorna: true
console.log(frutas instanceof Array); // Retorna: true
```

&nbsp;  

**Operador `typeof`**  
Utilizado para retornar qual o tipo do dado informado.  
```js

let frase = 'Testando o operador typeof...';

console.log(typeof frase);  // Retorna: string
```
```js

const aluno = {
  nome: 'Marcos',
  idade: 16
};

console.log(typeof aluno);  // Retorna: object
```

&nbsp;  

:arrow_forward: **Exemplo:** Testando se um dado informado é do tipo Number
```js

valor = "asdfg";

if(typeof valor === typeof Number()) {
  console.log('Este é um valor numérico.');
} else {
  console.log('Este não é um valor numérico.');
}

// Retorna: Este não é um valor numérico.
```

&nbsp; 

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>