> **Atributos**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
**Atributos privados**  
&nbsp;  

Em JavaScript, a notação **`#`** antes de um atributo de classe, indica que o mesmo é privado, ou 
seja, que não é possível visualizar seus atributos ou propriedades, fora de sua classe. 

&nbsp;  

```js

class Cliente {
  // Definindo um atributo privado para esta classe
  #cpf;
	
  // Definição do método constructor para criação da instância da classe
  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
  }

  // Definição do método get para acesso à informação do CPF
  get cpf() {
    return this.#cpf;
  }
	}
```

&nbsp; 

**Atributos estáticos**  
&nbsp; 

- São definidos através da inclusão da palavra reservada **`static`** antes do atributo de uma classe.    
&nbsp; 

- Com isso, tais atributos passam a pertencer à classe como um todo, e não um objeto criado por ela.      
&nbsp; 

- Portanto, atributos estáticos nunca são declarados dentro de um método construtor (já que 
estes dizem respeito a um objeto específico, e não a uma classe).     

&nbsp; 

O atributo estático usado no exemplo abaixo foi usado para a criação de um contador que informasse 
o número total de contas criadas. 

&nbsp; 

```js

class ContaCorrente {
  // Criação do atributo estático
  static numeroDeContas = 0;
  agencia;
  #cliente = 0;
  #saldo = 0;
}	

constructor(cliente, agencia) {
  this.cliente = cliente;
  this.agencia = agencia;
	// Utilização do atributo estático 
  ContaCorrente.numeroDeContas += 1;
}

console.log(ContaCorrente.numeroDeContas);
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>