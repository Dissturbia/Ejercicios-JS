var coche = {
  color: "rojo",
  marca: "Seat",
  modelo: "Toledo",
  arrancado: false,

  arrancar: function() {
    console.log("Coche arrancado");
    // this apunta al objeto al cual pertenece el método -> coche
    // cambiamos el estado de la característica arrancado a true
    return this.arrancado = true;
  }
}

console.log(coche.color);
console.log(coche.marca);
console.log(coche.modelo);
console.log(coche.arrancado);
console.log('-------------')
console.log(coche.arrancar());


//cuenta

var cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function(cantidad) {
    console.log("Has ingresado " + cantidad + " euros");
    return this.saldo += cantidad;
  },

  extraer: function(cantidad) {
    console.log("Has extraido " + cantidad + " euros");
    return this.saldo -= cantidad;
  },

  informar: function() {
    return "Nombre del titular: " + this.titular + "\nEl saldo actual de la cuenta es: " + this.saldo + " euros";
  }

}

console.log(cuenta.titular);
console.log(cuenta.saldo);
console.log('-------------')
console.log(cuenta.ingresar(80));
console.log(cuenta.extraer(20));



// Objetos

var Personaje = {
  nombre: "Nombre",
  vida: 100,
  fuerza: 15,

  describir: function() {
    var descripcion = this.nombre + " tiene "
                    + this.vida + " puntos de vida y "
                    + this.fuerza + " de fuerza";
    return descripcion;
  }
}

var perso1 = Object.create(Personaje);
perso1.nombre = "Héroe";
perso1.vida = 80;
perso1.fuerza= 20;

var perso2 = Object.create(Personaje);
perso2.nombre = "Mago";
perso2.vida = 70;
perso2.fuerza = 12;

console.log(perso1.describir());

//Otro ejercicio

var Perro = {
    // Inicia el perro
    init: function (nombre, raza, talla) {
      this.nombre = nombre;
      this.raza = raza;
      this.talla = talla;
    },

    ladrar: function() {
      var ladrido = "¡guau!";
      if (this.talla < 25) {
          ladrido = "¡buf buf!";
      } else if (this.talla > 60) {
          ladrido = "¡GRRRRRRRRRR!";
      }
      return ladrido;
    }

}

var peluca = Object.create(Perro);
peluca.init("Peluca", "Pastor Aleman", 40);
console.log(peluca.nombre + " es un " + peluca.raza + " y mide " + peluca.talla + " cm");
console.log("¡Mira un gato! " + peluca.nombre + " ladra: " + peluca.ladrar());

var pitu = Object.create(Perro);
pitu.init("Pitu", "Salchicha", 19);
console.log(pitu.nombre + " es un " + pitu.raza + " y mide " + pitu.talla + " cm");
console.log("¡Mira un gato! " + pitu.nombre + " ladra: " + pitu.ladrar());



// Objetos


var personaje = {
  nombre: "Héroe",
  vida: 100,
  fuerza: 15,

  describir: function() {
    var descripcion = this.nombre + " tiene "
                    + this.vida + " puntos de vida y "
                    + this.fuerza + " de fuerza";
    return descripcion;
  }
}

console.log(personaje.describir())



console.log(perso2.describir());

console.log(cuenta.informar());