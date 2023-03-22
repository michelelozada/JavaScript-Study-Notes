> **Operador instanceof**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

**O operador `instanceof`**  
&nbsp;   

- Útil para quando desejamos testar se o objeto passado através de uma variável é realmente instância de uma classe informada.  
&nbsp;   

- Portanto, é uma forma de prevenir a entrada de valores não esperados.  
&nbsp;   

- Retorna um valor de tipo booleano.

&nbsp;   

```js

class Cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }
}
```
```js

class ContaCorrente {
  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
  }	

  set cliente(valor){
    if(valor instanceof Cliente){  
      this.cliente = valor;
  }
}
``` 

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>