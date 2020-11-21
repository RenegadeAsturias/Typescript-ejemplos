
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


// Array ****************************************************************
// ***********************************************************************

// TypeScript, como Javascript, te permite trabajar con arrays de valores.
// Los tipos del Array pueden ser escritos de una de estas dos formas:

// FORMA 1: En la primera, puedes utilizar el tipo de los elementos seguido por [] para denotar el un array de ese tipo de elementos.
let f1_lst1: number[] = [1, 2, 3];
let f1_lst2: string[] = ['Coche', 'Moto', 'Avión'];

// FORMA 2: La segunda forma es utilizar un array de tipos genérico, Array<elemType>:
let f2_lst1: Array<number> = [1, 2, 3];
let f2_lst2: Array<String> = ['Coche', 'Moto', 'Avión'];


// Tuple ****************************************************************
// ***********************************************************************
// Los tipos Tupla te permiten expresar un array con un número de elementos fijo cuyos tipos son conocidos
// pero no necesariamente del mismo tipo. Por ejemplo, puedes querer representar un valor como un par de una cadena y un número

// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK

// Initialize it incorrectly
// x = [10, "hello"]; 
// Error: Type 'number' is not assignable to type 'string'.
// Error: Type 'string' is not assignable to type 'number'.

// Cuando se accede a un elemento con un índice conocido, el tipo correcto es recupeado:
console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); -> Property 'substring' does not exist on type 'number'.

// Acceder a un elemento fuera del conjunto de índices conocidos falla con un error:
// x[3] = "world";
// Tuple type '[string, number]' of length '2' has no element at index '3'.

// console.log(x[5].toString());
// Object is possibly 'undefined'.
// Tuple type '[string, number]' of length '2' has no element at index '5'.

let tupla: [boolean, number, string, boolean, number, string];
tupla = [true, 1, 'Uno', false, 2, 'Dos'];

let unoNumber: number = tupla[1]; // Ok 
// let unoBoolean: boolean = tupla[1]; -> Error: El tipo 'number' no se puede asignar al tipo 'boolean'

// let prueba = tupla[7]; -> Error: El tipo de tupla "[boolean, number, string, boolean, number, string]" de longitud "6" no tiene ningún elemento en el índice "7".


// Enum ****************************************************************
// ***********************************************************************
// Una adición útil al conjunto estándar de tipos de datos de JavaScript es la enumeración.
// Como en lenguajes como C#, una enumeración es una forma de dar nombres más descriptivos a conjuntos de valores numéricos.

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

Por defecto, las enumeraciones comienzan a numerar sus miembros a partir de 0. 
Puede cambiar esto estableciendo manualmente el valor de uno de sus miembros. 
Por ejemplo, podemos comenzar el ejemplo anterior en 1 en lugar de 0:

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

// O incluso establezcer manualmente todos los valores en la enumeración:

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;

A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:

// Una característica útil de las enumeraciones es que también puede pasar de un valor numérico al nombre de ese valor en la enumeración. 
// Por ejemplo, si tuviéramos el valor 2 pero no estuviéramos seguros de a qué se asignó en la enumeración de Color anterior, 
// podríamos buscar el nombre correspondiente:

enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green'


// Unknown ***************************************************************
// ***********************************************************************

/** 


We may need to describe the type of variables that we do not know when we are writing an application. 
These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API. 
In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, 
so we give it the unknown type.

let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;


*/

