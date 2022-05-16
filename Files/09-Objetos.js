/*
 *  Objetos em JavaScript
 *  Repositório: Lógica de Programação e Algoritmos em JavaScript
 *  GitHub: @michelelozada
 */


//1 - Declarando o objeto literal livro
const livro = { 
	titulo: 'O Poder do Hábito', 
	autor: 'Charles Duhigg',
	traducao: 'Rafael Mantovani',
	categoria: 'Autoajuda',
	'data de lancamento': '24/09/2021',
	paginas: 408, 
	noEstoque: true,
	preco: 46.00,
	status(){
		console.log('Em alta...');
	},
};


// 2 - Acessando as propriedades e função do objeto
console.log(livro.titulo); // 1ª maneira - notação de ponto. Retorna: O Poder do Hábito
console.log(livro['autor']); // 2ª maneira - notação de array. Retorna: Charles Duhigg
console.log(livro['data de lancamento']); // Obrigatório aqui notação de array. Retorna: 24/09/2012
livro.status(); // Acesso à uma função. Retorna: Em alta...


// 3.1 - Adicionando novas propriedades ao objeto
livro.acabamento = 'Brochura'; // 1ª maneira
livro['editora'] = 'Objetiva'; // 2ª maneira

// 3.2- Alterando valores de propriedades do objeto
livro.noEstoque = false;
livro.preco = 58.50;

// 3.3- Deletando propriedades do objeto
delete livro.traducao;
delete livro.categoria;
console.log(livro)
/*
{
	titulo: 'O Poder do Hábito',
	autor: 'Charles Duhigg',
	'data de lancamento': '24/09/2021',
	paginas: 408,
	noEstoque: false,
	preco: 58.5,
	status: [Function: status],
	acabamento: 'Brochura',
	editora: 'Objetiva'
}
*/


// 4 - Verificando se as propriedades 'paginas' e 'peso' existem no objeto
console.log('paginas' in livro) // Retorna: true
console.log('peso' in livro) // Retorna: false


// 5 - Exibindo separadamente as chaves e valores do objeto livro
const chaves = Object.keys(livro)
console.log(chaves)
const valores = Object.values(livro)
console.log(valores)
/* Retorna: 
[
	'titulo', 
	'autor', 
	'data de lancamento', 
	'paginas', 
	'noEstoque', 
	'preco', 
	'status', 
	'acabamento', 
	'editora'
]
[
	'O Poder do Hábito', 
	'Charles Duhigg', 
	'24/09/2021', 
	408, 
	false, 
	58.5, 
	[Function: status],
	'Brochura', 
	'Objetiva'
]
*/