




let asistentes = {
    nombre: "Alberto",
    app: "tiktok"
}

// console.log(asistentes.nombre)
// console.log(asistentes.hasOwnProperty("setNombre"));


function Mascota(name, edad,tipo) {
    var mascota = Object.create(ObjetoConstructor);
    mascota.nombre = name;
    mascota.edad = edad;
    mascota.tipo = tipo;
    return mascota;
}

var ObjetoConstructor = {
    ladra: function(){
        return "Huau uau!!"
    }
}

var pulgas = Mascota("pulgas", 9, "perro");
var Gate = Mascota("Gate", 1.5,"gato");
var Abby = Mascota("Abby", 1,"perrita");
var Joselito = Mascota("Joselito", 2,"gato");



console.log(pulgas);
console.log(Abby);
console.log(Gate);
console.log(Joselito);


function Perro(name, edad,tipo) {
    this.nombre = name;
    this.edad = edad;
    this.tipo = tipo;
}

Perro.prototype.ladra = function(){
    return `${this.nombre} dice Huau uau!!`
}

var pulgas = new Perro("pulgas", 9, "perro");
var Abby = new Perro("Abby", 1,"perrita");

console.log(pulgas.ladra());


console.log(Abby);


class Gato {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    maullar(){
        return `${this.nombre} dice Miauuuuuuu!!`
    }
    // Conocer un dato
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
        return "Ok, 200"
    }
}

let Joselito = new Gato("Pancho",2)
let Gate = new Gato("Gate",1.5)

console.log(Joselito);
console.log(Joselito.getNombre());
console.log(Joselito.setNombre("Joselito"));
console.log(Joselito);

// ---------------------------------

// Herencia
// Calse :             Mascotas
// Sub Clases : Gatos | Perros | Aves 
// Sub Clases :    Guardias | Auxiliares | Chidos

class Mascota{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    habla(){
        return "Huau uau!!"
    }
}

class Gato extends Mascota{
    constructor(nombre, edad, color){
        super(nombre, edad);
        this.color = color;
    }
    caracteristicas(){
        return  `Hola me llamo ${this.nombre} tengo ${this.edad} años y soy de color ${this.color} `;
    }
}

let luna = new Gato("luna","1", "blanco y negro" )
console.log(luna.caracteristicas());


// ----------------
//  Herencia 

function Mascota(name, edad) {
    var mascota = Object.create(ObjetoConstructorMascota);
    mascota.nombre = name;
    mascota.edad = edad;
    return mascota;
}

function Gato(nombre, edad, color){
    let nuevoGato = Mascota(nombre, edad);
    Object.setPrototypeOf(nuevoGato,ObjetoConstructorGato);
    nuevoGato.color = color;
    return nuevoGato;
}

var ObjetoConstructorMascota = {
    ladra: function(){
        return "Huau uau!!"
    }
}
var ObjetoConstructorGato = {
    maullar: function(){
        return "Miauuuuuu!!"
    }
}

var pulgas = Mascota("pulgas", 9);
var Gate = Gato("Gate", 1.5,"Pardo");
console.log(pulgas);
console.log(Gate);