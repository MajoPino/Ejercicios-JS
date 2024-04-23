// Ejercicios con Objetos en JavaScript

/* 1. Crea un objeto llamado persona con propiedades como 
nombre, edad y ciudad. */

let persona = {
    nombre: "Mateo",
    apellido: "Montoya",
    edad: 17,
    ciudad: "Medellín"
}

/* 2. Agrega una propiedad adicional al objeto persona que 
represente su ocupación.  */

persona.ocupacion = "Estudiante"

/* 3. Accede a una propiedad del objeto persona y muestra su valor 
en la consola. */

const {nombre} = persona
console.log(nombre)

/* 4. Crea otro objeto llamado libro con propiedades como título, 
autor y año de publicación. */

let libro = {
    título: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    añoPublicación: "1967"
}

/* 5. Combina las propiedades de los objetos persona y libro en un 
nuevo objeto llamado informacion.  */

let informacion = {...persona,  ...libro}
console.log(informacion)

/* 6. Cambia el valor de una propiedad en el objeto persona.  */

persona.ocupacion = "Agente del gobierno de Corea del Norte"
console.log(persona)

/* 7. Elimina una propiedad del objeto libro. */

delete libro.autor
console.log(libro)

/* 8. Crea un objeto llamado coche con propiedades como modelo, 
marca y año. */

let coche = {
    nombreCarro: "AirCar",
    modelo: "Biplaza",
    marca: "Klein Vision",
    año: "2021"
}

/* 9. Muestra todas las propiedades del objeto coche en la consola. */

console.log(coche)

/* 10. Agrega un método al objeto coche que imprima un mensaje 
en la consola.  */

coche.mensaje = {
    function (){
        console.log(`This ${coche.nombreCarro} is the new technology from the future`)
    }
}

/* 11. Crea un objeto llamado circulo con propiedades como radio y 
color. */

let circulo = {
    color: "Aguamarina",
    radio: "20"
}

/* 12. Calcula el área del círculo utilizando la fórmula A = πr² y 
muestra el resultado.  */

let areaCirc = Math.PI * (Math.pow(circulo.radio,2))
console.log(areaCirc)

/* 13. Crea un objeto llamado rectangulo con propiedades como 
ancho y alto. */

let rectangulo = {
    ancho: 40,
    alto: 75
}

/* 14. Calcula el perímetro del rectángulo utilizando la fórmula P = 2 
* (ancho + alto) y muestra el resultado.  */

const perimetro = 2 * (rectangulo.ancho + rectangulo.alto)
console.log(perimetro)

/* 15. Combina las propiedades de los objetos circulo y rectangulo 
en un nuevo objeto llamado formas */

let formas = {...circulo, ...rectangulo}
console.log(formas)

/* 16. Crea un objeto llamado computadora con propiedades como 
marca, modelo y precio. */

let computadora = {
    marca: "Macbook Air",
    modelo: "13''",
    precio: 3_889_000.00
}

/* 17. Muestra el precio de la computadora en la consola.  */

console.log(computadora.precio)

/* 18. Agrega una propiedad al objeto computadora que indique si 
tiene o no una tarjeta gráfica. */

computadora.tarjetaGráfica = "si"
console.log(computadora)

/* 19. Crea un objeto llamado mascota con propiedades como 
nombre, especie y edad. */

