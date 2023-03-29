// SUB Clases : Herencia con polimorfismo

// Clase 1: Mascota
// Clase 2: Perro \ Gato \ Ave
// Clase 3:  Canario  \  Codornices \ Gallinas

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

class Ave extends Mascota{
    constructor(nombre, edad, color){
        super(nombre,edad);
        this.color = color;
    }
    // Metodo Saludar (Polimorfismo)
    saludar() {
        return "Pioooo tequila!!"
    }
}
class Canario extends Ave{
    constructor(nombre, edad, color,canto){
        super(nombre,edad,color);
        this.canto = canto;
    }
    // Metodo Saludar (Polimorfismo)
    saludar() {
        return "Estoy cantando!!"
    }
}

var gato1 = new Mascota("Tyson",2,"blanco");
var gato2 = new Gato("Haru", 2, "blanco y negro");
var canario = new Canario("Piolin", 30, "Amarillo","Tenor");
var cuervo = new Ave("Poe", 5, "Azulado");

console.log(gato1);
console.log(gato2);
console.log(canario);
console.log(cuervo);