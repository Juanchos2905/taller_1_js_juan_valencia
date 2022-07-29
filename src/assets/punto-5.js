/* Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el
mes al que corresponde el valor ingresado, la cantidad de días que tiene
ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5,
entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”.*/

let numero = Number(prompt('Ingrese un número entre 1 y 12'))

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

const signos = [
  'Aries',
  'Tauro',
  'Géminis',
  'Cáncer',
  'Leo',
  'Virgo',
  'Libra',
  'Escorpio',
  'Sagitario',
  'Capricornio',
  'Acuario',
  'Piscis',
]

const dias = [28, 30, 31]

const nums = {
  0: {
    mes: meses.indexOf('Enero'),
    signos: [signos.indexOf('Capricornio'), signos.indexOf('Acuario')],
    dia: dias.indexOf(31),
  },

  1: {
    mes: meses.indexOf('Febrero'),
    signos: [signos.indexOf('Acuario'), signos.indexOf('Capricornio')],
    dia: dias.indexOf(28),
  },

  2: {
    mes: meses.indexOf('Marzo'),
    signos: [signos.indexOf('Capricornio'), signos.indexOf('Aries')],
    dia: dias.indexOf(31),
  },

  3: {
    mes: meses.indexOf('Abril'),
    signos: [signos.indexOf('Aries'), signos.indexOf('Tauro')],
    dia: dias.indexOf(30),
  },

  4: {
    mes: meses.indexOf('Mayo'),
    signos: [signos.indexOf('Tauro'), signos.indexOf('Géminis')],
    dia: dias.indexOf(31),
  },

  5: {
    mes: meses.indexOf('Junio'),
    signos: [signos.indexOf('Géminis'), signos.indexOf('Cáncer')],
    dia: dias.indexOf(30),
  },

  6: {
    mes: meses.indexOf('Julio'),
    signos: [signos.indexOf('Cáncer'), signos.indexOf('Leo')],
    dia: dias.indexOf(31),
  },

  7: {
    mes: meses.indexOf('Agosto'),
    signos: [signos.indexOf('Leo'), signos.indexOf('Virgo')],
    dia: dias.indexOf(31),
  },

  8: {
    mes: meses.indexOf('Septiembre'),
    signos: [signos.indexOf('Virgo'), signos.indexOf('Libra')],
    dia: dias.indexOf(30),
  },

  9: {
    mes: meses.indexOf('Octubre'),
    signos: [signos.indexOf('Libra'), signos.indexOf('Escorpio')],
    dia: dias.indexOf(31),
  },

  10: {
    mes: meses.indexOf('Noviembre'),
    signos: [signos.indexOf('Escorpio'), signos.indexOf('Sagitario')],
    dia: dias.indexOf(30),
  },

  11: {
    mes: meses.indexOf('Diciembre'),
    signos: [signos.indexOf('Sagitario'), signos.indexOf('Capricornio')],
    dia: dias.indexOf(31),
  },
}

const imprimirEnConsola = (num) => {
  let mensaje = `El mes es ${meses[nums[num].mes]}, los signos son ${
    signos[nums[num].signos[0]]
  } y ${signos[nums[num].signos[1]]}, y tiene ${dias[nums[num].dia]} días`
  console.log({ mensaje })
}

imprimirEnConsola(numero - 1)
