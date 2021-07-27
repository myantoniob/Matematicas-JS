//#3 - Traduce a código JavaScript las variables del ejemplo

var nombre = "Mynor";
var apellido = "Ramirez";
var nombreDeUsuario = "myantoniob";
var edad = 24;
var correo = "my@gt";
var mayorEdad = true;
var dineroAhorrado = 1000;
var deudas = 250;


console.log(`el nombre es ${nombre}, y el apellido es ${apellido}`);

console.log(dineroAhorrado - deudas);

function textoNombre (nombre, apellido, nombreDeUsuario){
    let completeName = nombre +" "+ apellido;
    console.log( `Mi nombre es  ${completeName}`+ ", pero prefiero set llamado "+ nombreDeUsuario);

}

textoNombre(nombre, apellido, nombreDeUsuario);


var tipoSuscripcion = "Basic";

if (tipoSuscripcion == "Free") {
    console.log("Curso gratis");

} else if(tipoSuscripcion == "Basic"){
    console.log("Casi todos los curso por un mes");

}else if (tipoSuscripcion == "Expert") {
    console.log("Casi todos los curso por un año");

} else if(tipoSuscripcion == "ExpertPlus") {
    console.log("Dos personas pueden tomar todos los cursos");

}


var tipoSuscripcion = "Expert";

if (tipoSuscripcion == "Free") {
    console.log("Curso gratis");

}
 if(tipoSuscripcion == "Basic"){
    console.log("Casi todos los curso por un mes");

}
if (tipoSuscripcion == "Expert") {
    console.log("Casi todos los curso por un año");

}
if(tipoSuscripcion == "ExpertPlus") {
    console.log("Dos personas pueden tomar todos los cursos");
    
}

// Esto es un array
var suscripciones = ["Free", "Basic", "Expert", "ExpertPlus"];
var textoSuscripcion = ["Cursos gratis", "Casi todos los cursos por mes", 
"Casi todos los cursos por año", "Doa personas, todos, un año"];

var sus = "Expert";

for (let i = 0; i < suscripciones.length; i++) {
    
    if (suscripciones[i] == sus) {
        console.log(textoSuscripcion[i]);
    }
    
}

// de for a while

let contador = 0;
while (contador < 5) {
    
    console.log("El valor es "+ contador);
    contador ++;
}


let contador2 = 10;

while (contador2 >= 2) {
    console.log("El valor es "+ contador2);
    contador2 --;
}


// scribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let respuesta = prompt("Cuanto es 2 + 2 ")

if (respuesta == "4") {
    alert("Eso es correcto")
} else {
    alert("Volver a empezar")
    
}

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento

var elementos = [
    "dos", "tres"
];

function colleccion (elementos){

    console.log(elementos[1]);
    
}

// rea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno

var elementos = [
    "Uno","dos", "tres"
];

function colleccion (elementos){

    for (let i = 0; i < elementos.length; i++) {
       
        // console.log(elementos[i]);
        return elementos[i];
    }
   
    
}

var elementos = [
    "Uno","dos", "tres"
];

var prueva2 = function(elemento){
    for (let i = 0; i < elementos.length; i++) {
       
        // console.log(elementos[i]);
        return elementos[i];
    }
   
}

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno
var estudiante = {
    nombre: "Mynor",
    edad : 23,
    estado: "you know",

    detallesPersona : function(){
        console.log(`El nombre es ${this.nombre}, su edad es ${this.edad}, y se encuetra ${this.estado}`);
    }


};

estudiante.detallesPersona();