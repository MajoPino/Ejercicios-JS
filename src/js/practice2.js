//Ejercicios de Strings puestos en clase

//Declara dos variables, num1 y num2, asignándoles valores numéricos
//diferentes y muestra en consola el resultado de sumarlos.

/* const num1 = 3
const num2 = 7
const sum = num1 + num2

console.info(`The result of the operation ${num1} + ${num2} is ${sum}`) */



//Define dos variables de tipo string, simpleString1 y simpleString2,
//con valores "Hola" y "Mundo" respectivamente. Muestra en consola
//la longitud total de ambas cadenas.

/* let simpleString1 = "Hello"
let simpleString2 = "World"
console.info(simpleString1.length)
console.info(simpleString2.length) */



//Crea dos variables de tipo string usando la función String(): stringUsingString1
// con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios".

/* let stringUsingString1 = String("JavaScript")
let stringUsingString2 = String("Exercises")

console.info(stringUsingString1,stringUsingString2) */



//Utiliza el operador new para crear dos variables de tipo string:
//stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2
//con el valor "Strings".

/* let stringUsingString1 = new String("Concatenate")
let stringUsingString2 = new String("Strings")

console.info(stringUsingString1,stringUsingString2) */



//Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.

/* let simpleString1 = "Calculando la posición del substring"
console.info(simpleString1[11])
console.info(simpleString1[12]) */



//Comprueba si la variable simpleString2 contiene el substring "ndo" e
//imprime el resultado en consola.

/* let simpleString2 = "Comprobando la existencia dentro del substring"
console.warn(simpleString2.includes("ando")) */



//Concatena las variables simpleString1 y simpleString2 utilizando el método
//concat() y muestra el resultado en consola.

/* let simpleString1 = "Hello people from Riwi"
let simpleString2 = " my name is Maria Jose Pino"
console.info(simpleString1.concat(simpleString2)) */



//Concatena las variables simpleString1 y simpleString2 utilizando el operador +
//y muestra el resultado en consola.

/* let simpleString1 = "Hello people from Riwi"
let simpleString2 = " my name is Maria Jose Pino"
console.info(simpleString1 + simpleString2) */

//Utiliza template strings para concatenar las variables simpleString1 y
//simpleString2 e imprime el resultado en consola.

/* let simpleString1 = "Riwi"
let simpleString2 = "Maria Jose Pino"

console.info(`Hello people from ${simpleString1}, my name is ${simpleString2}`) */


//Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable
//stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al
//principio y al final de ambas cadenas e imprime el resultado en consola.

/* let stringWithSpaces1 = "  TrimStart"
let stringWithSpaces2 = "TrimEnd  "

console.warn(stringWithSpaces1.trimStart())
console.warn(stringWithSpaces2.trimEnd()) */


//Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime
//el resultado en consola.

/* let simpleString1 = "I'm a coder from Riwi"
console.info(simpleString1.replace("o","i")) */


//Utiliza el método slice() para obtener los primeros tres caracteres de la
//variable simpleString2 e imprime el resultado en consola.

/* let simpleString2 = "Slicing the first three characters from the string"
console.info(simpleString2.slice(3)) */

//Utiliza el método substring() para obtener una subcadena de la variable
//simpleString2 que comience en el índice 2 e imprime el resultado en consola.

/* let simpleString2 = "Coding"
console.error(simpleString2.substring(2)) */


//Repite la variable simpleString1 dos veces utilizando el método repeat() e
//imprime el resultado en consola.

/* let simpleString1 = "Riwi"
console.warn(simpleString1.repeat(2)) */



//Divide la cadena "Esto es una oración de ejemplo" en un array de palabras
//y muestra el resultado en consola.

/* let phrase = "Esto es una oración de ejemplo"
console.warn(phrase.split(" ")) */


//Convierte la variable simpleString2 a mayúsculas utilizando el método
//toUpperCase() e imprime el resultado en consola.

/* let simpleString2 = "Hello coders from Riwi"
console.error(simpleString2.toUpperCase()) */


//Convierte la variable simpleString1 a minúsculas utilizando el método
//toLowerCase() e imprime el resultado en consola.

/* let simpleString1 = "HELLO CODERS FROM RIWI"
console.error(simpleString1.toLowerCase()) */


//Declara una variable booleana y asígnale un valor booleano.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let varOne = true
let typeData = typeof(varOne)

console.warn(typeData) */



//Declara una variable arreglo y asígnale un array con al menos tres elementos.
//Muestra en consola la longitud del array.

/* let arreglo = ["Ghost", "Soap", "Krueger"]
console.warn(arreglo.length) */


//Declara una variable objeto y asígnale un objeto con al menos tres propiedades.
//Muestra en consola una de las propiedades del objeto.

/* let objeto = {
    Character1:"Eren", 
    Character2:"Armin", 
    Character3:"Mikasa"
}
console.warn(objeto.Character3) */


//Declara una variable nulo y asígnale el valor null.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let nulo = null
console.warn(typeof(nulo)) */


//Declara una variable indefinido y no le asignes ningún valor.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let indefinido
console.error(typeof(indefinido)) */



//Declara una variable decimal y asígnale un número decimal.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let decimal = 1.1
console.error(typeof(decimal)) */

//Declara una variable negativo y asígnale un número negativo.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let negativo = -7
console.error(typeof(negativo)) */


//Utiliza el método indexOf() para encontrar la posición del carácter 'a'
//en la cadena "Casa" e imprime el resultado en consola.

/* let cadena = "Casa"
let cadenaTwo = cadena.indexOf("a")

console.warn(cadenaTwo) */



//Comprueba si la cadena "Javascript" incluye el substring "Script"
//utilizando el método includes() e imprime el resultado en consola.

/* let cadena = "JavaScript"
console.warn(cadena.includes("Script")) */


//Concatena las cadenas "Hola" y "Mundo" utilizando el método concat()
//y muestra el resultado en consola.

/* let first = "Hello"
let second = "World"

console.info(first.concat(second)) */



//Concatena las cadenas "Hola" y "Mundo" utilizando el operador +
//y muestra el resultado en consola.

/* let first = "Hello"
let second = "World"

console.info(first+" "+second) */



//Utiliza template strings para concatenar las cadenas "Hola" y "Mundo"
//e imprime el resultado en consola.

/* let first = "Hello"
let second = "World"

console.info(`${first} ${second}`) */


//Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ".
//Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco
//al principio y al final, respectivamente, e imprime el resultado en consola.

/* let cadenaConEspacios = "  Ejemplo con espacios  "
console.warn(cadenaConEspacios.trimStart())
console.warn(cadenaConEspacios.trimEnd())
console.warn(cadenaConEspacios.trim()) */


//Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul"
//utilizando el método replace() e imprime el resultado en consola.

/* let phrase = "El cielo es azul"
console.error(phrase.replace("azul", "rojo")) */


//Utiliza el método slice() para obtener los últimos cuatro caracteres
//de la cadena "Programación" e imprime el resultado en consola.

/* let first = "Programación"
console.info(first.slice(-4)) */


//Utiliza el método substring() para obtener una subcadena de la cadena
//"JavaScript" que comience en el índice 2 e imprime el resultado en consola.

/* let cadena = "JavaScript"
console.info(cadena.substring(2)) */


//Repite la cadena "Hola" tres veces utilizando el método repeat() e
//imprime el resultado en consola.

/* let first = "Hola"
console.info(first.repeat(3)) */


//Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y
//muestra el resultado en consola.

/* let cadena = "Esto es una oración de ejemplo"
console.warn(cadena.split(" ")) */


//Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase()
//e imprime el resultado en consola.

/* let cadena = "JavaScript"
console.info(cadena.toUpperCase()) */


//Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase()
//e imprime el resultado en consola.

/* let cadena = "EJEMPLO"
console.info(cadena.toLowerCase()) */


//Declara una variable numero y asígnale un número.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let numero = 8
console.error(typeof(numero)) */


//Declara una variable booleana y asígnale un valor booleano.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let bool = true
console.info(typeof(bool)) */


//Declara una variable arreglo y asígnale un array con al menos tres elementos.
//Muestra en consola la longitud del array.

/* let arreglo = ["Nombre", "Edad", "Correo"]
console.warn(arreglo.length) */


//Declara una variable objeto y asígnale un objeto con al menos tres propiedades.
//Muestra en consola una de las propiedades del objeto.

/* let objeto = {
    Nombre: "Majo",
    Apellido: "Pino",
    Edad: "19"
}
console.info(objeto.Apellido) */


//Declara una variable nulo y asígnale el valor null.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let nulo = null
console.error(typeof(nulo)) */


//Declara una variable indefinido y no le asignes ningún valor.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let indefinido
console.warn(typeof(indefinido)) */


//Declara una variable decimal y asígnale un número decimal.
//Muestra en consola su tipo de dato utilizando el operador typeof().

/* let decimal = 3.1426
console.warn(typeof(decimal)) */
