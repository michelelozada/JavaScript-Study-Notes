> **Manipulação de arrays**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    

**Principais métodos para manipulação de arrays:**  
Método | Descrição
:---   | :---
[filter()](#16---o-array-abaixo-%C3%A9-sobre-a-idade-que-estima-se-os-cinco-personagens-tinham-em-1987-retorne-as-idade-apenas-das-crianças-usando-o-método-filter) |
[includes()](#10---verificando-se-os-elementos-abaixo-informados-estão-na-lista-através-do-método-includes) | Verifica se um valor informado está dentro do array
[indexOf()](#5---retornando-o-índice-dos-elementos-informados-através-do-método-indexof) | Retorna o índice da primeira ocorrência de um valor especifico em um array. Se não houver este valor, retorna -1.
[join()](#15---por-fim-apresentando-uma-string-gerada-a-partir-do-array-através-do-método-join) |
[map()](#11---criando-um-novo-array-de-forma-que-ao-invés-de-aparecer-os-nomes-apareça-quem-é-quem-dentro-da-família-simpson-o-nome-da-lisa-porém-é-o-único-que-deve-continuar-aparecendo-na-lista) | Retorna um novo array com base no retorno da função que é passada por parâmetro
[pop()](#7---retirando-o-último-elemento-da-lista-através-do-método-pop) | Remove o último elemento do array. Altera o array original. Retorna o item removido.
[push()](#6---adicionando-um-novo-elemento-no-fim-da-lista-através-do-método-push) | Adiciona o elemento passado na *última posição* do array. Altera o array original.
[reduce()](#17---a-idade-somada-de-todos-os-integrantes-em-1987-é-89-anos-crie-um-algoritmo-que-chegue-a-este-resultado-através-do-método-reduce) |
[reverse()](#13---apresentando-o-array-com-seus-itens-na-ordem-inversa-através-do-método-reverse) | Inverte a ordem do array (último elemento vira primeiro e assim sucessivamente)
[shift()](#8--retirando-o-primeiro-elemento-da-lista-através-do-método-shift) | Retira o primeiro elemento do array. Altera array original e troca índice dos elementos remanescentes.
[sort()](#14---apresentando-o-array-em-ordem-alfabética-através-do-método-sort) | Organiza o array em classificação crescente.
[splice()](#12---removendo-os-itens-do-array-atual-os-apelidos-e-substituindo-os-por-novos-itens-no-caso-os-nomes-completos-através-do-método-splice)   | Altera o conteúdo de um array, excluindo um valor dentro de um array, adicionando (ou não) outro(s) valor(es) ali.
[unshift()](#9---retornando-ao-estado-anterior-da-lista-através-do-método-unshift) | Adiciona o elemento passado na *primeira posição* do array. Altera o array original.  

&nbsp;    

Propriedade | Descrição
:---   | :---
[length](#2---informando-quantos-elementos-há-neste-array-através-da-propriedade-length) | Retorna o o número de elementos em um array

&nbsp;    

#### **1 - O array de exemplo**  
```js

let osSimpsons = ['Homer','Merge','Bart','Lisa'];
```

&nbsp;  

#### **2 - Informando quantos elementos há neste array, através da propriedade `length`**    
```js

console.log(osSimpsons.length); // Retorna: 4
```

&nbsp;  

#### **3 - Informando qual o conteúdo do índice 3**  
```js

console.log(osSimpsons[3]); // Retorna: Lisa
```

&nbsp;  

#### **4 - Incluindo mais um elemento à lista**  
```js

osSimpsons[4] = 'Maggie';
console.log(osSimpsons);

// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']
```

&nbsp;  

#### **5 - Retornando o índice dos elementos informados, através do método `indexOf()`**    

```js

console.log(osSimpsons.indexOf('Homer')); // Retorna: 0
console.log(osSimpsons.indexOf('Bart'));  // Retorna: 2
```

&nbsp;  

#### **6 - Adicionando um novo elemento no fim da lista, através do método `push()`**
```js

osSimpsons.push('Vovô Simpson');
console.log(osSimpsons);

//Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie', 'Vovô Simpson']
```

&nbsp;  

#### **7 - Retirando o último elemento da lista, através do método `pop()`**  
```js

osSimpsons.pop();
console.log(osSimpsons);

// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']
```

&nbsp;  

#### **8- Retirando o primeiro elemento da lista, através do método `shift()`**  
```js

osSimpsons.shift();
console.log(osSimpsons);

// Retorna: ['Merge', 'Bart', 'Lisa', 'Maggie']
```

&nbsp;  

#### **9 - Retornando ao estado anterior da lista, através do método `unshift()`**  
```js

osSimpsons.unshift('Homer');
console.log(osSimpsons);

// Retorna: ['Homer', 'Merge', 'Bart', 'Lisa', 'Maggie']
```

&nbsp;  

#### **10 - Verificando se os elementos abaixo informados estão na lista, através do método `includes()`**  

```js

console.log(osSimpsons.includes('Merge')); // Retorna: true

console.log(osSimpsons.includes('Mr. Burns')); // Retorna: false
```

&nbsp;   

#### **11 - Criando um novo array de forma que, ao invés de aparecer os nomes, apareça quem é quem dentro da família Simpson. O nome da Lisa, porém, é o único que deve continuar aparecendo na lista!**  
```js

let familia = osSimpsons.map(function (membroFamilia) {
  if (membroFamilia === 'Homer') {
    return (membroFamilia = 'Pai')
  }
  if (membroFamilia === 'Merge') {
    return (membroFamilia = 'Mãe')
  }
  if (membroFamilia === 'Bart') {
    return (membroFamilia = 'Irmão mais velho')
  }
  if (membroFamilia === 'Maggie') {
    return (membroFamilia = 'Irmã mais nova')
  }
  else {
    return membroFamilia
  }
});
console.log(familia);

// Retorna: ['Pai', 'Mãe', 'Irmão mais velho', 'Lisa', 'Irmã mais nova']
```

&nbsp;  

#### **12 - Removendo os itens do array atual (os apelidos) e substituindo-os por novos itens (no caso, os nomes completos), através do método `splice()`**   
- *Primeiro parâmetro: índice onde se iniciará a alteração;*   
- *Segundo parâmetro: nº de itens da lista que devem ser removidos, a partir do índice definido anteriormente;*  
- *(opcional) Demais parâmetros: inclusão novos itens (strings) a ser adicionados à lista, onde outros itens foram removidos).*    
```js

// Sintaxe: 

osSimpsons.splice(0,5,'Homer Jay Simpson','Marjorie Bouvier Simpson','Bartholomew Simpson','Elizabeth Marie Simpson','Margaret Simpson');
console.log(osSimpsons);

/* Retorna:
[
  'Homer Jay Simpson', 
  'Marjorie Bouvier Simpson', 
  'Bartholomew Simpson', 
  'Elizabeth Marie Simpson', 
  'Margaret Simpson'
] 
*/
```
&nbsp;  

#### **13 - Apresentando o array com seus itens na ordem inversa, através do método `reverse()`** 
```js

console.log(osSimpsons.reverse());

/* Retorna: 
[
  'Margaret Simpson', 
  'Elizabeth Marie Simpson', 
  'Bartholomew Simpson', 
  'Marjorie Bouvier Simpson', 
  'Homer Jay Simpson'
] 
*/
```
&nbsp;  

#### **14 - Apresentando o array em ordem alfabética, através do método `sort()`**  
```js

console.log(osSimpsons.sort());

/* Retorna: 
[
  'Bartholomew Simpson', 
  'Elizabeth Marie Simpson', 
  'Homer Jay Simpson', 
  'Margaret Simpson', 
  'Marjorie Bouvier Simpson'
] 
*/
```

&nbsp;  

#### **15 - Por fim, apresentando uma string gerada a partir do array, através do método `join()`**   
```js

console.log(osSimpsons.join(espacamento = ' - '));

// Retorna: Bartholomew Simpson - Elizabeth Marie Simpson - Homer Jay Simpson - Margaret Simpson - Marjorie Bouvier Simpson
```

&nbsp;  

#### **16 - O array abaixo é sobre a idade que (estima-se!) os cinco personagens tinham em 1987. Retorne as idade *apenas* das crianças, usando o método `filter()`**  
```js

const idades1987 = [36, 34, 10, 8, 1].filter(function (idade) {
  return idade < 13
});
console.log(`Idades apenas das crianças: ${idades1987}`);

// Retorna: As idades das crianças: 10,8,1
```

&nbsp;  

#### **17 - A idade somada de todos os integrantes em 1987 é 89 anos. Crie um algoritmo que chegue a este resultado, através do método `reduce()`**  
```js

const somaIdades = [36,34,10,8,1].reduce(function(soma,idade){
  return soma + idade
});
console.log(`A soma das idades dos cinco integrantes da família tem como resultado ${somaIdades} anos.`);

// Retorna: A soma das idades dos cinco integrantes da família tem como resultado 89 anos.
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>