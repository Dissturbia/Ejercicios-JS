// Muestra el número de días del mes (version1)

var mes = Number(prompt("Introduce el número del mes:"));

  /* Solución 1
  Date cuenta de que en ciertos casos no hemos utilizado el break. Así, pasamos
  de un caso al siguiente para todos los meses que tengan los mismos días, hasta
  llegar al caso que muestre el mensaje apropiado y salga del switch.
  Con esto, evitamos la duplicación de código de console.log().
  */

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
      console.log("Este mes tiene 31 días.");
      break;
  case 4:
  case 6:
  case 9:
  case 11:
      console.log("Este mes tiene 30 días.");
      break;
  case 2:
      console.log("Este mes tiene 28 días");
      break;
  default:
      console.log("No has elegido un mes del 1 al 12");
}

// Muestra el número de días del mes (version2)

var mes = Number(prompt("Introduce el número del mes:"));

  /* Solución que combina if y switch
  El if inicial permite eliminar todos valores que no sean números entre 1 y 12.
  Después, la variable por defecto "numeroDias" permite ahorrarnos todos los
  casos de meses con 31 días.
   */

if ((mes >= 1) && (mes <= 12)) {
  var numeroDias = 31;
  switch (mes) {
    case 4:
    case 6:
    case 9:
    case 11:
        numeroDias = 30; // si se verifica uno de estos casos, actualizamos la variable
        break;
    case 2:
        numeroDias = 28; // si se verifica este caso, actualizamos la variable
        break;
    }
    console.log("Este mes tiene " + numeroDias + " días.");
} else {
    console.log("No has elegido un mes del 1 al 12");
}