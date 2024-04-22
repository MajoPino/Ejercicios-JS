//Actividades Modulo 3 – Estructuras de control

/* 1. if-else con uso de operadores de comparación, Operadores de asignación con 
Resta y asignación, y algún método de string: 
Enunciado del Problema: Crea un programa que tome dos números del usuario y 
utilice una estructura de control if-else para determinar si el primer número es 
mayor que el segundo. Si es así, resta el segundo número al primero y muestra el 
resultado en consola. Además, utiliza algún método de string para indicar si el 
resultado es un número positivo o negativo.  */

console.groupCollapsed("Num1")

/* let number1 = Number(prompt("Please, enter a number"))
let number2 = Number(prompt("Please, enter another number")) */


/* if (number1 > number2){
    
    let result = number1 - number2
    if (result < 0){
        console.log(`The result of the operation ${number1} - ${number2} is ${result} which means it's a negative number`)
    } else if (result > 0){
        console.log(`The result of the operation ${number1} - ${number2} is ${result} which means it's a positive number`)
    }

} else if (number1 < number2) {
    console.log(`The result of the operation ${number1} - ${number2} is ${number1-number2}`)
} else if (number1 == number2){
    console.log("Both numbers are equal!")
} else {
    console.error("You didn't entered a valid number, please try again.")
} */

console.groupEnd()

/* 2. switch case con uso de operadores de comparación, Método Math y 
Number.parseFloat(text): 
Enunciado del Problema: Desarrolla un programa que solicite al usuario 
seleccionar una operación matemática (suma, resta, multiplicación o división) 
mediante un menú. Utiliza un switch case para realizar la operación seleccionada 
en dos números ingresados por el usuario. Además, utiliza el método Math para 
redondear el resultado y conviértelo a un número decimal utilizando 
Number.parseFloat(text) antes de mostrarlo en consola.  */

let option = Number(prompt(`
----WELCOME TO THE RIWI CALCULATOR!----

Please, enter the number of the operation you want to do today:

1. Adition
2. Substraction
3. Multiplication
4. Division
5. Potenciation
6. Square root
7. Cubic root
0. Exit

`))

let firstNumber
let secNumber

switch (option) {

    case 1:
        firstNumber = Number(prompt("Please enter the first number you want to make the adition with:"))
        secNumber = Number(prompt("Please enter the number you want to add to the previous one:"))

        console.log(`The result of the operation ${firstNumber} + ${secNumber} is equal to ${firstNumber + secNumber}`)
        break;
    case 2:
        firstNumber = Number(prompt("Please enter the first number you want to make the substraction with:"))
        secNumber = Number(prompt("Please enter the number you want to substract to the previous one:"))

        console.log(`The result of the operation ${firstNumber} - ${secNumber} is equal to ${firstNumber - secNumber}`)
        break;
    case 1:
        firstNumber = Number(prompt("Please enter the first number you want to make the adition with:"))
        secNumber = Number(prompt("Please enter the number you want to add to the previous one:"))
        
        console.log(`The result of the operation ${firstNumber} + ${secNumber} is equal to ${firstNumber+secNumber}`)
        break;
    case 1:
        firstNumber = Number(prompt("Please enter the first number you want to make the adition with:"))
        secNumber = Number(prompt("Please enter the number you want to add to the previous one:"))
        
        console.log(`The result of the operation ${firstNumber} + ${secNumber} is equal to ${firstNumber+secNumber}`)
        break;
    case 1:
        firstNumber = Number(prompt("Please enter the first number you want to make the adition with:"))
        secNumber = Number(prompt("Please enter the number you want to add to the previous one:"))
        
        console.log(`The result of the operation ${firstNumber} + ${secNumber} is equal to ${firstNumber+secNumber}`)
        break;
    case 1:
        firstNumber = Number(prompt("Please enter the first number you want to make the adition with:"))
        secNumber = Number(prompt("Please enter the number you want to add to the previous one:"))
        
        console.log(`The result of the operation ${firstNumber} + ${secNumber} is equal to ${firstNumber+secNumber}`)
        break;
    case 1:
        firstNumber = Number(prompt("Please enter the first number you want to make the adition with:"))
        secNumber = Number(prompt("Please enter the number you want to add to the previous one:"))
        
        console.log(`The result of the operation ${firstNumber} + ${secNumber} is equal to ${firstNumber+secNumber}`)
        break;
    case 1:
        firstNumber = Number(prompt("Please enter the first number you want to make the adition with:"))
        secNumber = Number(prompt("Please enter the number you want to add to the previous one:"))
        
        console.log(`The result of the operation ${firstNumber} + ${secNumber} is equal to ${firstNumber+secNumber}`)
        break;

    default:
        break;
}