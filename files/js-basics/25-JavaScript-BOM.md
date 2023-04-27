> **JavaScript BOM**  
> Repositório: JavaScript - Notas de estudo  
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**BOM (aka Browser Object Method)**  
Objetos relativos à navegação web   
  - No primeiro nível está o objeto window  
	- No segundo nível estão os objetos: document, screen, location, history, navigator e frames  

&nbsp; 

**1 - Método prompt()**  
\- Solicita e captura entrada de texto feita pelo usuário   
\- Retorna o que foi digitado como uma string  
\- Portanto, se o intuito for ler um número inteiro ou decimal fornecidos pelo método **`prompt()`**, deve-se converter o valor digitado através de **`parseInt()`** ou **`parseFloat()`**, respectivamente  
     
&nbsp;     

:arrow_forward: **Exemplo:** *Escreva um algoritmo que solicite dados do usuário para cadastramento de um produto*
```html

<html>
	<head>
		<meta charset="UTF-8">
	</head>
	<body>
		<h1>Ficha do produto</h1>
		<script>
			let nome = prompt("Qual o seu nome?", "Digite apenas seu primeiro nome");
			alert(`Olá, ${nome}! Seja bem-vindo(a) ao sistema.`)
			
			// Recebendo um dado do tipo string
			let nomeProduto = prompt('Por favor, qual produto você deseja cadastrar? '); 
			
			// Recebendo um dado do tipo int 
			let quantidadeProduto = parseInt(prompt('Qual a quantidade desse produto em estoque? '));
			
			// Recebendo um dado do tipo float 
			let precoProduto = parseFloat(prompt('Qual o preço de venda do produto? ')).toFixed(2); 
			
			// Impressão dos dados
			document.write("- Nome do produto: " + nomeProduto + "<br>");
			document.write("- Quantidade em estoque: " + quantidadeProduto + " unidades<br>");
			document.write("- Preço de venda do produto: R$ " + precoProduto + "<br>");
		</script>
	</body>
</html>
```

&nbsp;

**2 - Location**  

```js

window.location.href = “endereco-do-arquivo-aqui”;
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>