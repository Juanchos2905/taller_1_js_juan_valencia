/*Escribir un algoritmo para calcular el índice de masa corporal de una
persona.*/

//Algoritmo con array
console.warn(
  'algoritmo para calcular el índice de masa corporal de una persona.'
)

//Declarar array
const calculadorImc = new Array(2)

alert('A continuación ingresar su peso en kg, luego su altura en metros')
for (let i = 0; i < calculadorImc.length; i++) {
  let pesoAltura = Number(prompt(': '))
  calculadorImc[i] = pesoAltura
}

console.warn('Los datos ingresados fueron: ')
//Se puede omitir esta línea de código, pues es solo para mostrar los datos ingresasdo aplicando los tipos de for
calculadorImc.forEach((calculadoImc) => console.log({ calculadoImc }))

console.log(
  `Su IMC es de: ${(
    calculadorImc[0] /
    (calculadorImc[1] * calculadorImc[1])
  ).toFixed(1)}`
)

/* Algoritmo sin array
console.warn(
  "algoritmo para calcular el índice de masa corporal de una persona."
);

let peso = Number(prompt("Ingrese su peso en kg: ")),
  altura = Number(prompt("Ingrese su altura en Metros: "));

console.log(`Su IMC es de: ${(peso / (altura * altura)).toFixed(1)}`);
*/
