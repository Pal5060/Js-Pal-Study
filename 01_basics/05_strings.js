const name = "Pal" 
const repoCount = 19
 
// console.log (name + repoCount + " Value");

console.log (`${name} has ${repoCount} Value`);

const gameName= new String ("Call of-Duty");

console.log(gameName[0]);
console.log(gameName.__proto__); 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);
  
const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "    Pal     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Pal.com/Pal%20Prjapati"
console.log(url.replace('%20', '-')) 
console.log(url.includes('Pal'))
console.log(gameName.split('-'));
