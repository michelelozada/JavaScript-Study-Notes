// 1 - Comando Continue
console.log('Séries que compõem o ensino básico fundamental no Brasil:')
console.log('A - Anos iniciais do ensino fundamental')
for (i = 1; i<6; i++){
	console.log('- '+ i +'º ano do ensino fundamental I');
    continue; 
}
console.log('\nB - Anos finais do ensino fundamental')	
for (i = 6; i<10; i++){
	console.log('- '+ i +'º ano do ensino fundamental II');
    continue; 
}

/* Retorna: 
Séries que compõem o ensino básico fundamental no Brasil:
A - Anos iniciais do ensino fundamental
- 1º ano do ensino fundamental I
- 2º ano do ensino fundamental I
- 3º ano do ensino fundamental I
- 4º ano do ensino fundamental I
- 5º ano do ensino fundamental I
B - Anos finais do ensino fundamental
- 6º ano do ensino fundamental II
- 7º ano do ensino fundamental II
- 8º ano do ensino fundamental II
- 9º ano do ensino fundamental II
*/


// 2 -  Comando Break
let bandasBritPop = ['The Stone Roses', 'Suede', 'Oasis', 'Supergrass', 'The Verve', 'Stereophonics', 'Travis', 'Blur','Pulp','Arctic Monkeys'];
let localizar = 'Blur';

for(let i = 0; i < bandasBritPop.length; i++){
	if(bandasBritPop[i] == localizar){
		console.log('Acabou de ser encontrada a banda ' + localizar +  ' no índice de número ' + i + ' da presente listagem. Encerrando o programa...')
		break;
	}
}
// Retorna: Acabou de ser encontrada a banda Blur no índice de número 7 da presente listagem. Encerrando o programa...