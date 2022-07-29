/*8. Elaborar un algoritmo que genere un arreglo de N elementos usando la función
random, de igual forma se pueble usando esta misma función y encuentre el
valor y la posición del mayor elemento resultante.*/

//Ejercico unicamente realizado con array debido a que lo piden.
const posiciones = Number(
  prompt("Ingrese el el número de posiciones que desea en el arreglo: ")
);

let valMax = 0,
  posiMax = 0;

const nElementos = new Array(posiciones);

for (let i = 0; i < nElementos.length; i++) {
  nElementos[i] = Math.random() * 100;
  if (nElementos[i] > valMax) {
    valMax = nElementos[i];
    posiMax = i;
  }
}

for (let j in nElementos) {
  console.log(`[${Math.trunc(nElementos[j])}] - posición: ${j}`);
}

console.log(
  `El número mayor que se encuentra en el arreglo es: ${Math.trunc(
    valMax
  )} y está en la posicion ${posiMax}`
);
