// 1 - Dados numéricos
let a = 7;
console.log(typeof a)
// number 

let b = 10.5;
console.log(typeof b)
// number (repare que não há diferenciação para ponto flutuante!)

console.log('a'/5);
// NaN (indica que se trata de dado não numérico, ou seja, not a number)



// 2 - Cadeia de caracteres
let c = 'Tipos de variáveis utilizadas em JavaScript!';
console.log(typeof d)
// string



// 3 - Dados lógicos booleanos
let d1 = true;
let d2 = false;
console.log(typeof d1)
console.log(typeof d2)
// boolean



// 4 - Indefinidos
let e // repare que a variável foi declarada, porém não inicializada
console.log(typeof e)
// undefined 



// 5 - Objetos
let f = ['a', 2, 'c', 4, 5];
console.log(typeof f)
// object

let g ={
	nome: 'Paola',
	idade: 16
}
console.log(typeof g)
// object

var h = null; // repare que a variável não aponta para um tipo ou valor
console.log(typeof h)
// object



// 6 - Funções
function minhaFuncao() {
    console.log("Hello JS!");
  }
  console.log (typeof function minhaFuncao(){})
// function