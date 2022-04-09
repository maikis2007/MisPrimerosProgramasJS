'use strict'

alert('Este programa te pide que ingreses un número, él te dirá si es par o impar, para que te deje de pedir números dile stop o pon cancel');
alert('Además recuerda que todo número decimal es impar');

let numero;

while (numero !== "stop") {

    numero = prompt("Ingresa el primer número: ");  // str

    if (numero === null) {
        break;
    }

    while (isNaN(numero) && numero !== "stop") {  // mientras sea un str diferente de stop
        alert("¡No ingresaste un número!")  // msg de error
        numero = prompt("Ingresa bien el número: ");
    }

    if (numero !== "stop") {  // se ingreso un número
        numero = Number(numero);  // que sea convierta a un número

        if (numero % 2 === 0) {
            alert('El número es par');
            console.log(`El número ${numero} es par`);
        } else {
            alert('El número es impar');
            console.log(`El número ${numero} es impar`);
            // todo número decimal es impar
        }
    }
}

/*
while (numero !== "stop") {

    numero = prompt("Ingresa el primer número: ");  // str

    if (numero === null) {
        break;
    }

    while (isNaN(numero) && numero !== "stop") {  // mientras sea un str diferente de stop
        alert("¡No ingresaste un número!")  // msg de error
        numero = prompt("Ingresa bien el número: ");
    }

    if (numero !== "stop") {  // se ingreso un número
        numero = Number(numero);  // que sea convierta a un número

        if (numero % 2 === 0) {
            alert('El número es par');
            console.log(`El número ${numero} es par`);
        } else {
            alert('El número es impar');
            console.log(`El número ${numero} es impar`);
            // todo número decimal es impar
        }
    }
}
*/

/*
if (isNaN(numero) === false) {
    if (numero % 2 === 0) {
        console.log('El número es par');
    } else {
        console.log('El número es impar');
    }
} else {
    console.log('No ingresaste un número');
}
*/
