var hortifrutti = ['mamão', 'morango','banana','alface','tomate']
let i = hortifrutti.length;
console.log('O que tem na lista para eu comprar hoje na feira?')
for(let i = 0; i < hortifrutti.length; i++){
    console.log('- ' + hortifrutti[i])
}
console.log('\nOu seja, são '+ hortifrutti.length + ' itens.')

/*
O que tem na lista para eu comprar hoje na feira?
- mamão
- morango
- banana
- alface
- tomate

Ou seja, são 5 itens.
*/