> **Estrutura de decisão - If Else If**  
> Repositório: JavaScript - Notas de estudo     
> GitHub: @michelelozada
&nbsp;
     
&nbsp;   
Escreva um algoritmo que retorne ao usuário se o mesmo é obrigado ou não a votar, de acordo com a idade e status de alfabetização informados.  
```js

idade = 19;
alfabetizado = false;

if (alfabetizado == false) {
    if (idade >= 16) {
        console.log('Você declarou ser analfabeto(a) e, portanto, seu alistamento eleitoral e voto são facultativos.')
    } else {
        console.log('Você tem ' + idade + ' anos e, dessa forma, ainda não pode se alistar nem votar.')
    }
} else {
    if (idade < 16) {
        console.log('Você tem ' + idade + ' anos e, dessa forma, ainda não pode se alistar nem votar.')
    } else if (idade >= 16 && idade < 18) {
        console.log('Você tem ' + idade + ' anos e, portanto, o alistamento eleitoral e voto são facultativos.')
    } else if (idade >= 18 && idade < 70) {
        console.log('Você tem ' + idade + ' anos e é alfabetizado, portanto é obrigado(a) a votar.')
    } else {
        console.log('Você tem ' + idade + ' anos e, para maiores de 70 anos, o voto é facultativo.')
    }
}

/* Alguns outputs gerados:
(exemplo acima)
Retornou: Você declarou ser analfabeto(a) e, portanto, seu alistamento eleitoral e voto são facultativos.

idade = 15;
alfabetizado = true;
Retornou: Você tem 15 anos e, dessa forma, ainda não pode se alistar nem votar.

idade = 16;
alfabetizado = true;
Retornou: Você tem 17 anos e, portanto, o alistamento eleitoral e voto são facultativos.

idade = 18;
alfabetizado = true;
Retornou: Você tem 18 anos e é alfabetizado(a), portanto é obrigado(a) a votar.

idade = 71;
alfabetizado = true;
Retornou: Você tem 71 anos e, para maiores de 70 anos, o voto é facultativo.
*/
```

&nbsp;

<div align="center">
<a href="https://github.com/michelelozada/JavaScript-Study-Notes">[Voltar à tela inicial do repositório]</a>
</div>