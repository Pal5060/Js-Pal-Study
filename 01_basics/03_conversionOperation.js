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

// ************************** Oprations **************************

let value =3
let negValue = -value; 
console.log(negValue); 

// console.log(negValue + 2); // -1
// console.log(negValue - 2); // -5
// console.log(negValue * 2); // -6
// console.log(negValue / 2); // -1.5
// console.log(negValue % 2); // 0
// console.log(negValue ** 3); // -27

let str1= "Pal";
let str2 = " Prajapati";
let str3 = str1 + str2; 
console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 3); //123
// console.log(1 + 2 + "3"); //33
// console.log((3 + 4) * 5 % 6); 

// console.log(+true); //1
// console.log(+false); //0
// console.log(true+); error
// console.log(+"");//0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
