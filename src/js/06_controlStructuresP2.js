//Cycles managing

/* const listFruits = [
    "apple",
    "orange",
    "banana",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate"
] */

// for - simple

/* console.table(listFruits.length)
console.table(listFruits)

for(let i = 0; i < listFruits.length; i++){
    console.info(listFruits[i])
} */

// foreach - more simple

/* listFruits.forEach((element,index) => {
   console.info(`The fruit ${element} is in the position ${index}`)
}) */

/* listFruits.forEach(element => {
    console.info(element)
}); */

//Arrow function 
/* listFruits.forEach( element => {
    console.info(element)
}) */

const employees = [
    "Juan Flóres",
    "Camila García",
    "Luisa Leiva",
    "David Gonzales",
    "Hans Zoe",
    "Levi Ackerman",
    "Laura Silva",
    "Julia Lagos",
    "Marc Spector"
]

/* for (let i = 0; i < employees.length; i++){
    console.info(employees[i])
} */

/* employees.forEach(person =>{
    console.info(person.toLowerCase())
}) */

/* employees.forEach(person =>{
  let name = person.split(" ")
  let firstLetter =  name[0].charAt(0)
  // let concatName = firstLetter.concat("-", name[1])
  let concatName = firstLetter + "-" + name[1]
  console.info(person, " => ", concatName)
})
 */
/* employees.forEach(person => {
    let fullName = person.split(" ")

    let firstLetter = fullName[0].charAt(0).toUpperCase()
    let secondLetter = fullName[1].charAt(0).toUpperCase()
    console.log(firstLetter.concat(secondLetter))
}) */

// foreach with objects

const coderRiwi = {
    nameUser: "Majo",
    lastName: "Pino",
    birthDate: new Date("04/13/2005/16:00:00"),
    height: 155,
    id: "1027151026",
    country: "Colombia",
    weight: 56,
    gender: "Soviet-Tank",
    email: "majo12pino@gmail.com"
}

console.table(coderRiwi)
console.info(coderRiwi.nameUser.concat(" ", coderRiwi.lastName))

console.info(Object.keys(coderRiwi))
console.info(Object.values(coderRiwi))

/* Object.keys(coderRiwi).forEach(key => {
    console.info(coderRiwi[key])
}); */
console.warn(" ")

for (const key in coderRiwi) {
    console.info(coderRiwi[key])
}

console.warn(" ")

for (const iterator of employees) {
    console.info(iterator)
}

console.log(Object.entries(coderRiwi))

const listEmployees = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
]

console.log(listEmployees[2].puesto)

listEmployees.forEach(employee => {
    document.writeln(`${employee.nombre}`)
    console.log(employee.nombre)
});

console.warn(" ")

//map

const listNum = [1, 8, 2, 4, 6, 5, 2]
const multipliedNum = [4, 10]

/* listNum.forEach(number => {
    console.info(`${number} x 2 = ${number*2}`)
    multipliedNum.push(number * 2)
}) */

const multipliedNumV2 = listNum.map(number => {
    console.info(`${number} x 2 = ${number * 2}`)
    return number * 2
})

//create a list with the numbers from 1 to 100 and extract the even numbers

const mainNumList = [] //empty list

for (i = 0; i <= 100; i++) {
    mainNumList.push(i) //Saves the number in the empty list
}

console.log(mainNumList)

const evenNumList = mainNumList.filter(number => {
   if (number % 2 === 0) {
    return number //function if enters the even numbers into the list
}})

console.log(evenNumList)
