> **Operadores lógicos**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
 
**1 - Operador lógico `AND`**  
```js

let hora = 12;

if (hora >= 10 && hora <= 16) {
    console.log('Horário: ' + hora + ' horas. Permitir acesso aos clientes: o banco está aberto.');
} else {
    console.log('Horário: ' + hora + ' hora(s). Restringir acesso aos clientes: o banco está fechado.');
}

// Retorna: Horário: 12 horas. Permitir acesso aos clientes: o banco está aberto.
```

&nbsp;   

**2 - Operador lógico `OR`**  
```js

let horario = 12;
let diaUtil = false;

if (horario < 10 || horario > 16 || diaUtil == false) {
    console.log('O banco está fechado agora. Expediente bancário acontece apenas das 10h às 16h dos dias úteis.');
} else {
    console.log('O banco está aberto agora.');
}

// Retorna: O banco está fechado agora. Expediente bancário acontece apenas das 10h às 16h dos dias úteis.
```

&nbsp;   

**3 - Operador lógico `NOT`**
```js

let gestante = true;

if (!gestante) {
    console.log('Prezado cliente, você deverá pegar a senha padrão para atendimento.');
} else {
    console.log('Prezada gestante, sua senha de atendimento será diferenciada e seu atendimento será prioritário.');
}

//Retorna: Prezada gestante, sua senha de atendimento será diferenciada e seu atendimento será prioritário.
```

&nbsp;   

**4 - Operador lógico `NOT`, com dupla negação para conversão em valor booleano real**  
```js

let saldoCliente = 3000.00;

if (!!saldoCliente) {
    console.log('Conta poupança do cliente consultado possui valor depositado.');
} else {
    console.log('Conta poupança do cliente consultado não possui nenhum valor depositado.');
}

// Retorna: Conta poupança do cliente consultado possui valor depositado.
```
```js

let saldoCliente = 0;

if (!!saldoCliente) {
    console.log('Conta poupança do cliente consultado possui valor depositado.');
} else {
    console.log('Conta poupança do cliente consultado não possui nenhum valor depositado.');
}

//Retorna: Conta poupança do cliente consultado não possui nenhum valor depositado.
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>