// Tipos Básicos
// Boolean ***************************************************************
// ***********************************************************************
var isDone = false;
// Number ****************************************************************
// ***********************************************************************
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let big: bigint     = 100n; // Ojo, que da error dependiendo de nuestro target de ECMAScript. error TS2737: BigInt literals are not available when targeting lower than ES2020.
// String ****************************************************************
// ***********************************************************************
// TypeScript permite utilizar comillas dobles (") y comillas simples (') para enmarcar los datos de un string.
var color = "blue";
color = 'red';
// También puede utilizar plantillas de cadenas, 
// que pueden abarcar varias líneas y tener expresiones incrustadas.
// Estas cadenas están rodeadas por el carácter de comilla invertida / comilla inversa (`), y las expresiones incrustadas tienen el formato ${expr}.
var fullName = "Bob Bobbington";
var age = 37;
var sentencePlantilla = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log(sentencePlantilla);
// Esto es equivalente a declarar sentence así:
var sentenceSinPlantilla = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
console.log(sentencePlantilla);
