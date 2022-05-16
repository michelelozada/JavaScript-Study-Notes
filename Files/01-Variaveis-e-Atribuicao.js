/*
 *  Variáveis e atribuição de valores
 *  Repositório: Lógica de Programação e Algoritmos em JavaScript
 *  GitHub: @michelelozada
 */


// 1.1 - let 
let operacao = 'soma';
let numero1 = 10;
let numero2 = 20;
console.log (`A operação de ${operacao} de ${numero1} com ${numero2} resulta em ${numero1 + numero2}.`);
// Output: A operação de soma de 10 com 20 resulta em 30.



// 1.2 - Atribuindo um novo valor à variável
numero1 = 15;
console.log (`Repare que agora a variável número1 acabou de assumir o valor ${numero1}!`);
console.log (`Update: O resultado da operação de ${operacao} de ${numero1} com ${numero2} resulta em ${numero1 + numero2}.`);
/* Output
Repare que agora a variável número1 acabou de assumir o valor 15!
Update: O resultado da operação de soma de 15 com 20 resulta em 35.
*/


		

// 2.1 - Inicialização de variável com const
const registro_infantil = {
	nome: 'Lucas',
	data: '30/03/2021',
	idade: 3,
	peso: 12.25,
	altura: 90.6
}

console.log('Nome:', registro_infantil.nome);
console.log('Idade:', registro_infantil.idade,'anos',);
console.log('Peso:', registro_infantil.peso,'kg');
console.log('Altura:', registro_infantil.altura,'cm');
console.log('Aferido em:', registro_infantil.data);

/* Output
Nome: Lucas
Idade: 3 anos
Peso: 12.25 kg
Altura: 90.6 cm
Aferido em: 30/03/2021
*/


// 2.2 - Alterando o valor das propriedades do objeto registro_infantil
registro_infantil.idade = 4
registro_infantil.peso = 13.65
registro_infantil.altura = 97.5 
registro_infantil.data = '30/03/2022'

/* Output após nova impressão
Nome: Lucas
Idade: 4 anos
Peso: 13.65 kg
Altura: 97.5 cm
Aferido em: 30/03/2022
*/




// 3 - var
var nome = "Enzo"
var sobrenome = "Lemos"
var idade = 17
var aprovacao = true
var media = 8.7
var notas = [10.0,8.5,7.2,9.0]
var aptidoes =['Matemática','Química','Física']

console.log(`Registro estudantil:
	Aluno: ${nome} ${sobrenome}
	Idade: ${idade} anos
	Aprovação: ${aprovacao}
	Média geral obtida: ${media}
	Notas das avaliações: ${notas}
	Aptidões demonstradas em: ${aptidoes}
`);

/* Output
Registro estudantil:
	Aluno: Enzo Lemos
	Idade: 17 anos
	Aprovação: true
	Média geral obtida: 8.7
	Notas das avaliações: 10,8.5,7.2,9
	Aptidões demonstradas em: Matemática,Química,Física
*/