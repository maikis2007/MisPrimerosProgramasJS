debugger;

'use strict'

// Int
let num1 = 0, num2 = num1, i = num1;
// Str
let serie = "";
// HTML
const spanNumero = '<span class="numero">';
const spanCierre = '</span>';

alert('Este programa muestra un rango abierto de dos números enteros ingresados por ti');

do {
    if (isNaN(num1) || num1 % 1 !== 0) {
        alert('¡Error!');
        
        if (isNaN(num1)) {
            alert("No ingresaste un número");
        } else if (num1 % 1 !== 0) {
            alert("Ingresaste un decimal");
        }
    }

    num1 = Number(prompt("Introduce el primer número: "));
} while(isNaN(num1) || num1 % 1 !== 0)

do {
    if ((num2 === 0 && i === 0) === false) {
        if (isNaN(num2) || num2 % 1 !== 0 || num2 - 1 === num1 || num2 + 1 === num1 || num2 === num1) {
            alert('¡Error!');

            if (num2 - 1 === num1 || num2 + 1 === num1) {
                alert("Son consecutivos");
            } else if (num2 % 1 !== 0) {
                alert("Ingresaste un decimal");
            } else if (num2 === num1) {
                alert("Son iguales");
            } else if (isNaN(num2)){
                alert("No ingresaste un número");
            }
        }
    }

    num2 = Number(prompt("Introduce el otro número: "));
    i++;
} while(isNaN(num2) || num2 % 1 !== 0 || num2 - 1 === num1 || num2 + 1 === num1 || num2 === num1)

if (num1 > num2) {
    var num1save = num1;

    num1 = num2;
    num2 = num1save;
}

serie += '<p>';
for (let i = num1+1; i < num2; i++) {
    if (i === num2 - 1) {
        serie += spanNumero + i + spanCierre;
    } else if (i === num2 - 2) {
        serie += spanNumero + i + spanCierre + '<span class="y">' + ' y ' + spanCierre;
    } else {
        serie += spanNumero + i + spanCierre + '<span class="coma">' + ', ' + spanCierre;
    }
}
serie += '</p>';

document.write(`<h3>Números entre el ${num1} y ${num2}</h3>`);
document.write(serie);

//console.log(serie);

/*
if (serie) {
    document.write(`<h3>Números entre el ${numero1} y ${numero2}</h3>`);
    document.write(serie)
} else {
    document.write(`<h3>No hay números entre el ${numero1} y ${numero2}</h3>`);
}
*/

/*
document.write("<ul>");

while ( numero1 < numero2 ) {
    numero1 += 1;
    if ( numero1 !== numero2) {
        document.write("<li>"+numero1+"</li>");
    }
}

document.write("</ul>");
*/

/*
document.write("<ul>");

for (let i = numero1+1; i < numero2; i++) {
    document.write("<li>"+i+"</li>");
}

document.write("</ul>");
*/
