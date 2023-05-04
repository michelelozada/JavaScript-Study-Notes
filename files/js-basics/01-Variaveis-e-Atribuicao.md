> **Variáveis e atribuição de valores**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**1 - Escopo**  
A visibilidade das variáveis depende de onde uma variável é declarada. O escopo pode ser:  
- Global  
- Local 

&nbsp;  

Em JavaScript, a declaração de uma variável está relacionada ao seu **escopo**, podendo ser:

&nbsp;   

**2.1 - Declaração `let`**  
Aqui a variável é de escopo de bloco, ou seja, pode ser acessada apenas neste escopo, não podendo ser "enxergada" fora dele.      
```js

function minhaFuncao() {
   let exemploLet = 2;
   console.log(exemploLet); 
}

minhaFuncao();  // Retorno: 2
console.log(exemploLet);  // Retorna: *exemploLet is not defined*
```

&nbsp;   

**2.2 - Declaração `const`**  
Aqui a variável é de escopo de bloco, sendo que uma vez atribuído valor a ela, este não pode ser redefinido.      
```js

const exemploConst = 5;
exemploConst++;  // Retorna: *assignment to constant variable*
```

&nbsp;   

Já no caso de arrays e objetos, const pode ter seu valor modificado. Porém a declaração const num array ou objeto determina que não é possível que o tipo de variável se altere (ou seja, uma vez declarado assim, eles sempre serão um array ou um objeto).        
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
*Alterando o valor das propriedades do objeto registro_infantil, um ano depois*  

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

**2.3 - Declaração `var`**  
Aqui a variável é de escopo global. Justamente por isso e devido também à possibilidade de uma eventual (e acidental!) sobreposição de valores, essa declaração é encontrada hoje em dia apenas em sistemas legados.  
```js

function minhaFuncao() {
  var variavelVar = 3;
  console.log(variavelVar); 
}

var variavelVar = 4;

minhaFuncao(); // Retorna: 3
console.log(variavelVar); // Retorna: 4
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>