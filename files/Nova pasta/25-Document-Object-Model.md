> **DOM (Document Object Model)**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  

**1. Modelo de Objeto do Documento (DOM)**  
No momento em que o navegador interpreta um arquivo HTML, é criada a representação em formato de objeto deste documento - esse é o modelo DOM.      

&nbsp;  
 
**2. Árvore DOM**  
Relação de elementos HTML, organizados em forma de árvore, na qual certos elementos são filhos de outros.     

&nbsp;  

**3. Nós**   
- São elementos da árvore DOM que podem ser manipulados, sendo que cada nó é um objeto.    
- Tipos de nós:
  - document  
  - element  	
  - text

&nbsp;  
	
**3.1. Document**  
- É o documento atual, onde estão os outros nós da árvore DOM.  
- O elemento raiz é a tag **`<html>`**, que contém os demais elementos filhos.     
- A partir dele, é possível acessar outros objetos da aplicação.  

&nbsp; 

**3.2. Element**  
São as tags.     

&nbsp; 

**3.3. Text**  
São os textos que estão entre os elementos.  

&nbsp; 

**4 - JavaScript e DOM**    
- O JavaScript consegue acessar, intepretar e modificar os objetos, graças ao DOM.  
- Através de alguns métodos aplicados junto ao objeto **`document`**, o JavaScript consegue percorrer a árvore DOM e selecionar os objetos da aplicação desejados, sendo que seguem abaixo alguns destes métodos:    

&nbsp; 

**Método `querySelector()`**:  *seleciona o elemento pelo seletor passado*  
```js

document.querySelector();
```

&nbsp;  

**Método `getElementById()`**:  *seleciona o elemento pelo id passado*  
```js

document.getElementById();
```

&nbsp;  

**Método `getElementsByClassName()`**:  *seleciona através da classe passada, retornando um array dos elementos*
```js

document.getElementsByClass();
```

&nbsp;  

**Método `getElementsByTagName()`**:  *seleciona através da tag passada, retornando um array dos elementos*
```js

document.getElementsByTagName();
```

&nbsp;  

**Método `querySelectorAll()`**:  *seleciona através do seletor passado, devolvendo todos os seletores com o mesmo nome*  
```js

document.querySelectorAll();
```

&nbsp;  

**Método `createElement()`**   
```js

document.createElement();
```

&nbsp;  

**Método `addEventListener()`**   
```js

element.addEventListener();
```

&nbsp;  
 
<div align="center">
:bulb: <b>Referências pesquisadas:</b>
<br>
<a href="https://www.alura.com.br/artigos/o-que-e-o-dom">O que é DOM?</a>, artigo de Ellen Pimental para Alura
<br>
<a href="https://blog.xpeducacao.com.br/o-que-e-dom/">O que é DOM? Saiba tudo sobre o Document Object Model]()</a>, artigo do blog XP Educação

&nbsp;

<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>