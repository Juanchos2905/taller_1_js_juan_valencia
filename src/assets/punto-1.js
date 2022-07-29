/*1. Escribir un algoritmo que valide si la suma de 2 números ingresados es
positiva, negativa o cero.*/
console.warn(
  'algoritmo que valide si la suma de 2 números ingresados es positiva, negativa o cero'
)

//Inicialización del arreglo.
const suma = new Array(2)
//Variable sum: Variable acumuladora que se encarga de la suma de los dos números.
let sum = 0

for (let i = 0; i < suma.length; i++) {
  let num = Number(prompt('Ingrese el número ' + (i + 1)))
  suma[i] = num
  sum = sum + suma[i]
}

if (sum > 0) {
  console.log('El resultado de la suma es positiva')
  console.log(`El resultado de la suma es: [${sum}]`)
} else if (suma === 0) {
  console.log('El resultado de la suma es cero')
  console.log(`El resultado de la suma es: [${sum}]`)
} else {
  console.log('El resultado de la suma es negativo')
  console.log(`El resultado de la suma es: [${sum}]`)
}

//Ejercicio sin vectores.
/* const num1 = Number(prompt('Ingrese el número 1'))
 const num2 = Number(prompt('Ingrese el número 2'))

 const suma = num1 + num2

 if (suma > 0) {
   alert(Es un número positivo)
   alert(El resultado de la suma es ${suma})
 } else if (suma === 0) {
   alert(Es cero)
   alert(El resultado de la suma es ${suma})
 } else {
   alert(Es un número negativo)
   alert(El resultado de la suma es ${suma})
 }*/

/*Plus #1 del taller: Todos los puntos están realizados con arrays en la parte superior y
 sin arrays en la parte inferior para reforzar dicho tema, excepto el Punto-8.js, pues unicamente se realizo con array debido a que lo piden en el enunciado.
 
 Plus #2 del taller: Se utilizán todas las estructuras de los for vistas, while,
 condicionales (if y switch) y operadores.
 
 Plus #3 del taller: Se explica cada variable no entendible a simpe vista.*/

/*Este repositorio contiene el taller número 1 que consta de 8 puntos y abarca los temas de variables, constates, diagramas de flujo de datos,
 control (estructura secuencial y estructuras selectivas), operadores, switch, cilos y arreglos.
 
 En cada solución propuesta se encontrará: poner los plus*/
