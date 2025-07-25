const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// // Output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
 
// console.log(allHeros);

// const allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[11,12]]]

const real_another_array = another_array.flat(2); // infinty is not working in this case
console.log(real_another_array);


console.log(Array.isArray("Pal"))
console.log(Array.from("Pal"))
console.log(Array.from({name: "Pal"}));// intersting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3)); 