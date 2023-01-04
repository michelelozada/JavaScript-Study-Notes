> **Funções Matemáticas**  
> Repositório: JavaScript - Notas de estudo  
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
**Objeto `Math`**    
 - Na linguagem JavaScript, realiza operações matemáticas, sendo que alguns de seus métodos estão relacionados abaixo.  
&nbsp;

**Arredondando um número: método `round()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let num1 = Math.round(10.45);  
		document.write(num1); // Retorna 10 (menor que 0.5 -> arrendonda para baixo)
		
		let num2 = Math.round(10.5); 
		document.write(num2); // Retorna 11 (igual ou maior que 0.5 -> arrenda para cima)
	</script>
</html>	
```
&nbsp;
&nbsp;    
**Retornando um número pseudo-aleatório de 0 a 1: método `random()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let num1 = Math.random(); 
		document.write(num1); // Retornou nesta vez: 0.44952320527477396
	</script> 
</html>	
```
&nbsp;
&nbsp;    
**Retornando o valor absoluto de um número: método `abs()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let num1 = -5;
		num1 = Math.abs(num1);
		document.write(num1); // Retorna: 5
	</script>
</html>	
```
&nbsp;
&nbsp;    
**Retornando o valor de um número arredondado para cima: método `ceil()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let num1 = 5.6;
		num1 = Math.ceil(num1);
		document.write(num1); // Retorna: 6
		
		let num2 = 5.3;
		num2 = Math.ceil(num2);
		document.write(num2); // Retorna: 6
	</script>
</html>	
```
&nbsp;
&nbsp;    
**Retornando o valor de um número arredondado para baixo: método `floor()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let num1 = 5.6;
		num1 = Math.floor(num1); 
		document.write(num1); // Retorna: 5
		
		let num2 = 5.3;
		num2 = Math.floor(num2); 
		document.write(num2); // Retorna: 5
	</script>
</html>	
```
&nbsp;
&nbsp;    
**Retornando o maior de dois ou mais números: método `max()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let maiorNumero = Math.max(104, 53, 11, 96, 4);
		document.write(maiorNumero); // Retorna: 104
	</script>
</html>	
```	
&nbsp;
&nbsp;    
**Retornando o menor de dois ou mais números: método `min()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let menorNumero = Math.min(104, 53, 11, 96, 4);
		document.write(menorNumero); // Retorna: 4
	</script>
</html>	
```
&nbsp;
&nbsp;    
**Realizando a operação exponencial: método `pow()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let resultado = Math.pow(5,2)
		document.write(resultado); // Retorna: 25
	</script>
</html>	
```
&nbsp;
&nbsp;    
**Retornando a raiz quadrada de um número: método `sqrt()`**  
```html

<!DOCTYPE html>
<meta charset=“UTF-8”>
	<script>
		let resultado = Math.sqrt(9)
		document.write(resultado); // Retorna: 3
	</script>
</html>	
```	
&nbsp;
&nbsp;    
**Informando o valor da constante pi(π): método `Math.PI`**
```html

<!DOCTYPE html> 
<meta charset=“UTF-8”>
	<script>
		document.write("O valor do número pi: " + Math.PI + "<br>");
		// Retorna: O valor do número pi: 3.141592653589793
			
		// Escreva um programa que retorne o comprimento de uma circunferência de diâmetro de 1,70 m.
		function calcularCircunferencia(diametro) {
			let raio = diametro/2;
			return 2 * Math.PI.toFixed(2) * raio;
		}
			
		document.write("O comprimento desta circunferência é " + calcularCircunferencia(1.70) + " m."); 
		// Retorna: O comprimento desta circunferência é 5.338 m.
	</script>
</html>
```	

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>