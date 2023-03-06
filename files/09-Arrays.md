> **Arrays**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    
**Array**  
- É uma coleção de elementos que possuem/podem ser acessados através de um índice.  

&nbsp;  

**Declarando um array:**    
```js
  
const nomes = new Array (
    `Huguinho`,
    `Zezinho`,
    `Luisinho`
);
```

&nbsp;    
*Obs: Quando um número é declarado dentro do construtor, é gerado um array com 'espaços de memória' para seus itens*  
```js
  
const nomes = new Array(3)
```` 

&nbsp;    

**Outra forma alternativa de declarar um array:**  
```js
  
const nomes = [`Huguinho`, `Zezinho`, `Luisinho`];
```

&nbsp; 

**Para acessar elementos específicos do array acima:**  
```js

console.log(nomes[0]); // Retorna: Huguinho

console.log(nomes[1]); // Retorna: Zezinho

console.log(nomes[1], nomes[2]); // Retorna: Zezinho Luisinho
```

&nbsp; 

**Arrays dentro de arrays:**  
```js

const arrayExemplo = new Array(1, new Array(2,4,6),new Array(3,6,8), 9);
```

```js

const arrayExemplo2 = [1, [2,4,6], [3, 6,8], 9];
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>