var array = [1,2,3,4,5];
// función que elimina el último elemento del array y añade nuevoElemento
function reemplazaElemento(array, nuevoElemento) {
  array.pop();
  array.push(nuevoElemento);
  return array;
}

reemplazaElemento(array, 50);


// Arrays

var peliculas = ["Matrix", "Shrek", "El padrino"];

peliculas.push("V de vendetta");

peliculas[1] = "El hobbit";

console.log(peliculas.length); //4

for (var i=0; i < peliculas.length; i++) {
  console.log(peliculas[i]);
}

//numeros

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function sumarArray(array) {
  var suma = 0;
  array.forEach(function(numero) {
    suma += numero;
  });
  return suma;
}

console.log(sumarArray(numeros));