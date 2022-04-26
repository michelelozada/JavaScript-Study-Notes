/*
 *  Estrutura de decisão - If Else 
 *  Repositório: Lógica de Programação e Algoritmos em JavaScript
 *  GitHub: @michelelozada
 */



/* Escreva um algoritmo que verifique a validade de um ID e da senha fornecidos por um usuário. 
Caso a entrada do ID e/ou da senha não corespondam ao esperado, o programa deve reportar isso.*/

let login = prompt('Por favor, digite seu ID de usuário:'); 
if(login === 'marialemos84'){
	console.log('Login confere...')
	let password = prompt('Por favor, digite sua senha:'); 
	if (password === 'ML123#'){
		console.log('Bem-vinda ao sistema, Maria!')
	}else{
		console.log('Sua senha não confere. Favor entrar em contato com administrador.')	
	}
}else{
	console.log('Seu login não confere. Favor entrar em contato com administrador.')
}

/* Outputs possíveis:
Por favor, digite seu ID de usuário: marialemos
> Retorna: Seu login não confere. Favor entrar em contato com administrador.

Por favor, digite seu ID de usuário: marialemos84
Por favor, digite sua senha: ml123#
> Retorna: Sua senha não confere. Favor entrar em contato com administrador.

Por favor, digite seu ID de usuário: marialemos84
Por favor, digite sua senha: ML123#
> Retorna: Bem-vinda ao sistema, Maria! */