/*
 *  Operadores de string
 *  Repositório: Lógica de Programação e Algoritmos em JavaScript
 *  GitHub: @michelelozada
 */


//1 - Operador de concatenação
let fullName = 'Leonardo Dias'; 
console.log('Olá,' + ' ' + fullName + ', seja bem-vindo!'); 
// Output: Olá, Leonardo Dias, seja bem-vindo!


// 2 - Operador de atribuição encurtado (+=) 
let profissao = "Desenvolvedor";
profissao += (" " + "JavaScript Pleno"); 
console.log(profissao) 
// Retorna: Desenvolvedor JavaScript Pleno


// Alternativa! - Uso das template strings
console.log(`Colaborador ${fullName}
${profissao}`); // para quebra de linha 
/* Retorna:
Colaborador Leonardo Dias
Desenvolvedor JavaScript Pleno
*/
