> **Métodos**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
**Métodos**  
&nbsp; 

- Definem comportamentos ou ações de um objeto.  
&nbsp; 

- Podem - ou não - receber parâmetros.  
&nbsp; 

- Retornam - ou não - um valor.  

&nbsp; 

```js

class ContaCorrente {
  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      console.log("Saque realizado com sucesso!");
    } else {
      console.log("Não foi possível realizar esta operação (motivo: saldo insuficiente)");
    }
  }
}	

// Chamada do método
cliente1.sacar(500);
```

&nbsp;   

**Comando `return`**  
&nbsp; 

- Utilizado quando é necessário devolver algum valor ao trecho do código que chamou o método.   
&nbsp; 

- Além disso, este comando também interrompe o fluxo de execução de um método.   
&nbsp; 

- Em JS, se não for colocado o `return` ao fim do método, ele irá retornar `undefined`.  

&nbsp; 

```js

class ContaCorrente {
  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
    } 
  }
}	

cliente1.sacar(500);
```
```js

// Criando o método depositar, considerando primeiro a ação que não desejo (early return) 
class ContaCorrente {
  depositar(valor) {
    if (valor <= 0) {
      console.log("Não foi possível realizar esta operação (motivo: valor de depósito insuficiente)");
      return;
    }
    this.#saldo += valor;
  }
}	

cliente1.depositar(1000);
```

&nbsp;   

**A palavra-chave `this`**  
&nbsp; 

É declarada dentro de métodos de classe, sendo que durante a execução do código, fará referência 
ao objeto da classe atrelado ao método que foi chamado.  

&nbsp; 

```js

class ContaCorrente {
  constructor(numero, agencia) {
  this.numero = numero;
  this.agencia = agencia;
		
  identificaConta() {
    console.log('O número desta conta é ' + this.numero + ' e está atrelada à agência nº ' + this.agência);
  }
}

const conta1 = new ContaCorrente(1001, 374);
conta1.identificaConta();
```

&nbsp;

**Métodos estáticos**  
&nbsp; 

- São definidos através da inclusão da palavra reservada **`static`** antes do método.    
&nbsp; 

- Estão vinculados à classe, e não à instância. Ou seja, podem ser executados sem a necessidade de se instanciar um objeto.   
&nbsp; 

- Métodos não estáticos necessitam que um objeto seja instanciado primeiro (i.e. o método é chamado pelo objeto).  
&nbsp; 

- Métodos estáticos são chamados pela classe diretamente (i.e. não precisam de uma instância específica da classe).    
&nbsp; 

*Sintaxe básica*   
```js

class nomeDaClasse {
  static nomenomeDoMetodo() {
    (...)	
  } 
}
nomeDaClasse.nomeDoMetodo();
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>