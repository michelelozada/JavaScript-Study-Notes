> **Classes e Métodos Abstratos**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Classes Abstratas**  
&nbsp;  

- São classes feitas para não serem instanciadas. Ou seja, são criadas basicamente para serem 
herdadas por outras classes.    
&nbsp;  

- Portanto, sua função é definir comportamentos comuns que as classes-filhas irão herdar.  
&nbsp;  

- Como, diferente de outras linguagens, não existe uma sintaxe própria do JavaSript para a criação 
de classes abstratas, é necessário que isso seja feito manualmente, através do lançamento de um erro.  
&nbsp;  

```js

class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error('Você não deveria instanciar um objeto do tipo conta (é uma classe abstrata!)');
    }
    this.#saldo = saldoInicial;
    this.#cliente = cliente;
    this.#agencia = agencia;
  }
}	

const conta = new Conta(0, cliente1, 1001);

/* O método construtor guarda o nome da classe que estamos querendo instanciar dentro dele. Quando é feita a igualdade,
é com esse nome que ele está sendo comparado. */
```

&nbsp;  

**Métodos abstratos**
&nbsp;  

- São métodos feitos não para serem chamados diretamente, mas sim para serem obrigatoriamente 
herdados e sobrescritos por suas classes-filhas.  
&nbsp;  

- São úteis ao garantir que que as classes-fihas seguirão a estrutura definida na classe-pai, no 
caso com da existência desse método com tal nome e parâmetros, porém implementados com as suas 
próprias lógicas.  
&nbsp;  

- Como, diferente de outras linguagens, não existe uma sintaxe própria do JavaSript para a criação 
de métodos abstratos, é necessário que isso seja feito manualmente, através do lançamento de um erro. 
&nbsp;  

```js
class Conta {
  sacar(valor) {
    throw new Error ("O método sacar é abstrato. Precisa ser implementado na classe-filha.")
  }	
}
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>