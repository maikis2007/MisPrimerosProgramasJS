'use strict'

alert("Se te va a pedir que ingreses dos números naturales ...");

do {
    var numero1 = parseInt(prompt("Introduce el primer número: "));    
} while(numero1 < 0, isNaN(numero1))

do {
    var numero2 = parseInt(prompt("Introduce el segundo número: "));    
} while(numero2 < 0, isNaN(numero2))

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let mult = numero1 * numero2;
let div = numero1 / numero2;

let sumaR = "Suma: " + suma;
let restaR = "Resta: " + resta;
let multR = "Multiplicación: " + mult;
let divR = "División: " + div;

alert(`A continuación se te va a mostrar el resultado de las 4 operaciones básicas de ${numero1} y ${numero2} ...`);

alert(sumaR);
alert(restaR);
alert(multR);
alert(divR);

document.write(`<h3>Los resultados de las 4 operaciones básicas de ${numero1} y ${numero2} son:</h3>`);

document.write("<p>" + sumaR + "</p>");
document.write("<p>" + restaR + "</p>");
document.write("<p>" + multR + "</p>");
document.write("<p>" + divR + "</p>");

console.log(`Estas son los resultados de las 4 operaciones básicos de ${numero1} y ${numero2}:`);

console.log(sumaR);
console.log(restaR);
console.log(multR);
console.log(divR);
