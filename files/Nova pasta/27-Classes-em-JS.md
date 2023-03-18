> **Classes em JavaScript**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  

**Criando uma classe chamada Massas**
```js

class Massas {
	// declarando o método constructor 
	constructor(nome,preco,quantidade) {  
		this.name = nome; // definindo os atributos e passando os parâmetros
		this.price = preco;
		this.quantity = quantidade;
	}	
	// definindo um método para exibição dos itens que comporão a tabela
	tabelaPrecos() {
		return `Produto: ${this.name} ...... Preço: R$ ${this.price.toFixed(2)} (${this.quantity})`	
	}	
} 
```

**Criando os objetos e definindo valores**  
```js

let lasagna = new Massas('Massa de Lasagna', 33.90, 'rolo de 500g');
let folhada = new Massas('Massa Folhada', 37.90, 'o quilo');
let pastel = new Massas('Massa de Pastel', 33.90, 'o quilo');
let panqueca = new Massas('Massa de Panqueca', 1.35, 'a unidade');
```

**Exibindo os valores das propriedades de um dos produtos (lasagna)**  
```js

console.log(lasagna.name); // Retorna: Massa de Lasagna
console.log(`R$ ${lasagna.price.toFixed(2)}`); // R$ 33.90
console.log(lasagna.quantity); // rolo de 500g
```

**Exibindo os valores das propriedades dos três produtos**  
```js

console.log(lasagna.tabelaPrecos());
console.log(folhada.tabelaPrecos());
console.log(pastel.tabelaPrecos());
console.log(panqueca.tabelaPrecos());

/* Retorna:
  Produto: Massa de Lasagna ...... Preço: R$ 33.90 (rolo de 500g)
  Produto: Massa Folhada ...... Preço: R$ 37.90 (o quilo)
  Produto: Massa de Pastel ...... Preço: R$ 33.90 (o quilo)
  Produto: Massa de Panqueca ...... Preço: R$ 1.35 (a unidade)  */
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>