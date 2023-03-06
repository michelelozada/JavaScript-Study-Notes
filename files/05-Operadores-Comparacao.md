> **Operadores de comparação**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    

**1 - Igual a (`==`)**
```js

console.log(4 == 4.0);  // Retorna: true
console.log(4 == '4');  // Retorna: true
```

&nbsp;    

**2 - Diferente de (`!=`)**
```js

console.log(4 != 5.0);  // Retorna: true
console.log(4 != '4');  // Retorna: false
```

&nbsp;    

**3 - Idêntico a (`===`)**
```js

console.log(4 === 4);  // Retorna: true
console.log(4 === "4"); // Retorna: false
```

&nbsp;    

**4 - Não idêntico a (`!==`)**
```js

console.log(4 !== 4);   // Retorna: false
console.log(4 !== '4'); // Retorna: true
```

&nbsp;    

**5 - Menor que (`<`)**
```js

console.log(2.5 < 10); // Retorna: true
```

&nbsp;    

**6 - Maior que (`>`)**
```js

console.log(10 > 2.5); // Retorna: true
```

&nbsp;  

**6 - Maior ou igual a (`>=`)**
```js

console.log(5 >= 13); // Retorna: false
console.log(5.0 >= 5); // Retorna: true
```

&nbsp;    

**7 - Menor ou igual a (`<=`)**
```js

console.log(10 <= 5); // Retorna: false
console.log(10 <= 10.0); //  Retorna: true
```

&nbsp;    

**8 - Comparando strings**
```js

console.log('bom' < 'dia'); // Retorna: true
console.log('bom' == 'dia'); // Retorna: false
console.log('bom' > 'dia'); // Retorna: false
console.log('dia' == 'dia'); // Retorna: true
```

&nbsp;    

**9 - Diferença entre *igual a* (`==`) e *idêntico a* (`===`)**  
- **Igual a (`==`)**  - verifica se as variáveis apresentam o mesmo valor.    
- **Idêntico a (`=== `)** - além de verificar se têm o mesmo valor, compara se as variáveis são do mesmo tipo.    
&nbsp; 

```js

const a = 5; 
const b = "5"; 

if (a == b) {
    console.log("As duas variáveis têm valores iguais.");
    if (a === b) {
        console.log("Também têm tipos iguais; portanto, são variáveis idênticas.");
    } else {
        console.log("Mas têm tipos diferentes; portanto, não são variáveis idênticas.");
    }
} else {
    console.log("As duas variáveis têm valores diferentes.");
}       

/* Retorna: 
 As duas variáveis têm valores iguais.
 Mas têm tipos diferentes; portanto, não são variáveis idênticas.
*/ 
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>