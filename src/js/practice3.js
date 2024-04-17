// Ejercicios con números en JavaScript 

let num1 = 6
let num2 = 9

//1. Sumar dos números. 
/* document.write(num1+num2)
console.info(num1+num2) */

//2. Restar dos números.
/* document.write(num1-num2)
console.info(num1-num2) */

//3. Multiplicar dos números.
/* document.write(num1*num2)
console.info(num1*num2) */

//4. Dividir dos números.
/* document.write((num1/num2).toFixed(2))
console.info((num1/num2).toFixed(2)) */

//5. Calcular el módulo (resto) de una división.
/* document.write(num1%num2)
console.info(num1%num2) */

//6. Generar un número aleatorio entre 1 y 10.
/* let randomNumber = Math.round(Math.random() * (10 - 1) + 1)
document.write(randomNumber) */

//7.Elevar un número a la potencia de otro.
/* let potencia = Math.pow(2,2)
document.write(Math.pow(2,potencia)) */

//8.Calcular la raíz cuadrada de un número.
/* document.write(Math.sqrt(num2)) */

//9.Convertir grados Celsius a Fahrenheit.
/* let celcius = Number(prompt("Ingrese los grados celcius a traducir a farenheit"))
let celToFar = (celcius * 1.8) + 32
document.write(celToFar) */

//10.Calcular el área de un círculo.
/* let rad = Number(prompt("Ingrese el radio del círculo del que quieres el area"))
let area = Math.PI * (Math.pow(rad,2))
document.write(area) */

//11.Calcular el perímetro de un cuadrado.
/* let sides = Number(prompt("Ingrese la longitud de uno de los lados del cuadrado del que quieres el perímetro"))
let per = sides * 4
document.write(per) */

//12.Calcular el volumen de una esfera.
/* let rad = Number(prompt("Ingrese el radio de la esfera de la que quieres el volumen"))
let vol = (4/3) * Math.PI * (Math.pow(rad, 3))
document.write(vol) */

//13.Calcular el área de un triángulo.
/* let hight = Number(prompt("Ingrese la altura del triángulo del que quieres el area"))
let base = Number(prompt("Ingrese la base del triángulo del que quieres el area"))
let area = (base/2) * hight
document.write(area) */

//14.Generar la tabla de multiplicar del número 5.
/* let num = 5
for (let i = 0; i <= 10; i += 1){
    document.write(`${i}*${num}=${i*num}  | `)
} */

//15.Encontrar el número mayor entre 3, 7 y 2.
/* let list = [3,7,2]
document.write(Math.max(...list)) */

//16.Encontrar el número menor entre 10, 20 y 5.
/* let list = [10,20,5]
document.write(Math.min(...list)) */

//17.Calcular el promedio de 4, 6 y 8.
/* let promed = (4+6+8)/3
document.write(promed) */

//18.Calcular la factorial de 5.
let num = 5
let fact = num

for (let i = num-1; i >= 1; i -= 1) {
    fact *= i
}
console.log(fact)
/* for (let i = 1; i <= 5; i += 1){
    document.write(`${i}*${num}=${i*num}  | `)
    document.write(`${(i*num)}`)
} */