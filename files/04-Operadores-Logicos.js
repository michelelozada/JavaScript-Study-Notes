/*
 *  Operadores lógicos
 *  Repositório: JavaScript - Notas de estudo
 *  GitHub: @michelelozada
 */

// 1 - Operador lógico AND
let hora = 12;
if(hora >= 10 && hora <= 16){
    console.log('Horário: ' + hora + ' horas. Permitir acesso aos clientes: o banco está aberto.');
}else{
    console.log('Horário: ' + hora + ' hora(s). Restringir acesso aos clientes: o banco está fechado.');
}
// Retorna: Horário: 12 horas. Permitir acesso aos clientes: o banco está aberto.


// 2 - Operador lógico OR
let horario = 12;
let diaUtil = false;
if(horario < 10 || horario > 16 || diaUtil == false){
    console.log('O banco está fechado agora. Expediente bancário acontece apenas das 10h às 16h dos dias úteis.');
}else{
    console.log('O banco está aberto agora.');
}
// Retorna: O banco está fechado agora. Expediente bancário acontece apenas das 10h às 16h dos dias úteis.


// 3 - Operador lógico NOT	
let gestante = true;
if (!gestante){
	console.log('Prezado cliente, você deverá pegar a senha padrão para atendimento.');
}else{
	console.log('Prezada gestante, sua senha de atendimento será diferenciada e seu atendimento será prioritário.');
}
//Retorna: Prezada gestante, sua senha de atendimento será diferenciada e seu atendimento será prioritário.


// 4 - Operador lógico NOT, com dupla negação para conversão em valor booleano real
let saldoCliente = 3000.00;
if(!!saldoCliente){ 
	console.log('Conta poupança do cliente consultado possui valor depositado.');
}else{
	console.log('Conta poupança do cliente consultado não possui nenhum valor depositado.');
}
/* Outputs possíveis:
(para exemplo acima)
Retorna: Conta poupança do cliente consultado possui valor depositado.

let saldoCliente = 0;
Retorna: Conta poupança do cliente consultado não possui nenhum valor depositado.
*/