> **Manipulação de strings**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp; 

**Exemplo a ser utilizado:**  
```js

const frase = "Só sei que nada sei, e o fato de saber isso, me coloca em vantagem sobre aqueles que acham que sabem alguma coisa.";
const autor = "sócrates";
const ocupacao = "FILÓSOFO ATENIENSE";
```

&nbsp;

**Informe quantos caracteres tem a string *frase*:**  
```js

console.log(frase.length) // Retorna: 114
```

&nbsp;

**Transforme as strings *autor* e *ocupacao* para carcateres maiúsculos e minúsculos, respectivamente**  
```js

const autor2 = autor.toUpperCase()
const ocupacao2 = ocupacao.toLowerCase()
console.log(autor2) // Retorna: SÓCRATES
console.log(ocupacao2) // Retorna: filósofo ateniense
```

&nbsp;

**Localize as palavras '*sei*' e '*compreendo*' na string *frase***  
```js

console.log(frase.indexOf('sei')) // Retorna: 3 (a primeira ocorrência da palavra 'sei' se dá no índice de nº 3 da string)
console.log(frase.lastIndexOf('sei')) // Retorna: 16 (a segunda ocorrência da palavra 'sei' se dá no índice de nº 16 da string)
console.log(frase.indexOf('compreendo')) // Retorna: -1 (indica que não foi encontrada esta palavra na string)
```

&nbsp;

**Extraia da string *frase* a 'versão compacta' mais conhecida desta citação**
```js

const fraseRedux = frase.slice(0,19)
console.log(fraseRedux) // Retorna: Só sei que nada sei
```

&nbsp;

**Imprima a string *fraseRedux*, sendo uma palavra por linha**   
```js

const array = fraseRedux.split(' ')
for (i in array){
    console.log(array[i])
};

/* Retorna:
Só
sei
que
nada
sei
*/
```

&nbsp;

**Substitua a identificação '*filósofo ateniense*' por '*pensador grego*'**
```js

const ocupacao3 = ocupacao2.replace('filósofo','pensador').replace('ateniense','grego')
console.log(ocupacao3) // Retorna: pensador grego
```
&nbsp;

**Informe qual o caractere que está no índice 9 da string *ocupacao3***   
```js

console.log(ocupacao3.charAt(9)) //Retorna: g
```

&nbsp;

**Por fim, realize a concatenação das strings para impressão da citação e do seu autor**  
```js

final = frase.concat(' - ',autor2,' (',ocupacao3,')');
console.log(final)

// Retorna: Só sei que nada sei, e o fato de saber isso, me coloca em vantagem sobre aqueles que acham que sabem alguma coisa. - SÓCRATES (pensador grego)
```

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>