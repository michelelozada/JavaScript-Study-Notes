> **Método querySelector()**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
**Método `querySelector()`**    
- Sua finalidade é acessar elementos HTML em um documento (**`document`**) para que estes sejam manipulados através do JavaScript.    
- O parâmetro recebido por este método pode ser o nome da tag, sua classe, seu id ou seu data-attribute.  
- Será retornado apenas o primeiro item encontrado.      
- Em conjunto com a  propriedade **`textContent`** é possível acessar o conteúdo de texto de uma tag.  

&nbsp;

```html

<body>
    <h1 class='pt-greeting'>Olá, Mundo!</h1>
		<h2 id='pt-greeting-2'>Como vai você?</h1>
    <script src='script.js'></script>
</body>
```
```js

/* Usando nome do seletor */
document.querySelector('h1').textContent = 'Hello World!';

/* Usando nome da classe */
document.querySelector('.pt-greeting').textContent = 'Hello World!';

/* Usando o id */
document.querySelector('#pt-greeting-2').textContent = 'How are you doing?';
```

&nbsp;     

:arrow_forward: **Exemplo:** *Capturar o nome digitado pelo usuário e exibi-lo na tela, ao clique do botão*

```html

<html>
	<head>
		<meta charset="UTF-8">
	</head>
	<body>
		<label>Digite seu nome:</label>
		<input type="text">
		<button>OK</button>
		<script src='script.js'></script>
	</body>
</html>
```
```js

let entradaNome = document.querySelector("input");

function exibirAlerta() {
	// Para selecionar o valor de um input - e não o próprio input - deve-se usar a propriedade value
	alert("Olá, " + entradaNome.value + "!");
}

let botaoEnvio = document.querySelector("button");

/* Associando a função exibirAlerta ao evento do clique do botão */
botaoEnvio.onclick = exibirAlerta;
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>