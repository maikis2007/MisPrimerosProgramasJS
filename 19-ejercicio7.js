//debugger;

'use strict'

alert('Este programa te pide que ingreses un número, para qué así el te puede mostrar su tabla de multiplicar del 1 al 12 y 9 tablas más posteriores, en total se te mostrará 10 tablas');

let numero = Number(prompt("¿De qué número quieres la tabla?: "));
const ntmax = numero + 9;  // no va a cambiar el número de la última tabla

// Tabla del 1 al 12 de un número y 9 tablas más posteriores a esta
for(let t = numero; t <= ntmax; t++) { // el numero de la tabla no va a pasar del número de la última tabla
    document.write(`<h1>Tabla del ${t} del 1 al 12</h1>`)

    document.write("<ul>");
    for(let i = 1; i <= 12; i++) {
        //console.log(numero*i);
        document.write(`<li>${t} x ${i} = ${t*i}</li>`);
    }
    document.write("</ul>");
}

//document.write(`<h1>Tabla del ${numero} del 1 al 12</h1>`)

/* Tabla del 1 al 12 de un número
document.write("<ul>");
for(let i = 1; i <= 12; i++) {
    //console.log(numero*i);
    document.write(`<li>${numero} x ${i} = ${numero*i}</li>`);
}
document.write("</ul>");
*/

/* Tabla del 1 al 12 del 1 al 10
for(let c = 1; c <= 10; c++) {
    document.write(`<h1>Tabla del ${c} del 1 al 12</h1>`)

    document.write("<ul>");
    for(let i = 1; i <= 12; i++) {
        //console.log(numero*i);
        document.write(`<li>${c} x ${i} = ${c*i}</li>`);
    }
    document.write("</ul>");
}
*/
