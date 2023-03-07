> **Comandos Continue e Break**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  

**1 - Comando `continue`** 
```js

console.log('Séries que compõem o ensino básico fundamental no Brasil:');
console.log('A - Anos iniciais do ensino fundamental');

for (i = 1; i < 6; i++) {
    console.log('- ' + i + 'º ano do ensino fundamental I');
    continue;
}
console.log('\nB - Anos finais do ensino fundamental');

for (i = 6; i < 10; i++) {
    console.log('- ' + i + 'º ano do ensino fundamental II');
    continue;
}

/* Retorna: 
Séries que compõem o ensino básico fundamental no Brasil:
A - Anos iniciais do ensino fundamental
- 1º ano do ensino fundamental I
- 2º ano do ensino fundamental I
- 3º ano do ensino fundamental I
- 4º ano do ensino fundamental I
- 5º ano do ensino fundamental I
B - Anos finais do ensino fundamental
- 6º ano do ensino fundamental II
- 7º ano do ensino fundamental II
- 8º ano do ensino fundamental II
- 9º ano do ensino fundamental II
*/
```

&nbsp;  

**2 -  Comando `break`**  
- Interrompe o fluxo de execução do loop, independentemente de ter sido atingida sua condição de saída.  
- Ajuda, portanto, a poupar processamento desnecessário no caso de varreduras em listas.  
```js

let bandasBritPop = [
	'The Stone Roses', 
	'Suede', 
	'Oasis', 
	'Supergrass', 
	'The Verve', 
	'Stereophonics', 
	'Travis', 
	'Blur', 
	'Pulp', 
	'Arctic Monkeys'
];
let bandaProcurada = 'Blur';

for (let i = 0; i < bandasBritPop.length; i++) {
    if (bandasBritPop[i] == bandaProcurada) {
        console.log('Acabou de ser encontrada a banda ' + bandaProcurada + ' no índice de número ' + i + ' da presente listagem.'); 
		console.log('Encerrando o programa...');
        break;
    }
}
console.log('Programa encerrado');

/* Retorna: 
 Acabou de ser encontrada a banda Blur no índice de número 7 da presente listagem.
 Encerrando o programa...
 Programa encerrado
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>