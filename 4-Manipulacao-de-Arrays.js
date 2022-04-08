// 1 - O array de exemplo:
const osSimpsons = ['Homer','Merge','Bart','Lisa'];

// 2 - Informe quantos elementos há neste array
console.log(osSimpsons.length); // Retorna: 4

// 3 - Informe qual o conteúdo do índice 3
console.log(osSimpsons[3]); // Retorna: Lisa

// 4 - Inclua mais um elemento à lista
osSimpsons[4] = 'Maggie';
console.log(osSimpsons);
// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']

// 5 - Inclua um novo elemento no fim da lista
osSimpsons.push('Vovô Simpson');
console.log(osSimpsons);
//Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie', 'Vovô Simpson']

// 6 - Retire o último elemento da lista
osSimpsons.pop();
console.log(osSimpsons);
// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']

// 7 - Retire o primeiro elemento da lista
osSimpsons.shift();
console.log(osSimpsons);
// Retorna: ['Merge', 'Bart', 'Lisa', 'Maggie']

// 8 - Retorne ao estado anterior da lista
osSimpsons.unshift('Homer');
console.log(osSimpsons);
// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']

// 9 - Remova os itens do array atual (com apelidos) e substitura por novos (com nomes completos)
osSimpsons.splice(0,5,'Homer Jay Simpson','Marjorie Bouvier Simpson','Bartholomew Simpson','Elizabeth Marie Simpson','Margaret Simpson');
console.log(osSimpsons);
/* Retorna:
[
    'Homer Jay Simpson', 
    'Marjorie Bouvier Simpson', 
    'Bartholomew Simpson', 
    'Elizabeth Marie Simpson', 
    'Margaret Simpson'
]
*/

// 10 - Apresente o array com seus itens na ordem inversa
console.log(osSimpsons.reverse())
/* Retorna: 
[
    'Margaret Simpson', 
    'Elizabeth Marie Simpson', 
    'Bartholomew Simpson', 
    'Marjorie Bouvier Simpson', 
    'Homer Jay Simpson'
]
*/

// 11 - Apresente o array em ordem alfabética
console.log(osSimpsons.sort())
/* Retorna: 
[
    'Bartholomew Simpson', 
    'Elizabeth Marie Simpson', 
    'Homer Jay Simpson', 
    'Margaret Simpson', 
    'Marjorie Bouvier Simpson'
]
*/

// 12 - Por fim, apresente uma string gerada a partir do array 
console.log(osSimpsons.join(espacamento = ' - '))
// Retorna: Bartholomew Simpson - Elizabeth Marie Simpson - Homer Jay Simpson - Margaret Simpson - Marjorie Bouvier Simpson