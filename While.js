//  Introduce un número mayor que 10

var numero = 0; // Valor inicial que permite entrar en el bucle

while (numero <= 10) {
  numero = Number(prompt("Introduce un número mayor que 10"));
}




// Introduce un número entre 50 y 100

var numero = 0; // Valor inicial que permite entrar en el bucle
while ((numero < 50) || (numero > 100)) {
    numero = Number(prompt("Para terminar el bucle, introduce un número entre 50 y 100:"));
}




// Muestra la tabla de multiplicar del número elegido

var numero = 0; // Valor inicial que permite entrar en el bucle

while (numero < 2 || numero > 10) {
  numero = Number(prompt("Elige una tabla de multiplicar entre 2 y 10"));
}

var i = 1; // Variable contador. Usamos el incremento para obtener el valor de cada vuelta
while (i <= 10) {
  console.log(numero + " * " + i + " = " + numero * i);
  i++;
}


//script

var letra = "";
while (letra !== "x") {
  letra = prompt("Introduzca la letra x para salir");
  console.log(letra);
}


// 4. Construye y muestra por consola un "triángulo" de 7 líneas

var linea = "";
var i = 1;
while (i <= 7) {
    linea = linea + "*"; // Otra posibilidad es usar el operador +=
    // linea += "*";
    console.log(linea);
    i++;
}

/*
Solución:
*
**
***
****
*****
******
*******
*/