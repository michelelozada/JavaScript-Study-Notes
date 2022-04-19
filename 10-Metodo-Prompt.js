//Escreva um algoritmo que solicite dados do usuário para cadastramento de um produto

let nome = prompt("Qual o seu nome?", "Digite apenas seu primeiro nome");
console.log(`Olá, ${nome}. Seja bem-vindo(a) ao sistema.`)

// Recebendo um dado do tipo string
let nomeProduto = prompt('Por favor, qual produto você deseja cadastrar? '); 

// Recebendo um dado do tipo int 
let quantidadeProduto = parseInt(prompt('Qual a quantidade em estoque? '));

// Recebendo um dado do tipo float 
let precoProduto = parseFloat(prompt('Qual o preço de venda do produto? ')).toFixed(2); 

console.log(`
	Ficha do produto
	- Nome: ${nomeProduto} 
	- Quantidade em estoque: ${quantidadeProduto} unidades
	- Preço de venda R$ ${precoProduto} 
`)

/* Retorna:
	Exibe box: Qual o seu nome? | Mensagem do text box: Digite apenas seu primeiro nome // Input realizado: Magda	 
	Imprime: Olá, Magda. Seja bem-vindo(a) ao sistema.
	
	Por favor, qual produto você deseja cadastrar? // Input: Jaqueta Jeans Feminina
	Qual a quantidade em estoque? // Input: 12 
	Qual o preço de venda do produto? // Input:  109.90
	
	Imprime: 
	Ficha do produto 
	- Nome: Jaqueta Jeans Feminina 
	- Quantidade em estoque: 12 unidades
	- Preço de venda R$ 109.90 
*/