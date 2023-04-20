> **Classes e Objetos**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Criando uma classe**  
```js

class Cliente {
  // Definindo os atributos desta classe
  nome;
  cpf;
}
```

&nbsp;  

**Criando/Instanciando um objeto cliente a partir da classe Cliente**
```js

new Cliente();
```

&nbsp;  

**Acima foi criado um objeto; porém ele não foi atribuído a uma variável de acesso, diferente do exemplo abaixo**
```js

const cliente1 = new Cliente();
```

&nbsp;  

**Atribuindo valores/populando os campos do objeto criado**  
```js

cliente1.nome = "Enzo";
cliente1.cpf = 11122233309;
```
&nbsp;  

**Imprimindo este objeto**
```js

console.log(cliente1);

// Retorna: Cliente { nome: 'Enzo', cpf: 11122233309 }
```

&nbsp;

:arrow_forward: **Exemplo:** Criar uma classe chamada Fornecedor, instanciá-la e imprimir os objetos gerados.  
```js

class Fornecedor {
	constructor(nomeEmpresa, cnpj) {
		this.nomeEmpresa = nomeEmpresa;
		this.cnpj = cnpj;
	}
}

const fornecedores = [];

const fornecedor1 = new Fornecedor('Companhia XPTO', 47123456000106);
const fornecedor2 = new Fornecedor('Empresa ACME Ltda', 78789456000105);

fornecedores.push(fornecedor1, fornecedor2);

fornecedores.forEach(fornecedor => {
	console.log(fornecedor.nomeEmpresa, "- CNPJ:", fornecedor.cnpj);
});

/* Retorna: 
Companhia XPTO - CNPJ: 47123456000106
Empresa ACME Ltda - CNPJ: 78789456000105
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>