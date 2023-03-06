> **Objetos em JavaScript**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp; 

**Exercício: Declarar um objeto livro e manipular as suas propriedades**     
&nbsp;  

*Declarando o objeto literal livro*  
```js

const livro = {
   titulo: 'O Poder do Hábito',
   autor: 'Charles Duhigg',
   traducao: 'Rafael Mantovani',
   categoria: 'Autoajuda',
   'data de lancamento': '24/09/2021',
   paginas: 408,
   noEstoque: true,
   preco: 46.00,
   status() {
       console.log('Em alta...');
    },
};
```

&nbsp; 

*Acessando as propriedades e função do objeto*  
```js

console.log(livro.titulo); // 1ª maneira - notação de ponto. Retorna: O Poder do Hábito
console.log(livro['autor']); // 2ª maneira - notação de array. Retorna: Charles Duhigg
console.log(livro['data de lancamento']); // Obrigatório aqui notação de array. Retorna: 24/09/2012
livro.status(); // Acesso à uma função. Retorna: Em alta...
```

&nbsp; 

*Adicionando novas propriedades ao objeto*  
```js

livro.acabamento = 'Brochura'; // 1ª maneira
livro['editora'] = 'Objetiva'; // 2ª maneira
```

&nbsp; 

*Alterando valores de propriedades do objeto*  
```js

livro.noEstoque = false;
livro.preco = 58.50;
```

&nbsp; 

*Deletando as propriedades do objeto*  
```js

delete livro.traducao;
delete livro.categoria;
console.log(livro)

/* Retorna:
 {
   titulo: 'O Poder do Hábito',
   autor: 'Charles Duhigg',
   'data de lancamento': '24/09/2021',
   paginas: 408,
   noEstoque: false,
   preco: 58.5,
   status: [Function: status],
   acabamento: 'Brochura',
   editora: 'Objetiva'
 }
*/
```

&nbsp; 

*Verificando se as propriedades 'paginas' e 'peso' existem no objeto*  
```js

console.log('paginas' in livro); //  Retorna: true
console.log('peso' in livro); //  Retorna: false
```

&nbsp; 

*Exibindo separadamente as chaves e valores do objeto livro*  
```js

const chaves = Object.keys(livro);
console.log(chaves);
const valores = Object.values(livro);
console.log(valores);

/* Retorna: 
 [
   'titulo',
   'autor',
   'data de lancamento',
   'paginas',
   'noEstoque',
   'preco',
   'status',
   'acabamento',
   'editora'
 ]
 [
   'O Poder do Hábito',
   'Charles Duhigg',
   '24/09/2021',
   408,
   false,
   58.5,
   [Function: status],
   'Brochura',
   'Objetiva'
 ]
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>