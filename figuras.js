// Codigo del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lado del cuadrado miden: "+ ladoCuadrado +" cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado: "+perimetroCuadrado +" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El aread de un cuadrado es: "+ areaCuadrado +" cm^2");
console.groupEnd();

// Codigo del triangulo

console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;


console.log("Los lado del triangulo miden: "
+ ladoTriangulo1 
+" cm, "
+ ladoTriangulo2 
+ " cm, "
+ baseTriangulo3
+ "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: "+ alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perimetro del triangulo es: "+ perimetroTriangulo);

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) /2;
console.log("Area del triangulo "+ areaTriangulo+ " cm^2");

console.groupEnd();


// Codigo del circulo
console.group("Circulo");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo+ " cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es : "+ diametroCirculo+" cm");

// PI
const PI = Math.PI;
console.log("el numero PI es: "+ PI);

//Circunferencia
const perimetroCircular = diametroCirculo * PI;
console.log("El perimetro del circulo es: "+ perimetroCircular + " cm");

// Area 
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es : "+ areaCirculo+ "cm^2");


console.groupEnd();