console.log('Qual a lista de produtos para eu comprar hoje na feira?')
let hortifrutti = ['mamão', 'morango','banana','alface','tomate']
let i = hortifrutti.length;
for(let i = 0; i < hortifrutti.length; i++){
    console.log('- ' + hortifrutti[i])
}
console.log('Ou seja, são '+ hortifrutti.length + ' itens ao todo.')

/* Retorna:
Qual a lista de produtos para eu comprar hoje na feira?
- mamão
- morango
- banana
- alface
- tomate
Ou seja, são 5 itens ao todo.
*/