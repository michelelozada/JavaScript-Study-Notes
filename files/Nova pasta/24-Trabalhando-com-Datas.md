> **Trabalhando com datas em JavaScript**  
> Repositório: JavaScript - Notas de estudo  
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  

Através da classe **`Date`**, é possível trabalhar com horas e datas.   
&nbsp;  

Obtendo a data e horário atual:   
```js

const dataAtual = new Date();
console.log(dataAtual);
```

&nbsp;  

Obtendo somente o horário local atual:  
```js

const horaAtual = new Date();
console.log(horaAtual.getHours());
```

&nbsp;  

Recebendo uma data vinda de um formulário (via **`input type="date"`**):  
```js

function validaDataNascimento(input) {
  const dataRecebida = new Date(input.value);
}
```

&nbsp;  

Recebendo uma data de nascimento e somando a ela 18 anos (útil para validações de formulários):  
```js

function maiorQue18(dataNascimentoInformada) {
  // Recebendo a data de hoje
  const dataAtual = new Date();
		
  // Somando à data de hoje mais 18 anos.
  const dataNascimentoMais18 = new Date(dataNascimentoInformada.getUTCFullYear() + 18, dataNascimentoInformada.getUTCMonth(), dataNascimentoInformada.getUTCDate());

  return dataNascimentoMais18 <= dataAtual;
  // caso true, pessoa maior de idade
}
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>