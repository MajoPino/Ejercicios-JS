console.groupCollapsed("Create")
//Creating arrays

const simpleArray = [
    1,
    "alpha",
    true,
    [2,3,5,6], 
    {
        name:"Majo", 
        lastName:"Pino"
    }, 
    false
]

const simpleArray2 = []
const simpleArray3 = Array("one", "two", "three")
const simpleArray4 = new Array(3) // [ , , ]
simpleArray4.push("Hello world") // [ , , ,'Hello world']
simpleArray4[0]="uno" // ['uno', , ,'Hello world']


console.info(simpleArray)
console.info(simpleArray2)
console.info(simpleArray3)
console.info(simpleArray4) 

//Creating an array from an object
let arrayObj = Array.from(simpleArray[4].name) //Using Array.from
console.log(arrayObj)

const arraySplit = simpleArray[4].name.split("") //Using .split()
console.log(arraySplit)

console.groupEnd()
/* ----------------------------------------------------------------------------------------- */

console.groupCollapsed("basic management")
//Getting info from an array

const alphabet = ["a","b","c","d","e","f","g"]
console.log(alphabet[3])
console.log(alphabet.at(0))
console.log(alphabet.at(-2)) //You can start from the last index with this method

alphabet[0] = "alpha"
/* alphabet.at(1) = "bravo" */ //This method is only for printing, not for changing info
alphabet[1] = "bravo"

alphabet.push("h") //Push only adds at the end of the array
alphabet.push("i")
alphabet.push("j")
alphabet.push("k")

alphabet.unshift(1) //unshift only adds at the begining of the array
alphabet.unshift(2)
alphabet.unshift(3)

alphabet.pop() //Only deletes the last position from an array and returns the element
alphabet.pop()
alphabet.pop()
const deletedLetter = alphabet.pop() //It deletes the last position but creates a backup of it
console.log(deletedLetter)

alphabet.shift()
alphabet.shift()
const deletedNum = alphabet.shift() //The same as pop but with the first index of the array
console.log(deletedNum)

delete alphabet[2] //Deletes the element but leaves the empty space of the element (Doesn't create a backup)

alphabet[15] = "tango"

console.log(alphabet)
console.log(alphabet.indexOf("tango")) //Finds and returns the position of the element
console.log(alphabet.includes("e")) //Finds and returns a true or a false

console.groupEnd()
/* ----------------------------------------------------------------------------------------- */

console.groupCollapsed("Array union")

const clanGates = ["David", "Luisa", "Simón"]
const clanGosling = ["Mariana", "Kevin", "David"]

console.log(clanGates)
console.log(clanGosling)

/* clanGates.push(clanGosling) // Adds the other list as a new element into the array
console.log(clanGates) */

console.log(clanGates.concat(clanGosling)) //Combines the elements of both arrays

console.log(clanGates.join(" ->"))

console.groupEnd()
/* ----------------------------------------------------------------------------------------- */

console.group("Run an array")

let numbersToTen = [0,1,2,3,4,5,6,7,8,9,10]
console.log(numbersToTen)

let unitedNums = numbersToTen.join(",")
console.log(unitedNums)

let unitedNums2 = unitedNums.split(",")
console.log(unitedNums2)
console.log(unitedNums2.map(numero => parseInt(numero)))

/* console.log(Array.from(unitedNums)) */

/* for (const numero of unitedNums2) {
    parseInt(numero)
} */

/* unitedNums2.forEach(numero => {
    console.log(parseInt(numero))
}); */

/* let unitedNums3 = unitedNums2.map(numero => {
   return parseInt(numero)
})

console.log(unitedNums3) */

console.groupEnd()