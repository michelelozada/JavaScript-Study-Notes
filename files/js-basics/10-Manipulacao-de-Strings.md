> **Manipulação de strings**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Principais métodos para manipulação de strings**  
Método        | Descrição  
:---          | :---
[charAt()](#informe-qual-o-caractere-que-est%C3%A1-no-%C3%ADndice-9-da-string-ocupacao3)| Retorna o caracter existente na posição especificada
[concat()](#por-fim-realize-a-concatenação-das-strings-para-impressão-da-citação-e-do-seu-autor) | Retorna uma string contendo os valores passados como parâmetro
[indexOf()](#localize-as-palavras-sei-e-compreendo-na-string-frase) | Retorna a posição onde começa a primeira string informada
[lastIndexOf()](#localize-as-palavras-sei-e-compreendo-na-string-frase) | Retorna a posição onde começa a última string informada
[replace()](#substitua-a-identificação-filósofo-ateniense-por-pensador-grego) | Substitui uma sequência de caracteres por outra
[slice()](#extraia-da-string-frase-a-versão-compacta-mais-conhecida-desta-citação) | 
[split()](#imprima-a-string-fraseredux-sendo-uma-palavra-por-linha) | 
[toUpperCase()](#transforme-as-strings-autor-e-ocupacao-para-caracteres-maiúsculos-e-minúsculos-respectivamente) | Converte o conteúdo da string para caracteres maiúsculos  
[toLowerCase()](#transforme-as-strings-autor-e-ocupacao-para-caracteres-maiúsculos-e-minúsculos-respectivamente) | Converte o conteúdo da string para caracteres minúsculos  

&nbsp;   

Propriedade   | Descrição  
:---          | :---
[length](#informe-quantos-caracteres-tem-a-string-frase) | Retorna o tamanho da string 

&nbsp;   

#### :arrow_forward: **Variáveis a serem utilizadas nos exemplos abaixo:**  
```js

const frase = "Só sei que nada sei, e o fato de saber isso, me coloca em vantagem sobre aqueles que acham que sabem alguma coisa.";
const autor = "sócrates";
const ocupacao = "FILÓSOFO ATENIENSE";
```

&nbsp;

#### **Informe quantos caracteres tem a string *frase*:**  
```js

console.log(frase.length); // Retorna: 114
```

&nbsp;

#### **Transforme as strings *autor* e *ocupacao* para caracteres maiúsculos e minúsculos, respectivamente**  
```js

const autor2 = autor.toUpperCase();
const ocupacao2 = ocupacao.toLowerCase();
console.log(autor2); // Retorna: SÓCRATES
console.log(ocupacao2); // Retorna: filósofo ateniense
```

&nbsp;

####  **Localize as palavras '*sei*' e '*compreendo*' na string *frase***  
```js

console.log(frase.indexOf('sei')); // Retorna: 3 (a primeira ocorrência da palavra 'sei' se dá no índice de nº 3 da string)
console.log(frase.lastIndexOf('sei')); // Retorna: 16 (a segunda ocorrência da palavra 'sei' se dá no índice de nº 16 da string)
console.log(frase.indexOf('compreendo')); // Retorna: -1 (indica que não foi encontrada esta palavra na string)
```

&nbsp;

#### **Extraia da string *frase* a 'versão compacta' mais conhecida desta citação**
```js

const fraseRedux = frase.slice(0,19);
console.log(fraseRedux); // Retorna: Só sei que nada sei
```

&nbsp;

#### **Imprima a string *fraseRedux*, sendo uma palavra por linha**   
```js

const array = fraseRedux.split(' ');
for (i in array){
    console.log(array[i]);
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

#### **Substitua a identificação '*filósofo ateniense*' por '*pensador grego*'**
```js

const ocupacao3 = ocupacao2.replace('filósofo','pensador').replace('ateniense','grego');
console.log(ocupacao3); // Retorna: pensador grego
```
&nbsp;

#### **Informe qual o caractere que está no índice 9 da string *ocupacao3***   
```js

console.log(ocupacao3.charAt(9)); //Retorna: g
```

&nbsp;

#### **Por fim, realize a concatenação das strings para impressão da citação e do seu autor**  
```js

final = frase.concat(' - ', autor2,' (',ocupacao3,')');
console.log(final);

// Retorna: Só sei que nada sei, e o fato de saber isso, me coloca em vantagem sobre aqueles que acham que sabem alguma coisa. - SÓCRATES (pensador grego)
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>