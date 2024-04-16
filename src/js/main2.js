/* Declaración de strings */

/* let simpleComma='hola "mundo"'
let dobleComma="hello 'world'"
let temporalString= 2133423
const fullName="Maria José Pino"
const characterNum= fullName.length  */

/* console.info(simpleComma)
console.info(dobleComma)
console.info(temporalString)
console.info("Majo".length)
console.info("The total number of characters of the name is ", characterNum) */

//Character extraction
/* let letterJExtraxtion= fullName[0]
let letterJExtractionV2= fullName.charAt(14)

console.info(letterJExtraxtion)
console.info(letterJExtractionV2)

console.error("salto")

console.info(fullName[0])
console.info(fullName[1])
console.info(fullName[6])
console.info(fullName[7]) */

/* let userName = "Maria Jose"
let lastName = "Pino"
let email = "majo12pino@gmail.com"


console.info("Hello world, my name is " + userName + " " + lastName + "and my email is " + email)
console.info("Hello world, my name is", userName, lastName, "and my email is", email)
console.info(`Hello world, my name is ${userName} ${lastName} and my email is ${email}`)

const header = `
<header>
    <h1>Hello world</h1>
    <p>Hello world, my name is ${userName} ${lastName} and my email is ${email}</p>
</header>
`

document.write(header) */



/* Modification of the DOM */

/* let userName= "Majo";
let lastName= "Pino";
const age= 19;
const email= "majo12pino@gmail.com";
let address= "Cra 82#9A Sur";
let cel= "3153582196";

const body = `

<header><h1>Hello, ${userName}</h1></header>
<main>
    <h2>Here's your personal info:</h2>
    <ul>
        <li>Full name: ${userName} ${lastName}</li>
        <li>Age: ${age}</li>
        <li>Email address: ${email}</li>
        <li>Address: ${address}</li>
        <li>Cellphone number: ${cel}</li>
    </ul>
</main>

`

document.write(body) */

//Transformations

/* const message="Hello world"
const secMessage="Today's a new day"

document.write(message)
document.write(secMessage)

console.info(message.toUpperCase())
console.info(secMessage.toLowerCase())

console.info(message.concat(secMessage))
console.info(message+secMessage) */

//Check information

/* const message="Hello world"
document.write(message)

console.log(message.startsWith("familia"))
console.log(message.startsWith("Hello"))
console.log(message.includes("world"))
console.log(message.startsWith("i am"))
console.log(message.includes("whatever"))
console.log(message.includes("wo"))
console.log(message.endsWith("d")) */

//String trimming
 
/* const message = "     hello world      "
console.info(message)
console.info(message.trimStart())
console.info(message.trimEnd())
console.info(message.trim()) */

//Character replacement

/* const message="I'm a coder from Riwi and I'm happy in Riwi because I changed my world."
const messagetwo="Crazy? I was crazy once, they locked me in a room, a rubber room, a rubber room with rats and rats make me crazy."
document.write(message)

//Just replaces first coincidence
console.info(message.replace("coder", "programmer"))
console.info(message.replace("Riwi", "training center"))

//Replaces all coincidences
console.info(message.replaceAll("Riwi", "training center"))

//Replace common expressions
console.info(message.replace(/[aeou]/g, "i"))

//Repeat message
document.write(messagetwo.repeat(50)) */

//Strings filling

/* const message="1234"
document.write(message)
console.log(message.padStart(8, "*"))
console.info(message.padEnd(8, "*")) */

//Fragment a string

/* const message= "Being a coder from Riwi changes your world"
document.write(message)
console.info(message.substring(0,18))
console.info(message.substring(18))
console.info(message.slice(18))


//Splits a string into an array by the parameter (In this case an space)
console.info(message.split(""))
console.table(message.split(" ")) */

/* const message="In Riwi js is being taught"
document.write(message)

console.info(message.indexOf("i")) */

/* const message ="Our family is really big"
document.write(message)
console.info(message.search("family"))
console.info(message.search("riwi"))
console.info(message.match("family")) */


