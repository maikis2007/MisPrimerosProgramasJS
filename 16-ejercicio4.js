//debugger;

'use strict'

// HTML
const spanNumero = '<span class="numero">';
const spanCierre = '</span>';

alert('Este programa muestra un rango abierto que tiene solo números impares, para ello deberas ingresar dos números enteros');

do {
    var num1 = Number(prompt("Introduce un número entero: "));
} while(isNaN(num1) || num1 % 1 !== 0)

do {
    var num2 = Number(prompt("Introduce otro número entero: "));
    // con el segundo parametro se puede determinar más condiciones
} while(isNaN(num2) || num2 % 1 !== 0 || num2 - 1 === num1 || num2 + 1 === num1 || num1 === num2 || (num1 % 2 !== 0 && (num2 === num1 + 2 || num2 === num1 - 2)))

if (num1 > num2) {
    var num1save = num1;

    num1 = num2;
    num2 = num1save;
}

var serie = "";

document.write(`<h3>Números impares entre el ${num1} y ${num2}</h3>`);

for (let i = num1+1; i < num2; i++) {

    // En estos
    if (num2 - num1 === 2 || num2 - num1 === 3 || num2 - num1 === 4) { // i toma un solo valor impar
        if (i % 2 !== 0) {
            serie += spanNumero + i + spanCierre;
        }

    } else {
        if (i == num2 - 1) { // i toma su max. valor
            if (i % 2 !== 0) {
                serie += spanNumero + i + spanCierre;
            } else {
                serie += spanNumero + (i-1) + spanCierre;
            }
        } else if (i == num2 - 2) { // i toma su penul. valor
            if (i % 2 !== 0) {
                serie += spanNumero + `${i - 2} y ` + spanCierre;
            } else {
                serie += spanNumero + `${i - 1} y ` + spanCierre;
            }
        } else {
            if (num2 % 2 !== 0) { // Si el num2 es impar
                if (i % 2 !== 0) {
                    if (i !== num2 - 4) { // Analiza está condición
                        serie += spanNumero + `${i}, ` + spanCierre;
                    }
                }
            } else { // Si el num2 es par
                if (i % 2 !== 0) {
                    if (i !== num2 - 3) { // Analiza está condición
                        serie += spanNumero + `${i}, ` + spanCierre;
                    }
                }
            }
        }
    }
}

document.write('<p>'+serie+'</p>');

//console.log(serie);

/*
var i = num1 + 1;
var serie = "";

while (i < num2) {

    if (i == num2 - 1) { // i toma su max. valor
        if (i % 2 !== 0) {
            serie += i
        } else {
            serie += i - 1
        }
    } else if (i == num2 - 2) { // i toma su penul. valor
        if (i % 2 !== 0) {
            serie += `${i - 2} y `
        } else {
            serie += `${i - 1} y `;
        }
    } else {
        if (num2 % 2 !== 0) { // Si el num2 es impar
            if (i % 2 !== 0) {
                if (i !== num2 - 4) { // Analiza está condición
                    serie += `${i}, `;
                }
            }
        } else { // Si el num2 es par
            if (i % 2 !== 0) {
                if (i !== num2 - 3) { // Analiza está condición
                    serie += `${i}, `;
                }
            }
        }
    }

    i++;
}
*/

/*
document.write("<ul>");

for (let i = num1+1; i < num2; i++) {
    if (i % 2 !== 0) {
        document.write("<li>"+i+"</li>");
    }
}

document.write("</ul>");
*/
