// Dates in JavaScript

let myDate = new Date();
console.log(myDate.toString()); // Current date and time
console.log(myDate.toDateString()); // Date in human-readable format
console.log(myDate.toISOString()); // Date in ISO format        
console.log(myDate.getFullYear()); // Get the year
console.log(myDate.toLocaleString());


console.log(typeof myDate); 
// let myCreatedDate = new Date(2023, 0, 1);
let myCreatedDate = new Date(2022 , 0, 25);
// let myCreatedDate = new Date(2022 , 0, 25 , 5, 3);
// let myCreatedDate = new Date("2023-01-14");
// let myCreatedDate = new Date(01-14-2023);
console.log(myCreatedDate.toString()); 

let myTimestamp = Date.now();

// console.log(myTimestamp); 
// console.log(myCreatedDate.getTime()); 
// console.log(math.floor(myTimestamp / 1000)); 
console.log(Date.now);

let newDate = new Date()
console.log(newDate.getMonth);

newDate.toLocalString ('default',{weekday: "long"})