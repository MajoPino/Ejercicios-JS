//Ejercicios Arrays

//1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes.

let frutas = ["Banano", "Pera", "Fresa", "Curuba", "Manzana", "Coco", "Pitaya"]
console.log(frutas)
console.error("line break")

//2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola.

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    
}
console.error("line break")

/* 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la
consola. */

frutas.forEach(fruta => {
    console.log(fruta.toUpperCase())
});
console.error("line break")

//4. Crea un array llamado números que contenga los números del 1 al 10.

let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(numeros)
console.error("line break")

/* 5. Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la
consola */

let contador = 0

while (contador < numeros.length){
    console.log(numeros[contador])
    contador += 1
}
console.error("line break")

//6. Agrega una nueva fruta al final del array frutas.

frutas.push("Cereza")
console.log(frutas)
console.error("line break")

//7. Elimina el segundo elemento del array números.

delete numeros[2]
console.log(numeros)
console.error("line break")

//8. Invierte el orden de los elementos en el array frutas.

frutas.reverse()
console.log(frutas)
console.error("line break")

//9. Ordena el array numeros en orden descendente.
console.log(numeros)

console.error("line break")

/* 10. Crea una función llamada buscarFruta que tome como argumento una fruta y devuelva
true si esa fruta está en el array frutas, y false en caso contrario */

function buscarFruta(fruta) {
    if (frutas.includes(fruta)){
        console.log(true)
    } else{
        console.log(false)
    }
}
console.log(frutas)
buscarFruta('Papaya')
buscarFruta('Pera')

console.error("line break")

//11. Imprime en la consola el primer elemento del array frutas.

console.log(frutas[0])
console.error("line break")

//12. Imprime en la consola el último elemento del array numeros.

console.log(numeros.at(-1))
console.error("line break")

//13. Utiliza el método forEach para imprimir cada fruta pero convertida a array.

frutas = frutas.map(fruta => {
    return [fruta]
})

frutas.forEach(fruta => {
    console.log(fruta)
});
console.error("line break")

//14. Utiliza un bucle for of para imprimir cada número del array numeros en la consola.

for (const numero of numeros) {
    console.log(numero)
}
console.error("line break")

/* 15. Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array
numeros utilizando el método map. */


let duplicados1 = numeros.map(numero => {
    return numero * 2
})

console.log(duplicados1)
console.error("line break")

//16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números.

let array1 = [2,4,6,8]
let array2 = [5,10,15,20]
console.log(array1)
console.log(array2)
console.error("line break")

/* 17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados
en la consola. */

let suma1 = 0
array1.forEach(numero => {
    suma1 += numero    
});

let suma2 = 0
array2.forEach(numero => {
    suma2 += numero    
});

console.log(suma1)
console.log(suma2)

console.error("line break")

/* 18. Crea una función llamada buscarNumero que tome como argumentos un número y un
array de números, y devuelva true si el número está en el array, y false en caso contrario. */

function buscarNumero(numero, array) {
    if (array.includes(numero)){
        console.log(`El número ${numero} está en la lista [${array}]`)
    } else{
        console.log(`El número ${numero} no está en la lista [${array}]`)
    }
    
}
buscarNumero(5, [5, 10, 20, 55])
buscarNumero(2, [5, 10, 20, 55])

console.error("line break")

//19. Crea un array llamado edades que contenga al menos 5 números (edades).

let edades = [18, 25, 31, 14, 17, 29, 15, 27, 22]
console.error("line break")

/* 20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga
solo las edades mayores o iguales a 18 */

let mayoresDeEdad = []

edades.forEach(edad => {
    if(edad >= 18) {
        mayoresDeEdad.push(edad)
    }
})

console.log(mayoresDeEdad)
console.error("line break")

//21. Crea un array llamado precios que contenga al menos 3 números (precios de productos).

let precios = [2000, 10000, 200, 5000]
console.log(precios)
console.error("line break")

/* 22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los precios con un 21% de IVA aplicado a cada uno */

let preciosConIVA = precios.map(precio => {
    return precio * 1.21
})

console.log(preciosConIVA)
console.error("line break")

//23. Crea un array llamado duplicados que contenga algunos números duplicados.

let duplicados2 = [1, 30, 9, 12, 9, 25, 1, 2, 12]
console.log(duplicados2)
console.error("line break")

/* 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin duplicados en la consola. */

let sinDuplicados = []

duplicados2.forEach(numero => {
    if (!sinDuplicados.includes(numero)){
        sinDuplicados.push(numero)
    }
})
console.log('Duplicados', duplicados2)
console.log('Sin duplicados', sinDuplicados)

//Async way

let sinDuplicados2 = []

for (let i = 0; i < duplicados2.length; i++) {
    let duplicado = false;
    for (let j = 0; j < sinDuplicados2.length; j++) {
        if (duplicados2[i] === sinDuplicados2[j]) {
            duplicado = true;
            break;
        }
    }
    if (!duplicado) {
        sinDuplicados2.push(duplicados2[i]);
    }
}

console.log('Sin duplicados 2', sinDuplicados2)

//Another async way

const arrayOriginal = [1, 2, 3, 1, 2, 2, 3, 4, 4, 5]
let arrayFiltrado = [] // [1,2,3,4,5]
for (let i = 0; i < arrayOriginal.length; i++) {
    let element = arrayOriginal[i]
    let encontrado = false
    for (let j = 0; j < arrayFiltrado.length; j++) {
        if (element === arrayFiltrado[j]){
           encontrado = true
           break;
        }
    }
    if(encontrado===false){
        arrayFiltrado.push(element)
    }
}
console.log(arrayOriginal)
console.log("antes - despues")
console.log(arrayFiltrado)


//25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres.

let nombres1 = ["Marc", "Jake", "Steven"]
let nombres2 = ["Paul", "Stilgar", "Chani"]

console.log(nombres1)
console.log(nombres2)

//26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la consola

let concatenado = [...nombres1, ...nombres2]
console.log(concatenado)

//27. Crea un array llamado colores que contenga al menos 5 colores diferentes.

let colores = ["rojo", "negro", "cyan", "naranja", "blanco"]
console.log(colores)

//28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola.

console.log(colores.length)