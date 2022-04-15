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


/* 9 - Crie um novo array de forma que, ao invés de aparecer os nomes, apareça quem é quem dentro da família Simpson.
Observação importante: O nome da Lisa, porém, é o único que deve continuar aparecendo! */
let familia = osSimpsons.map(function(membroFamilia){
	if(membroFamilia === 'Homer'){
		return (membroFamilia = 'Pai')
	}
	if(membroFamilia === 'Merge'){
		return (membroFamilia = 'Mãe')
	}
	if(membroFamilia === 'Bart'){
		return (membroFamilia = 'Irmão mais velho')
	}
	if(membroFamilia === 'Maggie'){
		return (membroFamilia = 'Irmã mais nova')
	}
	else{
		return membroFamilia
	}
})
console.log(familia)
// Retorna: ['Pai', 'Mãe', 'Irmão mais velho', 'Lisa', 'Irmã mais nova']


// 10 - Remova os itens do array atual (com apelidos) e substitura por novos (com nomes completos)
osSimpsons.splice(0,5,'Homer Jay Simpson','Marjorie Bouvier Simpson','Bartholomew Simpson','Elizabeth Marie Simpson','Margaret Simpson');
console.log(osSimpsons);
/* Retorna:
[
    'Homer Jay Simpson', 
    'Marjorie Bouvier Simpson', 
    'Bartholomew Simpson', 
    'Elizabeth Marie Simpson', 
    'Margaret Simpson'
] */


// 11 - Apresente o array com seus itens na ordem inversa
console.log(osSimpsons.reverse())
/* Retorna: 
[
    'Margaret Simpson', 
    'Elizabeth Marie Simpson', 
    'Bartholomew Simpson', 
    'Marjorie Bouvier Simpson', 
    'Homer Jay Simpson'
] */


// 12 - Apresente o array em ordem alfabética
console.log(osSimpsons.sort())
/* Retorna: 
[
    'Bartholomew Simpson', 
    'Elizabeth Marie Simpson', 
    'Homer Jay Simpson', 
    'Margaret Simpson', 
    'Marjorie Bouvier Simpson'
] */


// 13 - Por fim, apresente uma string gerada a partir do array 
console.log(osSimpsons.join(espacamento = ' - '))
// Retorna: Bartholomew Simpson - Elizabeth Marie Simpson - Homer Jay Simpson - Margaret Simpson - Marjorie Bouvier Simpson


// 14 - O array abaixo é sobre a idade que (estimam!) os cinco personagens tinham em 1987. Retorne as idade *apenas* das crianças.
const idades1987 = [36,34,10,8,1].filter(function(idade){
	return idade < 13
})
console.log(`Idades apenas das crianças: ${idades1987}`)
// Retorna: As idades das crianças: 10,8,1


// 15 - A idade somada de todos os integrantes em 1987 é 89 anos. Crie um algoritmo que chegue a este resultado.
const somaIdades = [36,34,10,8,1].reduce(function(soma,idade){
	return soma + idade
})
console.log(`A soma das idades dos cinco integrantes da família tem como resultado ${somaIdades} anos.`)
// Retorna: A soma das idades dos cinco integrantes da família tem como resultado 89 anos.