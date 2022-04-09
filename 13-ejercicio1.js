'use strict' // Finish

alert('Este programa te saca el número mayor y menor');

let num1 = Number(prompt("Ingresa el primer número: "));

while (num1 <= 0 || isNaN(num1)) {
    num1 = Number(prompt("Ingresa bien el primer número: "));
}

let num2 = Number(prompt("Ingresa el segundo número: "));

while (num2 <= 0 || isNaN(num2)) {
    num2 = Number(prompt("Ingresa bien el segundo número: "));
}

if (num1 !== num2) {
    alert("EL NÚMERO MAYOR: " + (num1 > num2 ? num1 : num2) );
    alert("EL NÚMERO MENOR: " + (num1 < num2 ? num1 : num2) );
} else {
    alert("Los números son iguales");
}

/*
if (num1 > num2) {
    alert("EL NÚMERO MAYOR: " + num1);
    alert("EL NÚMERO MENOR: " + num2);
} else if (num1 < num2) {
    alert("EL NÚMERO MAYOR: " + num2);
    alert("EL NÚMERO MENOR: " + num1);
} else if (num1 == num2){
    alert("Los números son iguales");
}
*/
