//debugger;

'use strict'

alert('Este programa te pide que ingreses un número, él te dirá sus divisores');

let numero = Number(prompt("Ingresa un número natural: "));

if (isNaN(numero)) { // no es un número
    console.log("No ingresaste un número");
} else if (numero <= 0 || numero % 1 !== 0) { // es un decimal o un entero no positivo
    console.log("No ingresaste un número natural");
} else if (numero > 0 && Number.isInteger(numero)) { // es natutal
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            alert("Divisor: " + i);
            console.log("Divisor: " + i);
        }
    }
}
