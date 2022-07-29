/* En una sala de cine se están estrenando 4 películas, se desea crear un
algoritmo que al ingresar un número del 1 al 4 se muestre el nombre de la
película, la categoría y su valor de entrada.
● La primera película es Batman, su categoría es acción y el valor de entrada
es 5,000.
● La segunda película es Los Vengadores, su categoría es acción y el valor de
la entrada es 10,000.
● La tercera película es SuperCool, su categoría es comedia y el valor de la
entrada es 8,000.
● Por último la cuarta película es rápido y furioso 5, subcategoría es de
aventura eso valor de entrada es 15,000*/

const numPeli = Number(
  prompt(
    "Ingrese un número de 1 a 4 para conocer las peliculas en cartelera, su genero y su valor de entrada."
  )
);

switch (numPeli) {
  case 1:
    console.log(
      "La primera película es Batman, su categoría es acción y el valor deentrada es $5,000."
    );
    break;
  case 2:
    console.log(
      "La segunda película es Los Vengadores, su categoría es acción y el valor de la entrada es $10,000."
    );
    break;
  case 3:
    console.log(
      "La tercera película es SuperCool, su categoría es comedia y el valor de la entrada es $8,000."
    );
    break;
  case 4:
    console.log(
      "La cuarta película es rápido y furioso 5, subcategoría es de aventura eso valor de entrada es $15,000."
    );
    break;
  default:
    console.log(
      'ERROR. Usted ingreso", numPeli, "Por favor ingrese un número de 1 a 4'
    );
    break;
}
