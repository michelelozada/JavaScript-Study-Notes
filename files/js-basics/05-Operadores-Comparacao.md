> **Operadores de Comparação**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;    
**Operadores de Comparação (Comparisson Operators)**  
- Retornam valores booleanos, após a comparação de operandos.

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
- *Aqui há a coversão das strings em números para a comparação.*  
&nbsp;   
```js

console.log(false == "false");  // Retorna: false (valor booleano false foi convertido aqui para o número 0)
console.log(5 == "5");  // Retorna: true
console.log(false == false);  // Retorna: true
console.log(5 == 5);  // Retorna: true

console.log(false === "false");  // Retorna: false
console.log(5 === "5");  // Retorna: false
console.log(false === false);  // Retorna: true 
console.log(5 === 5);  // Retorna: true
```
&nbsp;    

*10 - Diferença entre *diferente de* (`!=`) e *não idêntico a* (`!==`)**  
- **Diferente de (`!=`)**  - verifica se as variáveis tem valores diferentes.     
- **Não idêntico a (`!== `)** - além de verificar se têm valores diferentes, compara se as variáveis também diferem em seus tipos.  
- *Aqui não há a coversão das strings em números para a comparação.*  
&nbsp;   

```js

console.log(false != "false");  // Retorna: true
console.log(5 != "5");  // Retorna: false
console.log(false != false);  // Retorna: false
console.log(5 != 5);  // Retorna: false 


console.log(false !== "false");  // Retorna: true
console.log(5 !== "5");  // Retorna: true
console.log(false !== false);  // Retorna:false
console.log(5 !== 5);  // Retorna: false
```

&nbsp;   

<div align="center">
:bulb: <b>Referência pesquisada:</b>
<br>
<a href="https://ricardo-reis.medium.com/operadores-de-compara%C3%A7%C3%A3o-comparison-operators-d2bc3ed734a3">Operadores de Comparação (Comparison Operators) JavaScript</a>, artigo de Ricardo Reis

&nbsp;

<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>