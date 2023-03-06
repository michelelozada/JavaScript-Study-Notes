> **Operadores de String**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp; 

**1 - Operador de concatenação (`+`)**  
```js

let fullName = 'Leonardo Dias'; 
console.log("Olá," + " " + fullName + ", seja bem-vindo!"); 

// Retorna: Olá, Leonardo Dias, seja bem-vindo!
```

**2 - Operador de atribuição encurtado (`+=`)**  
```js

let profession = "Desenvolvedor";
profession += (" " + "JavaScript Pleno"); 
console.log(profession) 

// Retorna: Desenvolvedor JavaScript Pleno
```

**Alternativa! - Uso das template strings**  
```js

console.log(`Colaborador ${fullName}
${profession}`); // para quebra de linha 

/* Retorna:
Colaborador Leonardo Dias
Desenvolvedor JavaScript Pleno
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>