> **Trabalhando com propriedades**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
Existem propriedades do JavaScript que, atuando em conjunto com os métodos, ajudam a acessar e modificar o conteúdo de elementos HTML. 
Algumas delas são:

&nbsp;   

- **Propriedade `textContent`**  
Obtém o conteúdo textual de text-nodes (elementos que exibem dados, p. ex.,  `<p>`, `<h1>`, `<a>`, `<div>`, `<span>`), sendo que ss tags HTML não são retornadas também.  
```html

<p class="marca">Volkswagen</p>
```
```js

let palavra = document.querySelector('.marca').textContent;
console.log(palavra)

// Retorna: Volkswagen 
```

&nbsp;   

- **Propriedade `innerHTML`**  
Obtém o conteúdo textual de elementos, incluindo a sua estrutura (formatações e tags HTML).  

```html

<p id="frase"><em>Volkswagen</em> <br> é uma fabricante alemã de veículos.</p> 
```
```js

let frase = document.querySelector('#frase').innerHTML;
console.log(frase)

// Retorna: <em>Volkswagen</em> <br> é uma fabricante alemã de veículos.
```

&nbsp;  

- **Propriedade `value`**  
Obtém o valor de elemento de formulário, ou seja, aqueles que recebem entrada de dados, como o `input` ou o `textarea`.  

```html

<input type="text" class="valor" value="Valor do input">
```
```js

let valor = document.querySelector('.valor').value;
console.log(valor)

// Retorna: Valor do input
```

&nbsp; 

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>