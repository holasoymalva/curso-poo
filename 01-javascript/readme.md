# Curso de Programacion Orientada a Objetos en Javascript

## Indice

- Programación orientada a objetos (POO) 

- Clases y objetos en Javascript
    - Declaración de clases en Javascript.
    - Instanciación de objetos en Javascript.
    - Propiedades y métodos en Javascript.

- Herencia en Javascript
    - Extensión de clases en Javascript.
    - Sobrescritura de métodos en Javascript.
    - Llamada a métodos de la clase padre en Javascript.

- Encapsulamiento en Javascript
    - Protección de propiedades y métodos en Javascript.
    - Métodos getters y setters en Javascript.
    - Utilización de closures en Javascript.

- Polimorfismo en Javascript
    - Implementación de polimorfismo en Javascript.
    - Métodos y propiedades abstractos en Javascript.
    - Interfaces en Javascript.

# Programación orientada a objetos (POO) Old School

```javascript
function Mascota(nombre, edad){
    var mascota = Object.create(ObjetoConstructor);   
    mascota.nombre =  nombre;
    mascota.edad = edad;
    return mascota;
}
var ObjetoConstructor = {
    ladra: function(){
        return "Uauuu Uaauu!"
    }
}

var mascota1 = Mascota("Anubis",15);
var mascota2 = Mascota("Rambo",3);
var mascota3 = Mascota("Leonidas",8);

console.log(mascota1.ladra());
console.log(mascota2);
console.log(mascota3);
```


```javascript

// Instancias 2008-2013

function Mascota(nombre, edad){
    this.nombre =  nombre;
    this.edad = edad;
}

Mascota.prototype.ladra = function(){
    return `${this.nombre} dice Uauuu Uaauu!`
}

var mascota1 = new Mascota("Anubis",15);
var mascota2 = new Mascota("Rambo",3);
var mascota3 = new Mascota("Leonidas",8);

console.log(mascota1.ladra());
console.log(mascota2);
console.log(mascota3);

```


```javascript

// JS moderno

class Mascota{
    constructor(nombre, edad){
        this.nombre =  nombre;
        this.edad = edad;
    }
    ladra(){
        return `${this.nombre} dice Uauuu Uaauu!`
    }
}

var mascota1 = new Mascota("Anubis",15);
var mascota2 = new Mascota("Rambo",3);
var mascota3 = new Mascota("Leonidas",8);

console.log(mascota1.ladra());
console.log(mascota2);
console.log(mascota3);


class Gato{
    constructor(name, edad){
        this.edad = edad;
        this.nombre = name;
    }
    maullar(){
        return `${this.nombre} dice Miauuuuuuu!!`
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(name){
        this.nombre = name;
        return this.nombre;
    }
}

let gato1 = new Gato("Machu",2);
let gato2 = new Gato("fior",1);
let gato3 = new Gato("wilson",2);
let gato4 = new Gato("Kamau",10);

console.log(gato1.getNombre());
console.log(gato1.setNombre("Michi"));
console.log(gato1);
console.log(gato2.maullar());
console.log(gato3);
console.log(gato4);
```

# Herencia

``` js
// SUB Clases : Herencia
// Clase 1: Mascota
// Clase 2: Perro \ Gato \ Canario

function Mascota(nombre, edad){
    var mascota = Object.create(ObjetoConstructorMascota);   
    mascota.nombre =  nombre;
    mascota.edad = edad;
    return mascota;
}

function Gato(nombre, edad, color){
    var nuevoGato = Mascota(nombre,edad);
    Object.setPrototypeOf(nuevoGato, ObjetoConstructorGato);
    nuevoGato.color = color;
    return nuevoGato;
}

var ObjetoConstructorMascota = {
    habla: function(){
        return "Uauuu Uaauu!"
    }
}
var ObjetoConstructorGato = {
    maullar: function () {
        return "Miaaaaaau!!"
    } 
}


var gato1 = Gato("Michi",2,"vainilla");
var gato2 = Gato("fior",1,"black");
var gato3 = Gato("wilson",2,"pardo");
var gato4 = Gato("Kamau",10);

console.log(gato1);
console.log(gato2);
console.log(gato3);
console.log(gato4);
```

``` js
// SUB Clases : Herencia Moderna
// Clase 1: Mascota
// Clase 2: Perro \ Gato \ Canario

class Mascota{
    constructor(nombre, edad){
        this.nombre =  nombre;
        this.edad = edad;
    }   
    habla(){
        return "Uauuu Uaauu!"
    }
}

class Gato extends Mascota{
    constructor(nombre, edad, color){
        super(nombre,edad);
        this.color = color;
    }
    maullar() {
        return "Miaaaaaau!!"
    }
}

var gato1 = new Gato("Tyson",2,"blanco");
var gato2 = new Gato("Haru", 2, "blanco y negro");

console.log(gato1);
console.log(gato2);

```

``` js
// SUB Clases : Herencia con polimorfismo

// Clase 1: Mascota
// Clase 2: Perro \ Gato \ Canario

class Mascota{
    constructor(nombre, edad){
        this.nombre =  nombre;
        this.edad = edad;
    }   
    saludar(){
        return "Uauuu Uaauu!"
    }
}

class Gato extends Mascota{
    constructor(nombre, edad, color){
        super(nombre,edad);
        this.color = color;
    }
    // Metodo Saludar (Palimorfismo)
    saludar() {
        return "Miaaaaaau!!"
    }
}

class Canario extends Mascota{
    constructor(nombre, edad, color){
        super(nombre,edad);
        this.color = color;
    }
    // Metodo Saludar (Palimorfismo)
    saludar() {
        return "Pioooo tequila!!"
    }
}

var gato1 = new Mascota("Tyson",2,"blanco");
var gato2 = new Gato("Haru", 2, "blanco y negro");
var canario = new Canario("Piolin", 30, "Amarillo");

console.log(gato1.saludar());
console.log(gato2.saludar());
console.log(canario.saludar());

```