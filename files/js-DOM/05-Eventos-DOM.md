> **Eventos DOM**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    
**Eventos**   
- São ações que são disparadas quando o usuário ou o navegador manipulam uma página.   
- Ou seja, é ativada uma função quando esta ação for produzida pelo usuário ou pelo navegador.  
- Exemplos de eventos: clicar em um botão, selecionar um input para inserir dados, enviar um formulário, etc.

&nbsp;    

**Tipos de eventos**   
| **Evento**    | **Dispara uma ação quando...** |
| :---          | :---                           |
| onBlur        | é removido o foco do elemento  |
| onChange      | o elemento sofre uma alteração/tem seu valor alterado |
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

// O atributo da tag deve ser o evento que foi determinado
// No valor do atributo vai o que deve acontecer quando o evento for disparado
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
Permite que seja atrelado um manipulador de eventos a um determinado elemento HTML, sendo que esta função será chamada quando um 
determinado evento acontecer.  

```js

// Sintaxe básica
target.addEventListener(event, function, useCapture)

// target: é o elemento HTML a que estará associado este método 
// event: definição de qual é o tipo do evento (click, submit, focus, etc)
// function: qual é a função a ser executada quando o evento for detectado
// useCapture: opcional; por default, seu valor é false. 
```

&nbsp;  

:arrow_forward: **Exemplo:** Criando um botão que exiba uma mensagem no console quando clicado.  
```html

<button id="botao">Clique aqui</button>
```
```js

// Selecionando o elemento HTML que estará atrelado ao evento
let button = document.getElementById('botao');

// Implementando o método para chamada da função ao clique do botão
button.addEventListener('click', function(evento) {
  console.log('O botão acabou de ser clicado!');
});

// Sintaxe alternativa para o bloco acima (utilizando uma arrow function)
button.addEventListener('click', (evento) => {
  console.log('O botão acabou de ser clicado!');
});
```

&nbsp; 

**Método `preventDefault()`**
- Cancela um evento, se ele for cancelável.  
- Dessa forma, o comportamento padrão atrelado a este evento não ocorrerá.  

```js

// sintaxe básica
event.preventDefault();
```
```js

// evitando que um formulário seja enviado, ao clique no botão 'enviar'
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
})
```

&nbsp; 

**Propriedade `target`**  
Retorna o elemento que executou um evento

```js

// sintaxe básica
event.target 
```

&nbsp; 

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>