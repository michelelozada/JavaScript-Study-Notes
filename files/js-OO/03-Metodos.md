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

sacar(valor) {
  if (this.#saldo >= valor) {
    this.#saldo -= valor;
    console.log("Saque realizado com sucesso!");
  } else {
    console.log("Não foi possível realizar esta operação (saldo insuficiente)");
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

sacar(valor) {
  if (this.#saldo >= valor) {
    this.#saldo -= valor;
   return valor;
  } 
}

const valorSacado = contaCorrente1.sacar(500);
```
```js

// Criando o método depositar, considerando primeiro a ação que não desejo (early return) 

depositar(valor) {
  if (valor <= 0) {
    console.log("Não foi possível realizar esta operação (valor de depósito insuficiente)");
    return;
  }
  this.#saldo += valor;
}
```

&nbsp;   

**A palavra-chave `this`**  
&nbsp; 

É declarada dentro de métodos de classe, sendo que durante a execução do código, fará referência 
ao objeto da classe atrelado ao método que foi chamado.  

&nbsp; 

```js

class Conta {
  constructor(numero, agencia) {
  this.numero = numero;
  this.agencia = agencia;
		
  identificaConta() {
    console.log('O número desta conta é ' + this.numero + ' e está atrelada à agência nº ' + this.agência);
  }
}

const conta1 = new Conta(1001, 374);
conta1.identificaConta();
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>