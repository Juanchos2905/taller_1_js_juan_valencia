/*Calcule el cuadrado de 2 números ingresados.*/

/*ALGORITMO CON ARRAYS*/
console.warn("Algoritmo que calcula el cuadrado de 2 números ingresados");
const cuadrados = new Array(2);

for (let i = 0; i < cuadrados.length; i++) {
  let num = Number(prompt("Ingrese el número: " + (i + 1)));
  cuadrados[i] = num;
  console.log(`El cuadrado de [${num}] es: [${num * num}]`);
}

/* ALGORITMO SIN ARRAYS


const num1 = Number(prompt("Ingrese un número: ")),
  num2 = Number(prompt("Ingrese otro número: "));

console.log(`El cuadrado de ${num1} es: ${num1 * num1}`);
console.log(`El cuadrado de ${num2} es: ${num2 * num2}`);
*/
