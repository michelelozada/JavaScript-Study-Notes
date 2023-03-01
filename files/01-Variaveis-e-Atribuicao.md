> **Variáveis e atribuição de valores**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

Em JavaScript, a declaração de uma variável está relacionada ao seu **escopo**, podendo ser:

&nbsp;   

**1 - Declaração `let`**
- Aqui a variável é de escopo de bloco, ou seja, pode ser acessada apenas neste escopo.  
```js

let operacao = 'soma';
let numero1 = 10;
let numero2 = 20;
console.log (`A operação de ${operacao} de ${numero1} com ${numero2} resulta em ${numero1 + numero2}.`);

// Retorna: A operação de soma de 10 com 20 resulta em 30.
```

&nbsp;   

**2 - Declaração `const`**
- Aqui a variável é de escopo de bloco, ou seja, pode ser acessada apenas neste escopo, sendo que ao ser declarada, seu valor atribuído não pode ser atualizado.      
- No caso de arrays, esta declaração determina que não é possível que o tipo da variável se altere (ou seja, uma vez declarado assim, sempre será um array).      
```js

const registro_infantil = {
	nome: 'Lucas',
	data: '30/03/2021',
	idade: 3,
	peso: 12.25,
	altura: 90.6
}

console.log('Nome:', registro_infantil.nome);
console.log('Idade:', registro_infantil.idade,'anos',);
console.log('Peso:', registro_infantil.peso,'kg');
console.log('Altura:', registro_infantil.altura,'cm');
console.log('Aferido em:', registro_infantil.data);

/* Retorna:
Nome: Lucas
Idade: 3 anos
Peso: 12.25 kg
Altura: 90.6 cm
Aferido em: 30/03/2021
*/
```
*Alterando o valor das propriedades do objeto registro_infantil:*  

```js

registro_infantil.idade = 4
registro_infantil.peso = 13.65
registro_infantil.altura = 97.5 
registro_infantil.data = '30/03/2022'

/* Retorna:
Nome: Lucas
Idade: 4 anos
Peso: 13.65 kg
Altura: 97.5 cm
Aferido em: 30/03/2022
*/
```

&nbsp;   

**3 - Declaração `var`**
- Aqui a variável é de escopo global. Justamente por isso e devido também à possibilidade de uma eventual (e acidental!) sobreposição de valores, essa declaração é normalmente encontrada hoje apenas em sistemas legados.  
```js

var nome = "Enzo"
var sobrenome = "Lemos"
var idade = 17
var aprovacao = true
var media = 8.7
var notas = [10.0,8.5,7.2,9.0]
var aptidoes = ['Matemática','Química','Física']

console.log(`Registro estudantil:
	Aluno: ${nome} ${sobrenome}
	Idade: ${idade} anos
	Aprovação: ${aprovacao}
	Média geral obtida: ${media}
	Notas das avaliações: ${notas}
	Aptidões demonstradas em: ${aptidoes}
`);

/* Retorna:
Registro estudantil:
	Aluno: Enzo Lemos
	Idade: 17 anos
	Aprovação: true
	Média geral obtida: 8.7
	Notas das avaliações: 10,8.5,7.2,9
	Aptidões demonstradas em: Matemática,Química,Física
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>