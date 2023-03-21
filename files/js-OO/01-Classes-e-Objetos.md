> **Classes e Objetos**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;  
**Criando uma classe**  
```js

class Cliente {
	// Definindo os campos, propriedades ou atributos para esta classe
  nome;
  cpf;
}
```

&nbsp;  

**Criando um objeto cliente a partir da classe Cliente**
```js

new Cliente();
```

&nbsp;  

**Acima foi criado um objeto; porém ele não foi atribuído à uma variável de acesso**
```js

const cliente1 = new Cliente();
```

&nbsp;  

**Atribuindo valores aos atributos do objeto criado**  
```js

cliente1.nome = "Enzo";
cliente1.cpf = 11122233309;
```
&nbsp;  

**Imprimindo este objeto**
```js

console.log(cliente1);

//Retorna: Cliente { nome: 'Enzo', cpf: 11122233309 }
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>