// _______________if_______________

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature < 40) {
//     // console.log("less than 50");
// }else {
//     // console.log("is greter than 50");
// }
//     // console.log("executed");

//     const score = 200
//     if (score > 100){
//         const power = "fly" // let is error here but in var is executed is not true 
//       console.log(`User power is ${power}`);
//     }
//      console.log(`User power is ${power}`);

// < , > , <= , >= , == , === , != , !==

// const balance = 1000

// if (balance >= 1000)console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("greater than 1200");
// }
 
const UserLoggedIn = true
const DebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && DebitCard && 2 == 3) {
    console.log("User can buy the product");
    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User can login");
}