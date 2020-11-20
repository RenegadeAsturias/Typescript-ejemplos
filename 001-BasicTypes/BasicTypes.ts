
// Tipos Básicos

// Boolean ***************************************************************
// ***********************************************************************

let isDone: boolean = false;

// Number ****************************************************************
// ***********************************************************************

let decimal: number = 6;
let hex: number     = 0xf00d;
let binary: number  = 0b1010;
let octal: number   = 0o744;
// let big: bigint     = 100n; // Ojo, que da error dependiendo de nuestro target de ECMAScript. error TS2737: BigInt literals are not available when targeting lower than ES2020.

// String ****************************************************************
// ***********************************************************************
// TypeScript permite utilizar comillas dobles (") y comillas simples (') para enmarcar los datos de un string.

let color: string = "blue";
color = 'red';

// También puede utilizar plantillas de cadenas, 
// que pueden abarcar varias líneas y tener expresiones incrustadas.
// Estas cadenas están rodeadas por el carácter de comilla invertida / comilla inversa (`), y las expresiones incrustadas tienen el formato ${expr}.


let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentencePlantilla: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
console.log(sentencePlantilla);

// Esto es equivalente a declarar sentence así:
let sentenceSinPlantilla: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
console.log(sentencePlantilla);

// sentencePlantilla y sentenceSinPlantilla muestran:
// Hello, my name is Bob Bobbington. I'll be 38 years old next month.


