// 1. Comparar dos números

var numero1 = Number(prompt("Introduce el primer número:"));
var numero2 = Number(prompt("Introduce el segundo número:"));

if (numero1 < numero2) {
    console.log(numero1 + " es más pequeño que " + numero2);
} else if (numero1 > numero2) {
    console.log(numero1 + " es más grande que " + numero2);
} else {
    console.log(numero1 + " y " + numero2 + " son iguales");
}


// Muestra la hora un segundo más tarde

var horas = Number(prompt("Introduce las horas:"));
var minutos = Number(prompt("Introduce los minutos:"));
var segundos = Number(prompt("Introduce los segundos:"));

// Verificamos todos los casos que pueden dar lugar a error
if ((horas >= 0) && (horas <= 23) && (minutos >= 0) && (minutos <= 59) &&
    (segundos >= 0) && (segundos <= 59)) {
    segundos++; // Se incrementan los segundos
    if (segundos === 60) {
        // Hay que pasar los segundos a 0 y sumar una hora más
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            // Hay que pasar los minutos a 0 y sumar una hora más
            minutos = 0;
            horas++;
            if (horas === 24) { // La siguiente hora es medianoche, empieza un nuevo día
                horas = 0;
            }
        }
    }
    console.log("En un segundo, serán las " + horas + " horas, " +
        minutos + " minutos y " + segundos + " segundos");
} else {
    console.log("Hora incorrecta");
}



//mayor,menor,igual

var numero = Number(prompt("Introduce un número"));
/*
Si numero es mayor que 0
  -> Muestra por consola -> numero es mayor que 0
Si numero es menor que 0
  -> Muestra por consola -> numero es menor que 0
Si no
  -> Muestra por consola -> numero es igual a 0
*/
if (numero > 0) {
  console.log(numero + " es mayor que 0");
} else if (numero < 0) {
  console.log(numero + " es menor que 0");
} else {
  console.log(numero + " es igual a 0");


//Deduce los valores de las variables

var num1 = Number(prompt("Introduce el primer número:"));
var num2 = Number(prompt("Introduce el segundo número: :"));
var num3 = Number(prompt("Introduce el tercer número:"));

if (num1 > num2) {
    num1 = num3 * 2;
} else {
    num1++;
    if (num2 > num3) {
        num1 = num1 + num3 * 3;
    } else {
        num1 = 0;
        num3 = num3 * 2 + num2;
    }
}

console.log("num1 = " + num1);
console.log("num2 = " + num2);
console.log("num3 = " + num3);



}

