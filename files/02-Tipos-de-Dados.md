> **Tipos de dados**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

**1 - Dados numéricos**  
```js

let a = 7;
console.log(typeof a);

// retorna: number 
```

```js

let b = 10.5;
console.log(typeof b);

// retorna: number (repare que não há diferenciação para ponto flutuante!)
```

```js

console.log('a'/5);

// retorna: NaN (indica que se trata de dado não numérico, ou seja, not a number)
```

&nbsp;   

**2 - Cadeia de caracteres**  
```js

let c = 'Tipos de variáveis utilizadas em JavaScript!';
console.log(typeof d);

// retorna: string
```

&nbsp;   

**3 - Dados lógicos booleanos**  
```js

let d1 = true;
let d2 = false;
console.log(typeof d1);
console.log(typeof d2);

// retorna: boolean
```

&nbsp;   

**4 - Indefinidos**  
```js

let e // repare que a variável foi declarada, porém não inicializada
console.log(typeof e);

// retorna: undefined 
```

&nbsp;   

**5 - Objetos**  
```js

let f = ['a', 2, 'c', 4, 5];
console.log(typeof f);

// retorna: object
```
```js

let g = {
    nome: 'Paola',
    idade: 16
}
console.log(typeof g);

// retorna: object
```
```js
var h = null; // repare que a variável não aponta para um tipo ou valor
console.log(typeof h);

// retorna: object
```

&nbsp;   

**6 - Funções**
```js

function minhaFuncao() {
    console.log("Hello JS!");
}
console.log(typeof function minhaFuncao() { });

// retorna: function
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>