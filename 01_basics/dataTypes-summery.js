// primitive data types
 
// 7 primitive data types in JavaScript
// 1. Number 2. String 3. Boolean 4. Undefined 5. Null 6. Symbol 7. BigInt

const number = 42; // Number
const numbervalue = 3.14; // Number

const isLoggedIn = true; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol('123'); 
const anotherId = Symbol('123'); 

console.log(id === anotherId); 

// const bigIntValue = 1234567890123456789012345678901234567890n; 


// reference data types (non-primitive)
// 1. Object 2. Array 3. Function 

const heros = ['Thor', 'Ironman', 'Hulk']; // Array
let myObj = {
    name : 'Thor',
    age: 1500,

}
const myFunction = function() {
    console.log('Hello World'); 
}

console.log(typeof bigNumber); 
