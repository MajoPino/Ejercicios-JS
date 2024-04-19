//Simple conditionals


//If conditional
/* console.groupCollapsed("Simple conditionals")
const nameUser = "Juan"

//true
if (nameUser == "Juan") {
    console.log("Hello " + nameUser)
}

let age = 18

//true
if (age >= 18) {
    console.log("You're an adult now, you are allowed to vote")
}
console.groupEnd() */

/* ----------------------------------------------------------------------------------------- */

//If / Else conditional

/* const minAgeToDrink = 18
const myAge = 12

if ((myAge < minAgeToDrink) && (myAge > 0)) {
    console.error("You're commiting an infraction and your parents can be penalized")
} else {
    console.error("You can drink, but be careful with the army")
} */

/* let userInput = prompt("Username:")
let passwordInput = prompt("Password:")

let userDatabase = "David"
const passwordDatabase = 1234

if ((userInput == userDatabase) && (passwordInput === passwordDatabase)) {
    console.warn("Welcome " + userDatabase)
} else {
    console.warn("The user name or the password are incorrect, please try again")
} */

/* ----------------------------------------------------------------------------------------- */

//condition if else-if

/* let number = Math.floor(Math.random() * (5 - (-5)) + (-5))

if (number === 0){
    console.log("It's a neutral number")
} else if (number < 0){
    console.log("The number", number, "is a negative number")
} else{
    console.log("The number", number, "is a positive number")
} */

//Using switch

//It ask a variable and  checks wether it is true or false (You can´t nest contitions like with using 'if')


/* let Transport = prompt("wich transport you use to travel?")

switch (Transport) {
    case "feet":
        console.log("You travel by feet")
        break;
    case "car":
        console.log("You travel by car")
        break;
        case "bus":
        console.log("You travel by bus")
        break;
        case "motorbike":
        console.log("You travel by motorbike")
        break;
        case "bicycle":
        console.log("You travel by bicicle")
        break;
    default:
        console.log("You travel by a different transport")
        break;
} */

/* alert(`
    Welcome to the Riwi restaurant, here are our delicious options:
    1- Obleas / $5000
    2- Choripan / $7000
    3- Sandwich / $10000
    4- Papitas / $4000
    5- Cereal / $4000
    6- Pan artesanal / $3000
    7- Café & galletas/ $3500

`)
let lunch = prompt("Please, enter the number of the option you'd like to order")

switch (lunch) {
    case "1":
        alert(`Your order of Obleas has been registered, the total price is $5000 COP. Thanks for buying!`)
        break;
    case "2":
        alert(`Your order of Choripan has been registered, the total price is $7000 COP. Thanks for buying!`)
        break;
    case "3":
        alert(`Your order of Sandwich has been registered, the total price is $10000 COP. Thanks for buying!`)
        break;
    case "4":
         alert(`Your order of Papitas has been registered, the total price is $4000 COP. Thanks for buying!`)
         break;
    case "5":
        alert(`Your order of Cereal has been registered, the total price is $4000 COP. Thanks for buying!`)
        break;
    case "6":
        alert(`Your order of Pan artesanal has been registered, the total price is $3000 COP. Thanks for buying!`)
        break;
    case "7":
        alert(`Your order of Café y galletas has been registered, the total price is $3500 COP. Thanks for buying!`)
        break;
    default:
        alert("Woops! The order has either been registered wrong or it doesn't exist, please try again.")
        break;
} */
/* ----------------------------------------------------------------------------------------- */

//Cycle for

/* To write a cycle 'for' you:

1. Define the variable to iterate i = 1
2. Define how many time the cycle will repeat itself i <= 5 (It will stop when the cycle reaches the number 6)
3. Add the amount of numbers you will add to the variable ++ */

//Print Hello world

/* for (let i = 1; i <= 10; i++){
    console.log("Hello world")
} */
/* let number = 2

for (let i = 1; i <= 10; i++){
    console.log(`${number} * ${i} = ${i*number}`)
} */

