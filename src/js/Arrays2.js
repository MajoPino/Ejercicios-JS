//Ejercicios Arrays

//1. Crea un lista que almacene 10 nombres completos y ordenados alfabéticamente

let names = ["Carlos", "Andrés", "Nathaly", "Juan", "Rebecca", "Catalina", "Luis", "Violeta", "Mateo", "Isa"]

let namesOrder = names.sort()
console.log(namesOrder)

//2. Crea una

let numbers = [11, 5, 3, 77, 0, 23, 6, 36, 84, 2, 56, 4]
console.log(numbers)

//3. Utilizar un bucle for para sumar todos los elementos de un array de números.

let newArray = []

for (let i = 0; i < numbers.length; i++) {
    num = i + numbers[i]
    newArray.push(num)
    
}
console.log(newArray)