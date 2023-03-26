> **Métodos para manipular de nós**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Métodos para manipulação de nós**
&nbsp; 

Nós podem ser criados, adicionados, substituidos ou removidos, estando abaixo alguns dos métodos para isso:  

&nbsp; 

- **Método `createElement()`**  
Cria um elemento HTML, sendo que deve ser informada a tag do elemento no parâmetro.  
```js

document.createElement(elemento);
````

&nbsp; 

- **Método `appendChild()`**  
Adiciona um novo elemento ao fim da lista de filhos do elemento-pai.   
```js

element.appendChild(novo-elemento);
```

&nbsp; 

- **Método `insertBefore()`**  
Adiciona um elemento-filho antes de outro elemento específico, que já deve existir no documento.    
```js

element.insertBefore(novo-elemento);
```

&nbsp; 

- **Método `replaceChild()`**     
Substitui um elemento existente por outro elemento novo.  
```js

element.replaceChild(elemento-novo, elemento-antigo);
```

&nbsp; 

- **Método `removeChild()`**  
Remove o elemento-filho de um elemento (remoção, não exclusão).  
```js

elemento1.removeChild(elemento-a-remover);
```

&nbsp; 

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>