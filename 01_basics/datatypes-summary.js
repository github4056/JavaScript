// Primitive Data Types 

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BiInt

const nuserName = 'Shaktiman'; // String
const score = 100; // Number
const scoreValue = 100.5; // Number
const isLoggedIn = true; // Boolean
const outSideTemp = null; // Null
let userEmail; // Undefined
const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Symbol (different from above)

// console.log(id === anotherId); // false, because symbols are unique

const bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
// console.log(bigIntValue)

// Referance / Non Primitive Data Type
// Array, Object, Functions 

// Array is a special type of object that can hold multiple values
const heros = ["shaktiman", "naagraj", "doga"]; // Array

// Objects are collections of key-value pairs
const myObj = {
  name: 'Shaktiman',
  power: 'Super Strength',
  age: 30,
  isHuman: true,
}; // Object

// Functions are blocks of code designed to perform a particular task
const myFunction = function() { // Function
  console.log('Hello World');
};

// console.log(typeof nuserName); // string
// console.log(typeof score); // number
// console.log(typeof isLoggedIn); // boolean
// console.log(typeof outSideTemp); // object (null is considered an object in JS)
// console.log(typeof userEmail); // undefined
// console.log(typeof id); // symbol
// console.log(typeof bigIntValue); // bigint
// console.log(typeof heros); // object (arrays are also objects in JS)
// console.log(typeof myObj); // object
// console.log(typeof myFunction); // function


// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Premitive Data Types) vs Heap (Non-Primitive Data Types)
// Example

let myYouTubename = "Shaktiman"; // Stack Memory
let anotherName = myYouTubename; // Stack Memory
anotherName = "Shaktiman Rocks"; // Stack Memory
console.log(myYouTubename); // Shaktiman
console.log(anotherName); // Shaktiman Rocks

let userOne = {
  email: "shaktiman@gmail.com", // Heap Memory
  upi: "user@ypl", // Heap Memory
};
let userTwo = userOne; // Heap Memory
userTwo.email = "tejveer@gmail.com"; // Heap Memory
console.log(userOne.email); //
console.log(userTwo.email); //

// Stack vs Heap Memory
// Stack Memory: Primitive data types (String, Number, Boolean, Null, Undefined, Symbol, BigInt)
// Heap Memory: Non-primitive data types (Array, Object, Function)
// Stack Memory: Stores values directly
// Heap Memory: Stores references to values
// Stack Memory: Faster access
// Heap Memory: Slower access
// Stack Memory: Limited size
// Heap Memory: Larger size
// Stack Memory: Automatically managed


