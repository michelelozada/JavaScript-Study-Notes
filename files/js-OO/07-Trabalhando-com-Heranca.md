> **Trabalhando com Herança**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Por que utilizar o conceito de herança?**    
- Para centralizar propriedades e métodos em comum em uma única classe.  
- A reutilização deste código existente em outra classe, evita sua repetição desnecessária.  

&nbsp;  

**Classe-pai**  
Classe onde são declaradas todas as propriedades e métodos em comum.        

&nbsp;  

**Classe-filha**   
- Classe que herda todas as propriedades e métodos da classe-pai.  
- Uma vez aplicado o conceito de herança: 
  - Os atributos e métodos protegidos da classe-pai (prefixados com **`_`**), poderão ser acessados diretamente pela classe-filha.
  - Os atributos privados da classe-pai (prefixados com **`#`**), poderão ser acessados diretamente pela classe-filha.
  - Quanto aos métodos privados, só podem ser acessados pela classe em que foram declarados (pelas classes herdeiras, portanto, não!).  
	
&nbsp;  

**Keyword `extends`**    
Define que a classe-filha vai herdar as propriedades e métodos da classe-pai.

```js

import { PessoaFisica } from "./PessoaFisica.js";
import { PessoaJuridica } from "./PessoaJuridica.js";

class Pessoa {
  #nome;
  #endereco;
}
```

```js

// Importando a classe-pai
import { Pessoa } from "./Pessoa.js";

// Estendendo a classe-pai
export class PessoaFisica extends Pessoa {
  #cpf;
}
```
 
```js

import { Pessoa } from "./Pessoa.js";

export class PessoaJuridica extends Pessoa {
  #cnpj;
}
```

&nbsp; 

**Keyword `super`**  
Utilizada em métodos das classes-filhas, faz referência a algum método da classe-pai.    

&nbsp; 

**Super construtor**  
- O método construtor da classe-filha precisa chamar o construtor da classe-pai.    
- Para isso, precisa ser utilizada a keyword `super`, que faz referência ao construtor da classe que estamos estendendo.       
```js

import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    // chama-se aqui o código do construtor da classe-pai
    super(saldoInicial, cliente, agencia);
  }
}
```

&nbsp;
 
**Sobrescrita de métodos**  
&nbsp;

- Se dois métodos tiverem o mesmo nome, estiverem na classe-pai e na classe-filha e não houver a 
keyword `super` no método da classe-filha, o método existente na classe-pai será ignorado, sendo 
usado o método existente na classe-filha.  
&nbsp;

- Nestes casos, diz-se que o método da classe-filha sobrescreveu o método da classe-pai.  
&nbsp;

- A sobrescrita fornece a possibilidade de se especializar comportamentos de determindas classes-filhas, 
pois - ainda que herdem propriedades e métodos da classe-pai - podem ser adicionadas funcionalidades 
específicas nas classes-filhas.  

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>