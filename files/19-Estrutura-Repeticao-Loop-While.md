> **Estrutura de repetição - Loop While**    
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    
**Ex.1:** Sendo informado um elemento, este deve ser exluído do array abaixo, utilzando a estrutura `while`:
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

// Retorna: [ 'Bolsa', 'Carteira', 'Necessaire' ]
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>
     
