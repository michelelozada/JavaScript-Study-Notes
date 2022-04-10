const frase = 'Só sei que nada sei, e o fato de saber isso, me coloca em vantagem sobre aqueles que acham que sabem alguma coisa.';
const autor = 'sócrates';
const ocupacao = 'FILÓSOFO ATENIENSE';

// Informe quantos caracteres tem a string frase
console.log(frase.length) // Retorna: 114

// Transforme as strings autor e ocupacao em maiúscula e minúscula, respectivamente
const autor2 = autor.toUpperCase()
const ocupacao2 = ocupacao.toLowerCase()
console.log(autor2) // Retorna: SÓCRATES
console.log(ocupacao2) // Retorna: filósofo ateniense

// Localize as palavras 'sei' e 'compreendo' na string frase
console.log(frase.indexOf('sei')) // Retorna: 3 (a primeira ocorrência da palavra 'sei' se dá no índice de nº 3 da string)
console.log(frase.lastIndexOf('sei')) // Retorna: 16 (a segunda ocorrência da palavra 'sei' se dá no índice de nº 16 da string)
console.log(frase.indexOf('compreendo')) // Retorna: -1 (indica que não foi encontrada esta palavra na string)

// Extraia da string frase a 'versão compacta' mais conhecida desta citação
const fraseRedux = frase.slice(0,19)
console.log(fraseRedux) // Retorna: Só sei que nada sei

// Imprima a string fraseRedux, sendo uma palavra por linha 
const array = fraseRedux.split(' ')
for (i in array){
    console.log(array[i])
};
/* Retorna:
Só
sei
que
nada
sei
*/

// Substitua a identificação 'filósofo ateniense' por 'pensador grego'
const ocupacao3 = ocupacao2.replace('filósofo','pensador').replace('ateniense','grego')
console.log(ocupacao3) // Retorna: pensador grego

// Informe qual o caractere que está no índice 9 da string ocupacao3 
console.log(ocupacao3.charAt(9)) //Retorna: g

// Por fim, realize a concatenação das strings para impressão da citação e autor
final = frase.concat(' - ',autor2,' (',ocupacao3,')');
console.log(final)
// Retorna: Só sei que nada sei, e o fato de saber isso, me coloca em vantagem sobre aqueles que acham que sabem alguma coisa. - SÓCRATES (pensador grego)