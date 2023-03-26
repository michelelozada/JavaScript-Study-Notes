> **Métodos para percorrer uma lista de nós**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Métodos para percorrer uma lista de nós**
&nbsp; 

Através de alguns métodos aplicados junto ao objeto **`document`**, o JavaScript consegue percorrer a árvore DOM e localizar os objetos da aplicação desejados, estando abaixo alguns deles:      

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
Localiza um elemento através do seletor CSS informado, retornando apenas o primeiro elemento-filho encontrado.    
```js

document.querySelector("seletor-CSS");
```

&nbsp;  

- **Método `querySelectorAll()`**  
Localiza elementos através do seletor CSS informado, retornando todos os elementos-filhos com seletores correspondentes.    
```js

document.querySelectorAll("seletor-CSS");
```

&nbsp; 

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>