
/* Basic calculator */
alert("Bienvenid@ a la calculadora de Riwi");

let num1= parseInt(prompt("Por favor, ingrese el primer número a calcular"));
let num2= parseInt(prompt("Por favor, ingrese el segundo número a calcular"));
const operation= prompt("Ingrese la operación a realizar: suma, resta, multiplicacion o division");
const add= num1 + num2;
const minus= num1 - num2;
const mult= num1 * num2;
const div= num1 / num2;

console.log("Calculator info:")
console.info(`Numbers to calculate: ${num1}, ${num2}`);

if (operation == "suma") {

    alert(`El resultado de la suma ${num1} + ${num2} es igual a ${add}`);
    console.warn(`Add result: ${add}`);
}
else if (operation == "resta") {
    
    alert(`El resultado de la resta ${num1} - ${num2} es igual a ${minus}`);
    console.warn(`Substraction result: ${minus}`);
}
else if (operation == "multiplicacion") {
    
    alert(`El resultado de la multiplicación ${num1} × ${num2} es igual a ${mult}`);
    console.warn(`Multiplication result: ${mult}`);
}
else if (operation == "division") {

    alert(`El resultado de la división ${num1} ÷ ${num2} es igual a ${div}`);
    console.warn(`Division result: ${div}`);
}
else {
    alert("El nombre de la operación se ha digitado de manera incorrecta");
    console.error("Error in the operation input");
}