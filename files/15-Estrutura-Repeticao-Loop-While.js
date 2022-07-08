/*
 *  Estrutura de repetição - Loop While
 *  Repositório: Lógica de Programação e Algoritmos em JavaScript
 *  GitHub: @michelelozada
 */


// Dada uma lista de tarefas, apresente-a de forma sequencial para o usuário: 

let taskDescription = [
	'Relacionar ideias para sessão de fotos',
	'Consultar a pesquisa com os usuários',
	'Melhorar o texto da campanha',
	'Enviar o protótipo para Carla',
	'Solicitar feedback sobre o design'
];
let count = 0;
let taskNumber = 1;

console.log('To-Do List para o dia 13/04/2022:')
while(count < taskDescription.length){
	console.log('   (  ) Task nº ' + taskNumber + ': ' + taskDescription[count])
	count++
	taskNumber ++
}

/* Retorna: 
To-Do List para o dia 13/04/2022:
   (  ) Task nº 1: Relacionar ideias para sessão de fotos
   (  ) Task nº 2: Consultar a pesquisa com os usuários
   (  ) Task nº 3: Melhorar o texto da campanha
   (  ) Task nº 4: Enviar o protótipo para Carla
   (  ) Task nº 5: Solicitar feedback sobre o design
*/