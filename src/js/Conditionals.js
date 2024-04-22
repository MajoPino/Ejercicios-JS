let numUser = Number(prompt("Please, enter a number"))
/* let year = Number(prompt("Please, enter a year")) */

//1. Verifica si un número es positivo.
//2. Verifica si un número es negativo.

/* if (numUser > 0) {
    console.info("The number is a positive number")
} else if (numUser === 0){
    console.info("The number is a neutral number")
} else if (numUser < 0){
    console.info("The number is a negative number")
} else {
    console.info("Sorry, but you did'nt provide a number, try again.")
}  */

/* ----------------------------------------------------------------------------------------- */

//3. Comprueba si un número es par.
//4. Comprueba si un número es impar.

/* if (numUser%2===0) {
    console.info("The number is an even number")
} else {
    console.info("The number is an uneven number")
}  */

//Determina si un número es múltiplo de 5.

/* if (numUser%5===0) {
    console.info("The number is a five multiple")
} else {
    console.info("The number isn't a five multiple")
}  */

//6. Verifica si un número es divisible entre 3.

/* if (numUser%3===0) {
    console.info("The number is divisible by 3")
} else {
    console.info("The number isn't divisible by 3")
}   */

//7. Determina si un número es mayor que 100.

/* if (numUser > 100) {
    console.info("The number is bigger than 100")
} else if (numUser === 100) {
    console.info("The number is equal to 100")
} else if (numUser < 100){
    console.info("The number is smaller than 100")
} else {
    console.info("Sorry, but you did'nt provide a number, try again.")
} */

//8. Verifica si un número es menor que -50.

/* if (numUser > -(-50)) {
    console.info("The number is bigger than -50")
} else if (numUser === -50) {
    console.info("The number is equal to -50")
} else if (numUser < -(-50)){
    console.info("The number is smaller than -50")
} else {
    console.info("Sorry, but you did'nt provide a number, try again.")
} */

//9. Comprueba si un número está en el rango de 20 a 50.

/* if (numUser >= 20 && numUser <= 50) {
    console.info("The number is between the range from 20 to 50")
} else {
    console.info("The number isn't between the range from 20 to 50")
} */

//10.Determina si un número es igual a 0.

/* if (numUser === 0) {
    console.info("The number is equal to 0")
} else {
    console.info("The number isn't equal to 0")
} */

//11.Verifica si un número es mayor que -10 y menor que 10.

/* if (numUser > -10 && numUser < 10) {
    console.info("The number is bigger than -10 and smaller than 10")
} else {
    console.info("The number isn't bigger than -10 and smaller than 10")
} */

//12.Determina si un número es un año bisiesto.

/* if ((year%4===0) && (year%100!==0) || (year%400===0)){
    console.info("The year you entered is a leap-year")
} else if ((year%100===0) || (year%400!==0)){
    console.info("The year you entered isn't a leap-year")
} else {
    console.log("Sorry, you didn't entered a valid year")
} */

//13.Verifica si una persona es mayor de edad (mayor o igual a 18 años)

/* const myAge = Number(prompt("Please, enter your age"))
let adultAge = 18

if (myAge >= adultAge) {
    console.info("You're an adult!")
} else if (myAge > 0 && myAge < adultAge){
    console.info("You aren't an adult.")
} else{
    console.error("Sorry, you didn't entered a valid age. Try again.")
} */

//14. (No existe)

//15. Verifica si un número es un cuadrado perfecto.

/* const verify = Math.sqrt(numUser)

if (Number.isInteger(verify)) {
    console.info("The number is a perfect square")
} else {
    console.info("The number isn't a perfect square")
} */

//16.Determina si un número es un número de Fibonacci.

/* numTest= 3
let a = 0
let b = 1
let testFibonacci = false

while (b < numTest) {
    let temp = b;
    b = a + b;
    a = temp;
}

if (b === numTest) {
    testFibonacci = true;
}

if (testFibonacci) {
    console.log(`${numTest} is a Fibonacci number`)
} else {
    console.log(`${numTest} isn't a Fibonacci number`)
}
 */

//17.Verifica si un número es una potencia de 2.

let square = Math.sqrt(numUser)
let squared2 = Math.round(square)
let testNum = (square == squared2)


if (testNum) {
    console.log(`The number ${numUser} is potenciate of 2`)
} else {
    console.log(`The number ${numUser} isn't potenciate of 2`)
}