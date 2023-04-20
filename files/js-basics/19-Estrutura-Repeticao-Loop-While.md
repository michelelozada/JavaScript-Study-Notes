> **Estrutura de repetição - Loop While**    
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
:arrow_forward: **Exemplo 1**
```js

// Variável de loop
let i = 0;

let frutas = ['banana', 'laranja', 'maçã'];
let complemento = [
  'começa com a letra B', 
  'começa com a letra L', 
  'começa com a letra M'
];

// Condição
while(i < frutas.length) {
  console.log('A palavra ' + frutas[i] + ' ' + complemento[i] + '.');    
  // Incrementador
  i++;
}

/* Retorna:
A palavra banana começa com a letra B.
A palavra laranja começa com a letra L.
A palavra maçã começa com a letra M.
*/
```

&nbsp;

:arrow_forward: **Exemplo 2:** Sendo informado um elemento, este deve ser exluído do array abaixo, utilzando a estrutura `while`:
```js

let itemComprado = "MALA";
let produtosDisponiveis = ["Bolsa", "Carteira", "Nécessaire", "Mala"];

let contador = 0; 
while (contador < produtosDisponiveis.length) {
  if (produtosDisponiveis[contador].toLowerCase() == itemComprado.toLowerCase()) {
    produtosDisponiveis.splice(contador, 1);
    break;
  } else {
    contador += 1;
  }
}
console.log(produtosDisponiveis);

// Retorna: [ 'Bolsa', 'Carteira', 'Nécessaire' ]
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>