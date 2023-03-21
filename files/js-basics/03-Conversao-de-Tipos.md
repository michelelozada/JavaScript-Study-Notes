> **Conversão de tipos**  
> Repositório: JavaScript - Notas de estudo   
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

Quando dados forem capturados através do tipo *string*, podem ser utilizados os seguintes métodos para convertê-los para o tipo *number*:  

&nbsp;   

**1 - Analisando uma string e retornando um número inteiro: método `parseInt()`**  
```js
console.log(parseInt("2") + parseInt("2"));

// Retorna: 4
```

&nbsp;   

**2 - Analisando uma string e retornando um número decimal: método `parseFloat()`**  
```js
console.log(parseFloat("2") + parseFloat("2.5"));

// Retorna: 4.5
```

&nbsp;   
**Caso não seja possível fazer a conversão para o tipo number, será retornado NaN (not a number)**
```js
console.log(parseFloat("ola.mundo"));

// Retorna: NaN
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>