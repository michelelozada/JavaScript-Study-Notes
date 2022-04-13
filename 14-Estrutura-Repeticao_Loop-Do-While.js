/* Escreva um algoritmo que solicite leitura de um número de 1 a 10. Quando for digitado o número 7 ou se 
forem utilizadas pelo usuário suas três chances, o programa deve ser encerrado; caso contrário, deve continuar 
aparecendo a solicitação de leitura do número. */

let escolhaDoUsuario = 0;
let escolhaDoSistema = 7;
let tentativa = 0;

do {
	escolhaDoUsuario = prompt('Por favor, escolha um número de 1 a 10:'); 
	tentativa++
	console.log('Tentativa '+ tentativa + ' de 3: Você digitou o número ' + escolhaDoUsuario);
	if (escolhaDoUsuario == escolhaDoSistema){
		console.log('> Parabéns, você acertou!');
	}else{
		console.log('> Não é este o número...');
	}
}
while (escolhaDoUsuario != escolhaDoSistema && tentativa < 3);
console.log('(Programa finalizado...)')

/* 
Output # 1:
Por favor, escolha um número de 1 a 10: // Input: 5
Tentativa 1 de 3: Você digitou o número 5
> Não é este o número...
Por favor, escolha um número de 1 a 10: // Input: 6
Tentativa 2 de 3: Você digitou o número 6
> Não é este o número...
Por favor, escolha um número de 1 a 10: // Input: 9
Tentativa 3 de 3: Você digitou o número 9
> Não é este o número...
(Programa finalizado...)

Output # 2:
Por favor, escolha um número de 1 a 10: // Input: 9
Tentativa 1 de 3: Você digitou o número 9
> Não é este o número...
Por favor, escolha um número de 1 a 10: // Input: 7
Tentativa 2 de 3: Você digitou o número 7
> Parabéns, você acertou!
(Programa finalizado...)
*/	