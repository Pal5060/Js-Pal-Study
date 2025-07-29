

const user = {
    name: "Pal",
    price: 100,

    welcomeMessage: function() {
        console.log(`Welcome ${this.name}, your price is ${this.price}`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.name = "John"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let name = "Pal";
//     console.log(this.name); // undefined in strict mode, window.name in non-strict mode
// }
// chai()


// const chai = function() {
//     let name = "Pal";
//     console.log(this.name); // undefined in strict mode, window.name in non-strict mode
// }

// chai();

// const chai = () => {
//     let name = "Pal";
//     console.log(this); // undefined in strict mode, window.name in non-strict mode
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;

// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({name:"Pal"})
    
console.log(addTwo(10, 20))

// const myArray = [5, 7, 8, 3, 5];
// myArray.forEach()