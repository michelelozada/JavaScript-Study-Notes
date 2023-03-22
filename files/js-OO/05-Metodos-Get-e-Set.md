> **Métodos get e set**    
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
**Getters e Setters**
&nbsp;  

- Conhecidos como métodos acessores, são responsáveis por proteger atributos/propriedades de uma 
classe, que contenham dados sensíveis ou que necessitem de acesso controlado.  
&nbsp;  

- Portanto, encapsulam, protegem e isolam estas propriedades.   

&nbsp;   

**Método `set()`**  
&nbsp;  

- É um método para acessar, atribuir e/ou modificar valores das propriedades de um objeto.      
&nbsp;  

- Através dele, é possível também incluir regras e restrições para impedir a atribuição de valores 
inválidos/não esperados a determinadas propriedades.    

&nbsp;  

```js

set saldo(valor) {
  this.#saldo = valor;
}
```

&nbsp; 

Método set contendo validações   
```js   

// para que não seja aceito valor menor ou igual a zero

class ContaCorrente {
	set valor(novoValor) {
	  if(novoValor > 0) {
    this.#valor = novoValor;
  }
}
```
```js

// para que só aceite valor proveniente da classe Cliente (e não um número, nome, etc.)

class ContaCorrente {
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
    this.#cliente = novoValor;
  }
}
```

&nbsp; 

**Método `get()`**  
&nbsp;  

Ao ser executado, será retornada a informação guardada em uma dada propriedade deste objeto.  

&nbsp;  

```js 
class ContaCorrente {
  get saldo() {
    return this.#saldo;
  }
}	
```
&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>