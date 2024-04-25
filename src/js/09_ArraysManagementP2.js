
console.group("Reversed")

/* let array1 = [1,2,3,4,5,6,7,8,9,10]

let array2 = array1.reverse(function(item) {
    return item
})

console.log(array1)
console.log(array2) */
//

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array2 = array1.toReversed(function (item) {
    return item
})

console.log(array1)
console.log(array2)

//Crear una lista de 10 frutas y luego reversarlas, pero cada una de las frutas deben quedar en mayúsculas en el nuevo array

let frutas = ["Papaya", "Lychee", "Piña", "Curuba", "Mango", "Limón", "Maracuyá", "Mamoncillo", "Fresa", "Arándano"]
let frutas1 = frutas.map(fruta => {
    return (fruta.toUpperCase())
})

let frutasprev = frutas1.toReversed(fruta => { return fruta })

console.log(frutas)
console.log(frutasprev)


//metdodo para ordenar una lista

let listaDesordenada = ["lucas", "maría", 23, "ana", 1, "pablo", true]
listaDesordenada.sort()

console.log(listaDesordenada)

let listaNumericaDesordenada = [1, -56, 12, 6.1, 9, 88]
let listaNumericaOrdenada = listaNumericaDesordenada.toSorted()

console.log(listaNumericaDesordenada)
console.log(listaNumericaOrdenada)

//Foreach

let listaCoders = ["María", "Pablo", "Lucas"]

//Puedo acceder tanto al valor como al índex
listaCoders.forEach(function (coder, index) {
    console.log("El coder", coder, "está en la posición", index)
})

/* for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} //indices

for (const iterator of object) {
    
} */ //valores

//method every

let listaNum = [5, 3, 55, 65, 3, 8, 42, 77]

/* let respuesta = listaNum.every(numero => numero>0) */ //Validar una lista en base a parámetros
/* console.log(respuesta) */
/* let respuesta = true

for (let i = 0; i < listaNum.length; i++) {
    if (listaNum[i] <= 0){
        respuesta = false
        break;
    }
}
console.log(respuesta) */

let respuesta = listaNum.every(numero => numero%2 == 0)
console.log(respuesta)
/* let userName = prompt("Ingrese su nombre de usuario") */

/* let checkNombre = listaCoders.some(nombre => nombre === userName) */

//Devuelve true si Alguno de los elementos coincide
/* console.log(listaCoders)
console.log(checkNombre) */


//Filter

let listaTen = [1,2,3,4,5,6,7,8,9,10]

console.log(listaTen)

let listaOrder1 = listaTen.filter(numero => numero%2 == 0)
console.log(listaOrder1)

let listaOrder2 = listaTen.filter(numero => numero%2 != 0)
console.log(listaOrder2)

//Async way

let pares = []
let impares = []

for (let i = 0; i < listaTen.length; i++) {
    if (listaTen[i] % 2 === 0){
        pares.push(listaTen[i])
    } else {
        impares.push(listaTen[i])
    }
    
}

console.log(listaTen)
console.log(pares)
console.log(impares)