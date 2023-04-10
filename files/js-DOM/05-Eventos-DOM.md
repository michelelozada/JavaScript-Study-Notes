> **Eventos DOM**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    
**Eventos**   
- São ações que são disparadas quando o usuário ou o navegador manipulam uma página.   
- Ou seja, é ativada uma função quando uma determinada ação for produzida pelo usuário ou pelo navegador.  
- Clicar em um botão, selecionar um input para inserir dados ou o enviar um formulário são exemplos de eventos.  

&nbsp;    

**Tipos de eventos**   
| **Evento**    | **Dispara uma ação quando...** |
| :---          | :---                           |
| onBlur        | é removido o foco do elemento  |
| onChange      | o elemento perde o foco e tem seu valor alterado |
| onClick       | o elemento é clicado uma vez pelo usuário |
| onDoubleClick | o elemento é clicado duas vezes pelo usuário |
| onFocus       | o elemento recebe o foco |
| onKeyDown     | o usuário pressiona uma tecla do teclado, estando este elemento em foco no momento |
| onKeyUp       | o usuário solta uma tecla do teclado que estava pressionada, estando este elemento em foco no momento |
| onLoad        | o navegador termina de carregar o elemento por completo |
| onMouseOut    | o usuário retira o cursor de determinada área do elemento |
| onMouseOver   | o usuário passa o cursor em determinada área do elemento |
| onSelect      | o usuário seleciona um campo de texto | 
| onReset       | o usuário clica no botão para reiniciar um formulário |
| onSubmit      | o usuário clica no botão para enviar um formulário |

&nbsp;   

**Sintaxe básica para eventos**
```html

<button onclick="alert()">Botão de exemplo</button>

// O atributo da tag deve ser o evento que foi determinado.  
// No valor do atributo vai o que deve acontecer quando o evento for disparado.  
```

&nbsp;   

:arrow_forward: **Exemplo:** Capturar o nome digitado pelo usuário e exibi-lo na tela, ao clique do botão  

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

**Event listener e Event handler**  
- O event listener escuta o evento acontecendo.  
- O event handler é o código que é executado quando o evento é disparado. 

&nbsp;  

**Método `addEventListener()`**  
Associa uma função a determinado elemento.  

```js

elemento.addEventListener(evento, callback, false ou true)

// No primeiro parâmetro: qual o evento
// No segundo parâmetro: qual a função será executada quando o evento ocorrer   
```

&nbsp; 

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>