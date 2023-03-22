> **Método constructor**    
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

**Método constructor**  
&nbsp; 

- Utilizado para inicializar os atributos, no momento em que uma uma nova instância de classe 
é criada.  
&nbsp;  

- Neste momento se 'diz' ao computador para que reserve um espaço em memória para esta instância a ser criada.  
&nbsp;  

- Através dos parâmetros deste método, são passados os valores dos atributos que o objeto pertencente a 
esta classe deve conter.      
&nbsp;  

- Toda classe possui um método constructor. Portanto, mesmo que ele não seja declarado 
explicitamente, há um método construtor vazio ali. Nestes casos, ao ser criado o objeto da classe, 
note que seus atributos receberão o valor `undefined`, pois não foram atribuídos no construtor.  
&nbsp;  

- Quando trabalhamos com o método construtor, não é necessário que os atributos do objeto sejam
declarados fora do método (isso não se aplica, porém, aos atributos estáticos). 

&nbsp;  

```js

class ContaCorrente {
  constructor(numero, agencia) {
  this.numero = numero;
  this.agencia = agencia;
  }
}

const conta1 = new ContaCorrente(1001, 374);
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>