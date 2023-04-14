> **Estrutura de decisão - If Else**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
 
**Utilizando a estrutura `if else`:**  
```js

let media = 65;
let statusAprovacao = null;

if (media >= 70) {
    statusAprovacao = "Aluno(a) foi aprovado(a) no curso.";
} else {
    statusAprovacao = "Aluno(a) terá de realizar o exame final.";
}
console.log("Status: " + statusAprovacao);

// Retorna: Status: Aluno(a) terá de realizar o exame final.
```

&nbsp;   

**Mesmo exemplo acima, utilizando agora o operador ternário:**  
```js
let media = 85;
let statusAprovacao = null;

statusAprovacao = (media >= 70) ? "Aluno(a) foi aprovado(a) no curso." : "Aluno(a) terá de realizar o exame final.";
console.log("Status: " + statusAprovacao);

// Retorna: Status: Aluno(a) foi aprovado(a) no curso.
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>