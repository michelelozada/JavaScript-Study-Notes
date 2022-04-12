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