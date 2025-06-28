let score = "33acade"; // string

console.log(typeof score); // number
console.log(typeof (score));

let valueInNumber  = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber); 


// 33 => 33// "33" => 33
// "33acade" => NaN Not a Number
// true => 1; false => 0
// null => 0   
// undefined => NaN

let isLoggedIn = 1; // boolean

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); 

// 1 => true; 0 => false
// "" => false; "Pal" => true

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string