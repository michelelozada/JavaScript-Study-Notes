> **Manipulação de arrays**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    

**1 - O array de exemplo:**  
```js

const osSimpsons = ['Homer','Merge','Bart','Lisa'];
```

&nbsp;  
**2 - Informando quantos elementos há neste array, através do método `length()`**    
```js

console.log(osSimpsons.length); // Retorna: 4
```

&nbsp;  
**3 - Informando qual o conteúdo do índice 3**  
```js

console.log(osSimpsons[3]); // Retorna: Lisa
```

&nbsp;  
**4 - Incluindo mais um elemento à lista**  
```js

osSimpsons[4] = 'Maggie';
console.log(osSimpsons);

// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']
```

&nbsp;  
**5 - Adicionando um novo elemento no fim da lista, através do método `push()`**
```js

osSimpsons.push('Vovô Simpson');
console.log(osSimpsons);

//Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie', 'Vovô Simpson']
```

&nbsp;  
**6 - Retirando o último elemento da lista, através do método `pop()`**  
```js

osSimpsons.pop();
console.log(osSimpsons);

// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']
```

&nbsp;  
**7- Retirando o primeiro elemento da lista, através do método `shift()`**  
```js

osSimpsons.shift();
console.log(osSimpsons);

// Retorna: ['Merge', 'Bart', 'Lisa', 'Maggie']
```

&nbsp;  
**8 - Retornando ao estado anterior da lista, através do método `unshift()`**  
```js

osSimpsons.unshift('Homer');
console.log(osSimpsons);

// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']
```

&nbsp;  
**9 - Criando um novo array de forma que, ao invés de aparecer os nomes, apareça quem é quem dentro da família Simpson.**  
*Observação importante: O nome da Lisa, porém, é o único que deve continuar aparecendo na lista!*
```js

let familia = osSimpsons.map(function(membroFamilia){
	if(membroFamilia === 'Homer'){
		return (membroFamilia = 'Pai')
	}
	if(membroFamilia === 'Merge'){
		return (membroFamilia = 'Mãe')
	}
	if(membroFamilia === 'Bart'){
		return (membroFamilia = 'Irmão mais velho')
	}
	if(membroFamilia === 'Maggie'){
		return (membroFamilia = 'Irmã mais nova')
	}
	else{
		return membroFamilia
	}
})
console.log(familia)

// Retorna: ['Pai', 'Mãe', 'Irmão mais velho', 'Lisa', 'Irmã mais nova']
```

&nbsp;  
**10 - Removendo os itens do array atual (os apelidos) e substituindo-os por novos itens (no caso, os nomes completos), através do método `splice()`** 
```js

osSimpsons.splice(0,5,'Homer Jay Simpson','Marjorie Bouvier Simpson','Bartholomew Simpson','Elizabeth Marie Simpson','Margaret Simpson');
console.log(osSimpsons);

/* Retorna:
[
    'Homer Jay Simpson', 
    'Marjorie Bouvier Simpson', 
    'Bartholomew Simpson', 
    'Elizabeth Marie Simpson', 
    'Margaret Simpson'
] */
```

&nbsp;  
**11 - Apresentando o array com seus itens na ordem inversa, através do método `reverse()`** 
```js

console.log(osSimpsons.reverse());

/* Retorna: 
[
    'Margaret Simpson', 
    'Elizabeth Marie Simpson', 
    'Bartholomew Simpson', 
    'Marjorie Bouvier Simpson', 
    'Homer Jay Simpson'
] */
```

&nbsp;  
**12 - Apresentando o array em ordem alfabética, através do método `sort()`**  
```js

console.log(osSimpsons.sort());

/* Retorna: 
[
    'Bartholomew Simpson', 
    'Elizabeth Marie Simpson', 
    'Homer Jay Simpson', 
    'Margaret Simpson', 
    'Marjorie Bouvier Simpson'
] */
```

&nbsp;  
**13 - Por fim, apresentando uma string gerada a partir do array, através do método `join()`**   
```js

console.log(osSimpsons.join(espacamento = ' - '));

// Retorna: Bartholomew Simpson - Elizabeth Marie Simpson - Homer Jay Simpson - Margaret Simpson - Marjorie Bouvier Simpson
```

&nbsp;  
**14 - O array abaixo é sobre a idade que (estima-se!) os cinco personagens tinham em 1987. Retorne as idade *apenas* das crianças, usando o método `filter()`**  
```js

const idades1987 = [36,34,10,8,1].filter(function(idade){
	return idade < 13
})
console.log(`Idades apenas das crianças: ${idades1987}`);

// Retorna: As idades das crianças: 10,8,1
```

&nbsp;  
**15 - A idade somada de todos os integrantes em 1987 é 89 anos. Crie um algoritmo que chegue a este resultado, através do método `reduce()`**  
```js

const somaIdades = [36,34,10,8,1].reduce(function(soma,idade){
	return soma + idade
});
console.log(`A soma das idades dos cinco integrantes da família tem como resultado ${somaIdades} anos.`);

// Retorna: A soma das idades dos cinco integrantes da família tem como resultado 89 anos.```
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>