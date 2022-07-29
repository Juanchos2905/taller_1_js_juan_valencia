/*Hacer un algoritmo que calcule e imprima los números primos comprendidos
entre 1 y 100.*/
console.warn('Imprimiendo los números primos comprendidos entre 1 y 100')

let cont = 0

for (let i = 2; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) cont = cont + 1
  }
  if (cont <= 2) console.log(i)
  cont = 0
}
