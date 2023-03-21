> **Operadores de String**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp; 

**1 - Operador de concatenação (`+`)**  
```js

let fullName = 'Leonardo Dias'; 
console.log("Olá," + " " + fullName + ". Seja bem-vindo!"); 

// Retorna: Olá, Leonardo Dias. Seja bem-vindo!
```

&nbsp; 

**2 - Operador de atribuição encurtado (`+=`)**  
```js

let profession = "Desenvolvedor";
profession += (" " + "JavaScript Pleno"); 
console.log(profession) 

// Retorna: Desenvolvedor JavaScript Pleno
```

&nbsp; 

**Alternativa! - Template Literals/Template Strings**  
- Funcionalidade disponível a partir do ES6
- Para concatenação/interpolação de strings com código JS, sem a necessidade do uso do sinal `+`

&nbsp; 

Sintaxe básica  
```js

`Qualquer string aqui e ${dentro das chaves apenas código js}. Se for o caso, seguida por qualquer string aqui.`
```

&nbsp; 

```js

const resposta = 'Template literals';

console log(`Qual funcionalidade devo usar caso deseje concatenar strings e código JS de um modo mais simples? ${resposta}`);

// Retorna: Qual funcionalidade devo usar caso deseje concatenar strings e código JS de um modo mais simples? Template literals
```

&nbsp; 

```js

let nome = "Enzo";
let sobrenome = "Lemos";
let idade = 17;
let aprovacao = true;
let respostaAprovacao = aprovacao ? "aprovado" : "reprovado";
let media = 8.7;
let notas = [10.0, 8.5, 7.2, 9.0];
let aptidoes = ['Matemática', 'Química', 'Física'];

console.log(`Registro estudantil:
 Aluno: ${nome} ${sobrenome}
 Idade: ${idade} anos
 Status: ${respostaAprovacao}
 Média geral obtida: ${media}
 Notas das avaliações: ${notas}
 Aptidões demonstradas em: ${aptidoes}
`);

/* Retorna:
Registro estudantil:
 Aluno: Enzo Lemos
 Idade: 17 anos
 Status: aprovado
 Média geral obtida: 8.7
 Notas das avaliações: 10,8.5,7.2,9
 Aptidões demonstradas em: Matemática,Química,Física
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>