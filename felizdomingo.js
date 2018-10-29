/*
  4. Feliz domingo versión2 -> solucion con concatenacion
  Escribe un programa que muestre los números del 1 al 100, con las siguientes excepciones:
    - Para los múltiplos de 3 muestra la palabra "Feliz" en lugar del número.
    - Para los múltiplos de 5 muestra la palabra "Domingo" en lugar del número.
    - Para los múltiplos de 3 y 5 muestra la palabra "FelizDomingo" en lugar del número.
*/




for (var i = 1; i <= 100; i++) {
  var mensaje = ""; // Mensaje a mostrar, inicialmente vacío
  if (i % 3 === 0) {
      // Número divisible por 3: añadimos "Feliz" al mensaje
      mensaje += 'Feliz';
  }
  if (i % 5 === 0) {
      // Número divisible por 5: añadimos "Buzz" al mensaje
      mensaje += 'Domingo';
  }
  if (mensaje === "") {
      // Si el mensaje está vacío, el número no es divisible ni por 3, ni por 5:
      // el mensaje mostrado será el número
      mensaje = i;
  }
  console.log(mensaje);
}