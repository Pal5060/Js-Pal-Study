const score = 100 
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);// string representation
console.log(balance.toFixed(2)) ;// fixed-point notation

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) ;

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN')) ;

// ================ Maths ================

console.log(Math);
console.log(Math.abs(-10)); // absolute value
console.log(Math.round(10.5)); 
console.log(Math.ceil(10.1)); // round up
console.log(Math.floor(10.9)); // round down
console.log(Math.max(10, 20, 30)); // maximum value
console.log(Math.min(10, 20, 30)); // minimum value

console.log(Math.random()); 
console.log((Math.random()*10) + 1); // random number between 0 and 100


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
