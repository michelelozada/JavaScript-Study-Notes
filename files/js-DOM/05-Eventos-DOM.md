> **Eventos DOM**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
**Eventos**   
&nbsp;   

| **Evento**  | **Executa um código JS quando...** |
| :---        | :---                               |
| onblur      | é removido o foco do elemento |
| onchange    | o elemento perde o foco e tem seu valor mudado |
| onclick     | o elemento é clicado pelo usuário |
| ondbclick   | o elemento é clicado  duas vezes pelo usuário |
| onfocus     | o elemento recebe o foco |
| onload      | o navegador termina de carregar o elemento por completo |
| onmouseout  | o usuário retira o cursor de determinada área do elemento |
| onmouseover | o usuário passa o cursor em determinada área do elemento |
| onselect    | o usuário seleciona um campo de texto | 
| onreset     | o usuário clica no botão para reiniciar um formulário |
| onsubmit    | o usuário clica no botão para enviar um formulário |
&nbsp;   

A partir dos eventos, podem ser programadas ações para serem realizadas pelo programa.  
&nbsp;   

:arrow_forward: **Exemplo:** *Capturar o nome digitado pelo usuário e exibi-lo na tela, ao clique do botão*

```html

<label>Digite seu nome:</label>
<input type="text" id="nome">
<button id="btn-envia"n>OK</button>
```
```js

function exibirAlerta() {
  // Para selecionar o valor de um input - e não o próprio input - deve-se usar a propriedade value
  alert("Olá, " + document.querySelector('#nome').value + "!");
}

let botaoEnvio = document.querySelector("#btn-envia");

// Associando a função exibirAlerta ao evento do clique do botão
botaoEnvio.onclick = exibirAlerta;
```

&nbsp; 

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>