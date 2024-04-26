//Functions class

//Functions (usually) don't need functions to work
/* alert("Hello world") */

//Methods are 'functions' that need their classes to work
/* Math.pow() */

/* confirm("Are you sure?") */ //You have to call the function as it is called, a function always returns something

console.groupCollapsed("Example 1")
//func      name      parameter  --- Remember that the name has to be as specific as possible
function greetEmployees(employees) { //A parameter is a piece of code that only lives in the function
    console.log("Hello "+employees+" , it's a pleasure to greet you")
    console.log("Today's a new day!")
} //If the function name changes upside, it also has to be changed bellow

greetEmployees("Nurses") // To use a function is strictly necessary to call it

greetEmployees("Doctors") //If you want to change the content of a parámeter, you will have to change the content of its argument
greetEmployees("Policemen") //You can change an argument and reuse a function as many times as you want
greetEmployees("Coders")

console.groupEnd()

console.groupCollapsed("Example 2")

/* let nameCoder = prompt("Please, log your name")
let clanCoder = prompt("Please, log your clan") */

function greetAllCoders(name, clan) {
    console.log("Welcome", name, "of clan", clan + ", it's a pleasure to have you on Riwi again!")
}

/* greetAllCoders(nameCoder, clanCoder) */

function goodbyeToAllCoders(name, clan) {
    console.log("Goodbye", name, "of clan", clan + ", we hope to see you soon!")
}

/* goodbyeToAllCoders(nameCoder, clanCoder) */

console.groupEnd()

console.groupCollapsed("Example 3")

//Declarative function

//It can be called before declaring
function showHelloWorld() {
    console.log("Hello World")
}

showHelloWorld()

//Expressive function

//It has to be called strictly after declared
const showHelloWorldExpression = function () {
    console.log("Hello World")
}

showHelloWorldExpression()

console.groupEnd()

//
console.group("Example 4")

function addNumbers(number1, number2) {
    console.log(number1 + number2)
}

function addNumbers(number1, number2) {
    let answer = number1 + number2
    return answer
}

let firstAdd = addNumbers(10, 20) //Here the function returns the numbers that had been added
let secondAdd = addNumbers(-4, 8)

console.log(firstAdd)
console.log(secondAdd)

console.groupEnd()

