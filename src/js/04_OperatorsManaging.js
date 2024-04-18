document.write("04_OperatorsManaging")

//Basic data types on Javascript

console.groupCollapsed("Basic data types on Javascript")

let variable1 = 12
let variable2 = "4"
let variable3 = "Hello world"
let variable4 = true
let variable5 = null
let variable6 = undefined
let variable7 = NaN //Property of number, not a data type
let variable8 = [1, 2, 3, 4, 5, 6]
let variable9 = {"name": "majo", "lastName": "pino", "age": 19}
let variable10 = function () {
    console.log("Hello world")
}

console.log("variable 1", typeof variable1)

console.log("variable 2", typeof variable2)

console.log("variable 3", typeof variable3)

console.log("variable 4", typeof variable4)

console.log("variable 5", typeof variable5)

console.log("variable 6", typeof variable6)

console.log("variable 7", typeof variable7) //Property of number, not a data type

console.log("variable 8", typeof variable8)

console.log("variable 9", typeof variable9)

console.log("variable 10", typeof variable10)
console.groupEnd()

/* ----------------------------------------------------------------------------------------- */

//Aritmethic operators

console.groupCollapsed("Aritmethic operators")

let number1 = 15
let number2 = 4

let add = number1 + number2
let minus = number1 - number2
let mult = number1 * number2
let div = number1 / number2
let potenciate = number1 ** number2
let module = number1%number2

console.info(number1+", "+number2)
console.log("The result of the adding is: "+ add)
console.log("SUbstraction: ", minus)
console.log("Multiplication: ", mult)
console.log("Division: ", div)
console.log("Potenciation: ", potenciate)
console.log("The module (number lefting) of the division is: ", module)

console.groupEnd()

/* ----------------------------------------------------------------------------------------- */

//Increasing and decreasing operators

console.groupCollapsed("Increasing and decreasing operators")

let numberForIncreasing = 0
let numberForDecreasing = 100
console.info("Start:", numberForIncreasing)


//Increases the number one value
numberForIncreasing++
console.info("*)", numberForIncreasing) //1

numberForIncreasing++
console.info("*)", numberForIncreasing) //2

//Increasses the number to a specific value
numberForIncreasing+=5
console.info("*)", numberForIncreasing) //5


//Decrease a number

//Decreases the number one value
console.info("End:", numberForDecreasing) //100

numberForDecreasing--
console.info("*)", numberForDecreasing) //99

numberForDecreasing--
console.info("*)", numberForDecreasing) //98

//Decreasses the number to a specific value
numberForDecreasing-=3
console.info("*)", numberForDecreasing) //95

console.groupEnd()