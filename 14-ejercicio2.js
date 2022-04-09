'use strict'

alert('Este programa es de aritmética, saca la media, la suma y la cantidad de x números');
alert('Claro, hasta que ingreses algo que no sea un numero, o un número menor o igual a cero, para qué el programa se acabe');

let suma = 0;
let n = 0;

do {
    var numero = Number(prompt("Ingresa un número: ", 0)); // con let no sigue el bucle

    if (isNaN(numero) || numero < 0 || numero === 0) {
        break; // Un error hace que termine el bucle
    }
    
    suma += numero; // suma aumenta en cada numero
    n++;  // cantidad aumenta en 1

    //console.log(suma, n);

} while (numero > 0);

if ((suma && n) !== 0) {
    let media = suma / n;
    let msgFinal = "de todos los números es: ";

    alert("La cantidad " + msgFinal + n);
    alert("La suma " + msgFinal + suma);
    alert("La media " + msgFinal + media);
}

/*
if ( isNaN(numero) ) {
    console.log('No ingresaste un número');
}

console.log(numero);
*/
