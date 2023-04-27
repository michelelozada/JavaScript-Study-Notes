> **Percorrendo um array**    
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   

**1 - Utilizando a estrutura `while`**  
&nbsp;  

- Impressão de todos os itens do array
```js

const cestaDeFrutas = [
    'laranja',
    'maçã',
    'banana',
    'ameixa',
];

let cont = 0; // variável de controle

console.log("Impressão de todas as frutas da cesta:");
while (cont < cestaDeFrutas.length) {
    console.log((cont + 1) + " - " + cestaDeFrutas[cont]);
    cont += 1;
}

/* Retorna:
 Impressão de todas as frutas da cesta:
 1 - laranja
 2 - maçã
 3 - banana
 4 - ameixa
*/
```

&nbsp;   
 
- Pesquisa por um elemento específico do array
```js

const cestaDeFrutas = [
    'laranja',
    'maçã',
    'banana',
    'ameixa',
];

let contador = 0;
let frutaExiste = false;
let frutaPesquisada = "AMEIXA";

console.log("Pesquisa por uma fruta da cesta:");
while (contador < cestaDeFrutas.length) {
    if (cestaDeFrutas[contador].toLowerCase() == frutaPesquisada.toLowerCase()) {
        frutaExiste = true;
        break;
    }
    contador += 1;
}
const resposta = frutaExiste == true ? "Sim" : "Não";
console.log("Tem " + frutaPesquisada.toLowerCase() + " na cesta? " + resposta);

/* Retorna: 
 Pesquisa por uma fruta da cesta:
 Tem ameixa na cesta? Sim
*/
```

&nbsp;

**2 - Utilizando a estrutura `for`**  
- Impressão de todos os itens do array
```js

const cestaDeFrutas = [
    'laranja',
    'maçã',
    'banana',
    'ameixa',
];

console.log("Impressão de todas as frutas da cesta:");
for (let i = 0; i < cestaDeFrutas.length; i++) {
    console.log((i + 1) + " - " + cestaDeFrutas[i]);
}

/* Retorna:
 Impressão de todas as frutas da cesta:
 1 - laranja
 2 - maçã
 3 - banana
 4 - ameixa
*/ 
```

&nbsp;

- Pesquisa por um elemento específico do array
```js

console.log("Pesquisa por uma fruta da cesta:");
let frutaExiste = false;
let frutaPesquisada = "limão";

for (let i = 0; i < cestaDeFrutas.length; i++) {
    if (cestaDeFrutas[i].toLowerCase() == frutaPesquisada.toLowerCase()) {
        frutaExiste = true;
        break;
    }
}
const resposta = frutaExiste == true ? "Sim" : "Não";
console.log("Tem " + frutaPesquisada.toLowerCase() + " na cesta? " + resposta);

/* Retorna: 
 Pesquisa por uma fruta da cesta:
 Tem limão na cesta? Não
*/
```

&nbsp;

**3 - Exemplo similar ao anterior, mas utilizando agora o método `forEach()`**  
```js

const cestaDeFrutas = [
    'laranja',
    'maçã',
    'banana',
    'ameixa',
];

console.log('Impressão de todas as frutas da cesta:');
cestaDeFrutas.forEach(function(item) {
	console.log('- ' + item)
});

/* Retorna:
 Impressão de todas as frutas da cesta:
 - laranja
 - maçã
 - banana
*/
```

&nbsp;

Mesmo exemplo acima, usando uma arrow function:  
```js

cestaDeFrutas.forEach(item => {
    console.log('- ' + item);
});
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>
     
