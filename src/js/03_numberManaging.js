/* const myFirstNumber = 5
document.write(myFirstNumber) */

/* ----------------------------------------------------------------------------------------- */

//Veryfy if the number is an integer(True) or a decimal(False)
/* console.info(typeof(myFirstNumber))
console.info(Number.isInteger(myFirstNumber)) */

/* ----------------------------------------------------------------------------------------- */

//Operations between string & num
/* let mySecondNumber = "2" */
/* mySecondNumber = Number(mySecondNumber) */
/* Number.parseInt(mySecondNumber) */

/* //Does the operation between String & Number
console.info(myFirstNumber * mySecondNumber)
console.info(myFirstNumber - mySecondNumber)
console.info(myFirstNumber / mySecondNumber)
console.info(myFirstNumber + Number(mySecondNumber))

//Concatenate String & Number
console.info(myFirstNumber + mySecondNumber) */

/* ----------------------------------------------------------------------------------------- */

//Operations with large numbers

/* const numberOne = 5000000000000000
//It doesn't affect the result writing the number this way or the normal way
const numberTwo = 5_000_000_000_000_000
const numberThree = 85

console.info(numberOne + numberTwo)
console.info(numberOne - numberTwo)
console.info(numberOne * numberTwo)
console.info(numberOne / numberTwo)

//Verify if a number is wether finite(True) or infinite(False)
console.info(Number.isFinite(numberThree))
//Verify the maximum number that can be ingresed
console.info(Number.MAX_VALUE)
//Verify the minimum number that can be ingresed
console.info(Number.MIN_VALUE)
//PI
console.info(Math.PI)
//Safe numbers = numbers that are 'safe' to be calculated without mistakes aka numbers not too big or incalculables
//Veryfy the minimum and maximum safe numbers to be digited
console.info(Number.MIN_SAFE_INTEGER)
console.info(Number.MAX_SAFE_INTEGER) */

/* ----------------------------------------------------------------------------------------- */

//Doing exponential operations

/* const exampleNumber = 351890

console.info(exampleNumber)

//Translating to exponential
console.info((exampleNumber).toExponential(5))
//Translating to Binary
console.info(exampleNumber.toString(2))
//Translating to Octal
console.info(exampleNumber.toString(8))
//Translating to Hexadecimal
console.info(exampleNumber.toString(16))
//Translating to Decimal
console.info(exampleNumber.toString(10)) */

/* ----------------------------------------------------------------------------------------- */

//Force the quantity of decimal that I want to show (Not rounding!)
/* let example = 5.12
document.write(example)

console.info(example.toFixed())
console.info(example.toFixed(1))
console.info(example.toFixed(2))
console.info(example.toFixed(3))
console.info(example.toFixed(5))
//Imperfection of JS since it's a number too big to be calculated (Not safe)
console.info(example.toFixed(100)) */

/* ----------------------------------------------------------------------------------------- */

//Rounding quantity of decimals
/* const roundingNumber = 3.00001
document.write(roundingNumber)

console.info(Math.round(roundingNumber))
//Step back the decimal no matter how close it is to the next number
console.info(Math.floor(roundingNumber))
//Step forward the decimal no matter how far it is to the next number
console.info(Math.ceil(roundingNumber))
//Leaves the number as it is (Chop the decimals)
console.info(Math.trunc(roundingNumber))
//Another way to leave the number as it is (Chop the decimals)
console.info(Number.parseInt(roundingNumber)) */

/* ----------------------------------------------------------------------------------------- */

//How to use Math.random to generate a random number

//Option #1 to generate a random number between 0 to x
/* let randomNumber = Math.random() * 100
document.write(Number.parseInt(randomNumber)) */

/* const randomNumber = Math.trunc(Math.random() * 100)
document.write(randomNumber) */

//Option #2 to generate a random number between x to x

// (valorSuperior - valorInferior + 1) + valorInferior
/* let randomNumberWithRange = Math.trunc(Math.random() * (50 - 100 + 1) + 100)
document.write(randomNumberWithRange) */

//Another option to not use the +1 using 'Math.round' instead of 'Math.trunc'
/* let randomNumberWithRange = Math.round(Math.random() * (50 - 100) + 100)
document.write(randomNumberWithRange) */

/* ----------------------------------------------------------------------------------------- */

//Class Math and its more used methods

//Always translates a number to its absolute and positive value
/* console.log(Math.abs(-50)) */

//How to exponenciate numbers
/* console.log(2*2*2*2*2)
console.log(Math.pow(2,5)) */

//Quedratic root of a number
/* console.log(Math.sqrt(25)) */

//Cubic root of a number
/* console.log(Math.cbrt(240)) */

//Verify if a number is wether positive or negative

//Long way
/* let number = 45

if (number>0) {
    console.log("positive")
} else {
    console.log("negative")
} */

//Short way positive being '1' and negative '-1'
/* console.log(Math.sign(-42)) */

//Order a list of disorganized numbers from min to max
/* numList = [1,5,3,9]
console.log(numList.sort())

//Get the maz or min number from a list
console.log(Math.max(1,5,3,9))
console.log(Math.min(1,5,3,9))

console.log(Math.max(...numList))
console.log(Math.min(...numList)) */