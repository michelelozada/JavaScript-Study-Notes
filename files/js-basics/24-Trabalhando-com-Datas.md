> **Trabalhando com datas em JavaScript**  
> Repositório: JavaScript - Notas de estudo  
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  

Através da classe **`Date`**, é possível trabalhar com horas e datas.

&nbsp;  

#### :white_medium_square: Obtendo a data e hora atual:   
```js

const dataAtual = new Date();
console.log(dataAtual);
```

&nbsp;  

####  :white_medium_square: Obtendo somente hora e minuto ***local*** atual:  
```js

const dataAtual  = new Date();
let dataAtualLocal = dataAtual.getHours() + ':' + dataAtual.getMinutes() + ':' + dataAtual.getSeconds();
console.log("A hora local é",dataAtualLocal);
```

&nbsp;  

####  :white_medium_square: Obtendo o dia da semana: 
```js

const dataAtual  = new Date();

console.log(dataAtual.getDay());
console.log(dataAtual.getMonth());
console.log(dataAtual.getFullYear());

// Se for domingo ou janeiro retorna 0; se for segunda ou fevereiro retorna 1; e assim por diante...
```

&nbsp;  

:arrow_forward: **Exemplo:** Recebendo como parâmetro uma data de nascimento vinda de um formulário HTML  

```js

function validaDataNascimento(input) {
  const dataNascimentoInformada = new Date(input.value);
}
```

&nbsp;  

:arrow_forward: **Exemplo:** Recebendo  data de nascimento e somando a ela 18 anos *(útil para validações de formulários)*:  
```js

function maiorQue18(dataNascimentoInformada) {
  // Recebendo a data de hoje
  const dataAtual = new Date();
		
  // Somando à data de hoje mais 18 anos.
  const dataNascimentoMais18 = new Date(dataNascimentoInformada.getUTCFullYear() + 18, dataNascimentoInformada.getUTCMonth(), dataNascimentoInformada.getUTCDate());

  return dataNascimentoMais18 <= dataAtual;
  // caso true, pessoa maior de idade
}

if (maiorQue18(dataRecebida)) {
	console.log('Idade permitida para cadastramento (usuário maior de idade)');
} else {
	console.log('Idade não permitida para cadastramento (usuário menor de 18 anos)');
}
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>