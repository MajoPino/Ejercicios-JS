//Objects Managing

//Programming without objects
console.groupCollapsed("Programming without objects")

const fullName = "Mariajose Pino"
const email = "majo12pino@gmail.com"

function greet() {
    console.log(`Hello world, I'm ${fullName} and this is my email: ${email}`)
}

console.log(fullName)
console.log(email)
greet()

console.error("Line break")

const fullName2 = "Marc Spector"
const email2 = "moonknight@gmail.com"

function greet2() {
    console.log(`Hello world, I'm ${fullName2} and this is my email: ${email2}`)
}

console.log(fullName2)
console.log(email2)
greet2()

console.groupEnd()

/* ----------------------------------------------------------------------------------------- */

//Programming with objects
console.groupCollapsed("Programming with objects")

const coderRiwi = {
    nameCoder: "Majo",
    lastName: "Pino",
    birthDate: new Date("04/13/2005/16:00:00"),
    rh: "O+",
    location: {
        country: "Colombia",
        state: "Cundinamarca",
        city: "Bogotá",
        neighborhood: "Chapinero",
        address: "AV #21 - 14",
        postalCode: "45541"
    },
    cel: "3153582196",
    skills: ["python", "html", "css", "EcmaScript"],
    email: "majo12pino@gmail.com",
    greet: function () {
        console.log(`Hello world, I'm ${this.nameCoder} ${this.lastName} and this is my email: ${this.email}`)
    }
}

//Extracting information from an object
console.log(coderRiwi.nameCoder)
console.log(coderRiwi['nameCoder'])
console.log(coderRiwi.location.address)
console.log(coderRiwi['location']['address'])
console.log(coderRiwi.skills[2])
coderRiwi.greet()

console.groupEnd()
/* ----------------------------------------------------------------------------------------- */

console.groupCollapsed("Modify, add, modify and delete properties")
//Adding information to an object
console.log(coderRiwi)

coderRiwi["documentType"] = "Cédula de ciudadanía"
coderRiwi.idNumber = "12038289273"
//Defining a property with permission
Object.defineProperty(coderRiwi, "clan", {
    value: "Gates",
    writable: false, //Allows to modify or block the modification of a property
    enumerable: true, //Allows the property to appear when it's called
    configurable: false //Allows the property to be deleted
})

//Adding objects into objects
coderRiwi.emergencyName = "Mario Pino"
coderRiwi.emergencyNumber = "3242452332"
coderRiwi.emergencyAltNumber = "34487367834"

Object.defineProperty(coderRiwi,"emergencyContact",{
    value: {
        contactName: "Mario Pino",
        contactNumber: "3242452332",
        contactAltNumber: "34487367834"
    },
    writable: false, 
    enumerable: true, 
    configurable: true
})

//Other ways to do it
/* coderRiwi.emergencyContact = {
    contactName: "Mario Pino",
    contactNumber: "3242452332",
    contactAltNumber: "34487367834"
} */

/* Object.assign(coderRiwi,{
    contactName: "Mario Pino",
    contactNumber: "3242452332",
    contactAltNumber: "34487367834"
}) */


//Updating info from an object
coderRiwi.nameCoder = "María José"
coderRiwi['lastName'] = "Pino Ortega"
coderRiwi.clan = "Linux"

console.log("deleting information")
delete coderRiwi.clan

console.log(coderRiwi)

console.groupEnd()
/* ----------------------------------------------------------------------------------------- */

//Objects Addition
console.groupCollapsed("Objects Addition")

const obj1 = {
    a: "uno",
}
const obj2 = {
    b: "dos",
}
const obj3 = {
    a: "uno",
}
const obj4 = {
    b: "dos",
}

const addObjects = Object.assign(obj1,obj2)

console.log("obj1", obj1)
console.log("obj2", obj2)
console.log("suma", addObjects)

console.error("line break")
const addObjects2 = {...obj3, ...obj4}

console.log("obj3", obj3)
console.log("obj4", obj4)
console.log("suma", addObjects2)

console.groupEnd()
/* ----------------------------------------------------------------------------------------- */
//Objects desestructuration
console.group("Objects desestructuration")

const exampleObject1 = {
    userName: "Jhon",
    userEmail: "jhon.perez@gmail.com",
    userRole: "admin",
    userPassword: "Jhonperez1234$",
}

//Manual way
/* const userName = exampleObject1.userName
const userEmail = exampleObject1.userEmail
const userPassword = exampleObject1.userPassword */

//Fast way
let {
    userName, 
    userEmail, 
    userPassword
} = exampleObject1

//Nested desestructuration

const coderRiwiDesesc = {
    nameCoder: "Majo", //
    lastName: "Pino", //
    birthDate: new Date("04/13/2005/16:00:00"),
    rh: "O+",
    location: {
        country: "Colombia",
        state: "Cundinamarca",
        city: "Bogotá",
        neighborhood: "Chapinero",
        address: "AV #21 - 14", //
        postalCode: "45541"
    },
    cel: "3153582196",
    skills: ["python", "html", "css", "EcmaScript"],
    email: "majo12pino@gmail.com", //
    greet: function () {
        console.log(`Hello world, I'm ${this.nameCoder} ${this.lastName} and this is my email: ${this.email}`)
    }
}

let {
    nameCoder,
    lastName,
    location:{
        address
    },
    email:emailCoder
} = coderRiwiDesesc

console.log("Name:", nameCoder)
console.log("Last name:",lastName)
console.log("Address:",address)
console.log("Email:",emailCoder)

console.log(userName)
console.log(userEmail)
console.log(userPassword)

//Extract info with a different name

let {userName: user, userEmail: emailExtracted, userPassword: password} = exampleObject1

console.log(user)
console.log(emailExtracted)
console.log(password)

