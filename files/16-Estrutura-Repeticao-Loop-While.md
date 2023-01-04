> **Estrutura de repetição - Loop While**    
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    
:arrow_forward: **Exemplo 1:** *Definidos um login e senha, criar um programa que permita acesso em até 3 tentativas do usuário*    
```html

<html>
	<head>
		<meta charset="UTF-8">
	</head>
	<body>
		<script>
			let loginValido = "user123";
			let senhaValida = "12345";
			let tentativasPermitidas = 3;
			let tentativa = 1;
			
			while(tentativa <= tentativasPermitidas) {
				let loginDigitado = prompt("Por favor, entre com o seu login: ");
				let senhaDigitada = prompt("Entre com a sua senha: ");
			
				if(loginValido == loginDigitado && senhaValida == senhaDigitada) {
					alert("Login e senha conferem. Seja bem-vindo(a) ao sistema!");
					tentativa = tentativasPermitidas;  
				} 
				else {
					if (tentativa == 3) {
						alert("Você alcançou o número de tentativas permitidas para login no sistema. Caso necessário, contate o administrador.");
					} else {
						alert("Login e senha não conferem. Por gentileza, tente digitá-los novamente. Tentativa(s) restante(s): " + (tentativasPermitidas - tentativa));
					}
				}
				tentativa += 1; 
			}
		</script>
	</body>
</html>
```
&nbsp;
     
&nbsp;   
:arrow_forward: **Exemplo 2:** *Validar um campo para que este aceite apenas números*    
```html

<html>
	<head>
		<meta charset="UTF-8">
	</head>
	<body>
		<script>
			var idade = parseInt(prompt("Digite sua idade"));

			while(isNaN(idade)) {
				idade = parseInt(prompt("Idade inválida. Por favor, digite novamente sua idade"));    
			}

			alert("Idade informada pelo usuário: " + idade + " anos.");
		</script>
	</body>	
</html>
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>
     
