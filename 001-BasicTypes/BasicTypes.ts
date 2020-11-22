
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
// let big: bigint  = 100n; // Ojo, que da error dependiendo de nuestro target de ECMAScript. error TS2737: BigInt literals are not available when targeting lower than ES2020.


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

enum Color1 {
  Red,
  Green,
  Blue,
}
let c1: Color1= Color1.Green;

// Por defecto, las enumeraciones comienzan a numerar sus miembros a partir de 0. 
// Puede cambiar esto estableciendo manualmente el valor de uno de sus miembros. 
// Por ejemplo, podemos comenzar el ejemplo anterior en 1 en lugar de 0:

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let c2: Color2 = Color2.Green;

// O incluso establezcer manualmente todos los valores en la enumeración:

enum Color3 {
  Red   = 1,
  Green = 2,
  Blue  = 4,
}
let c3: Color3 = Color3.Green;

// Una característica útil de las enumeraciones es que también puede pasar de un valor numérico al nombre de ese valor en la enumeración. 
// Por ejemplo, si tuviéramos el valor 2 pero no estuviéramos seguros de a qué se asignó en la enumeración de Color anterior, 
// podríamos buscar el nombre correspondiente:

enum Color4 {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color4[2];
console.log(colorName); // Displays 'Green'


// Unknown ***************************************************************
// ***********************************************************************
// Es posible que necesitemos describir el tipo de variables que no conocemos cuando escribimos una aplicación.
// Estos valores pueden provenir de contenido dinámico, por ejemplo del usuario, 
// o podemos querer aceptar intencionalmente todos los valores en nuestra API.
// En estos casos, queremos proporcionar un tipo que le diga al compilador 
// y a los futuros lectores que esta variable podría ser cualquier cosa, así que le damos el tipo desconocido.

let notSure: unknown = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;

// Si tiene una variable con un tipo unknown, puede limitarla a algo más específico haciendo comprobaciones 'typeof', 
// comprobaciones 'checks' o más avanzadas 'type guards' que se discutirán en un capítulo posterior:

declare const maybe: unknown;

// 'maybe' could be a string, object, boolean, undefined, or other types
// const aNumber: number = maybe; -> Error: - El tipo 'unknown' no es asignable al tipo 'number'.

if (maybe === true) {
  const aBoolean: boolean = maybe; // TypeScript knows that maybe is a boolean now
  // So, it cannot be a string
  // const aString: string = maybe; -> Error: Type 'boolean' is not assignable to type 'string'.
}

if (typeof maybe === "string") { // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  // const aBoolean: boolean = maybe; -> Error: Type 'string' is not assignable to type 'boolean'.
}

// Any *******************************************************************
// ***********************************************************************
