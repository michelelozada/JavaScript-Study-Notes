> **Métodos para percorrer uma lista de nós**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Métodos para percorrer uma lista de nós**
&nbsp; 

Através de alguns métodos aplicados junto ao objeto **`document`**, o JavaScript consegue percorrer a árvore DOM e localizar os objetos da aplicação desejados para a realização de alguma operação. Estão abaixo alguns deles:      

&nbsp; 

- **Método `getElementsByClassName()`**  
Localiza um elemento através do nome da classe passada, retornando um array dos elementos que existirem no documento.  
```js

document.getElementsByClass(".nome-da-classe");
```

&nbsp;  

- **Método `getElementById()`**   
Localiza um elemento através do id informado.     
```js

document.getElementById("#id");
```

&nbsp; 

- **Método `getElementsByTagName()`**  
Localiza um elemento através do nome da tag passada, retornando um array dos elementos que existirem no documento.  
```js

document.getElementsByTagName("nome-da-tag");
```

&nbsp;  

- **Método `querySelector()`**  
Localiza um elemento, retornando apenas o primeiro elemento-filho encontrado. O parâmetro recebido por este método pode ser o nome da tag, a classe, o id ou um atributo do elemento.  
```js

document.querySelector("parametro-escolhido");
```
```js

// sintaxe para o caso de um data-attribute
document.querySelector("[data-attribute-aqui]");
```

&nbsp;  

- **Método `querySelectorAll()`**  
Localiza elementos, retornando todos os elemento-filhos correspondentes. O parâmetro recebido por este método pode ser o nome da tag, a classe, o id ou um atributo do elemento.  
```js

document.querySelectorAll("parametro-escolhido");
```
```js

// sintaxe para o caso da busca de elementos com o atributo required
document.querySelectorAll("[required]");
```

&nbsp; 

- **Método `closest()`**  
Retorna o primeiro elemento DOM ‘ancestral’ do elemento que foi especificado no parâmetro; se não houver correspondência, retornará nulo. 
```js

const element = document.getElementById("elemento-filho-aqui");
const closest = element.closest("elemento-ancestral-aqui");
```

&nbsp; 

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>