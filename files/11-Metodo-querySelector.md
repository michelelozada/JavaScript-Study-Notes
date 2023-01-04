> **Método querySelector()**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

- É através de **`document.querySelector()`** que se busca um elemento do contexto HTML para que seja manipulado no contexto JavaScript.  
- O parâmetro recebido por este método pode ser o nome da tag que se deseja buscar do contexto JavaScript.  
&nbsp;
     
&nbsp;     
:arrow_forward: **Exemplo:** *Capturar o nome digitado pelo usuário e exibi-lo na tela, ao clique do botão*

```html

<html>
<!DOCTYPE html>
	<head>
	<meta charset="UTF-8">
	</head>
	<body>
		<label>Digite seu nome:</label>
		<input type="text">
		<button>OK</button>
		
		<script>
			let entradaNome = document.querySelector("input");

			function exibirAlerta() {
				alert("Olá, " + entradaNome.value + "!");
			}

			let botaoEnvio = document.querySelector("button");
			// Associando a função exibirAlerta ao evento do clique do botão
			botaoEnvio.onclick = exibirAlerta;
		</script>
	</body>
</html>
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>