/*
   FelizDomingo versión2
  Escribe un programa que muestre los números del 1 al 100, con las siguientes excepciones:
    - Para los múltiplos de 3 muestra la palabra "Feliz" en lugar del número.
    - Para los múltiplos de 5 muestra la palabra "Domingo" en lugar del número.
    - Para los múltiplos de 3 y 5 muestra la palabra "Feliz domingo" en lugar del número.
*/

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
     console.log("FelizDomingo");
   } else if (i % 3 == 0) {
     console.log("Feliz");
   } else if (i % 5 == 0) {
     console.log("Domingo");
   } else {
     console.log(i);
   }
 }

/*
  Tener en cuenta que la condición (i % 3 == 0 && i % 5 == 0) tiene que ir antes de (i % 3 == 0) y (i % 5 == 0)
  ya que  éstas tambien cumplen la condición y entonces se ejecutaría el bloque de código con Feliz o Domingo en lugar
  de FelizDomingo.
