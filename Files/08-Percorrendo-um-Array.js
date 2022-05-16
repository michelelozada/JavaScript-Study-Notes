/*
 *  Percorrendo um array
 *  Repositório: Lógica de Programação e Algoritmos em JavaScript
 *  GitHub: @michelelozada
 */

// 1 - Utilizando a estrutura for

console.log('Quais os itens que eu preciso comprar hoje na feira?')
let hortifrutti = ['mamão', 'morango','banana','alface','tomate']
let i = hortifrutti.length;
for(let i = 0; i < hortifrutti.length; i++){
	console.log('- ' + hortifrutti[i])
}
console.log('Ou seja, são '+ hortifrutti.length + ' itens ao todo.')

/* Retorna:
Quais os itens que eu preciso comprar hoje na feira?
- mamão
- morango
- banana
- alface
- tomate
Ou seja, são 5 itens ao todo. */


// 2 - Exemplo similar ao de acima, mas utilizando agora o método forEach()

let hortifruttiNovo = ['abacate', 'limão','maçã','batata','couve-flor'];
console.log('Quais os itens que eu preciso comprar hoje na feira?');
hortifruttiNovo.forEach(function(item){
	console.log('- ' + item)
})

/* Retorna:
Quais os itens que eu preciso comprar hoje na feira?
- abacate
- limão
- maçã
- batata
- couve-flor */