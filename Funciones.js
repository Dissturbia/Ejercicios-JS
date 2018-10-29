// Number convierte el número introducido de cadena a numérico
var radio = Number(prompt("Introduce el radio del círculo: "));

// Retorna el perímetro de un círculo
function perimetro(radio) {
    return 2 * radio * Math.PI;
}

// Retorna el área de un círculo
function area(radio) {
    return Math.pow(radio, 2) * Math.PI;
}

console.log("El valor del perímetro es: " + perimetro(radio));
console.log("El valor del área es: " + area(radio));


// Retorna el número al cuadrado
function cuadrado(num) {
  return num * num;
}

// llamada a la función cuadrado() con diferentes argumentos
console.log(cuadrado(3));
console.log(cuadrado(5));
console.log(cuadrado(7))


// Retorna el menor de los dos numeros pasados
function minimo(num1, num2) {
  if (num1 < num2) {
      return num1;
  } else {
      return num2;
  }
}

console.log(minimo(3, 5));// Muestra 3
console.log(minimo(11, 8)); // Muestra 8
console.log(minimo(2,2)); // Muestra 2



var nombre = prompt("Introduce tu nombre: ");
var apellido = prompt("Introduce tu apellido: ");

// Retorna un mensaje de bienvenida
function decirHola(nombre, apellido) {
  var mensaje = "Hola, " + nombre + " " + apellido;
  return mensaje;
}

// llamada a la función decirHola() con los argumentos nombre y apellido
console.log(decirHola(nombre, apellido));



// Funciones
function decirHola(nombre, edad) {
  return "Me llamo " + nombre + " y tengo " + edad + " años";
}

var saludo = decirHola("David", 23);
console.log(saludo);