// var c=300
 let a = 300
if (true) {

    let a = 10 
    const b= 20
    // console.log("INNER:",a);

}

// for (let index = 0; index < 5; index++) {
//    const element = array[index];
// }

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "John";
    function two(){
    const wabsite = "youtube.com";
    // console.log(username);
    
    }
    // console.log(wabsite);
    two()
}
// one()

if (true) {
    const username = "Pal";
    if (username === "Pal") {
        const website = "js-pal.com";
        // console.log(username + website);
    }
}

// +++++++++++++++++++ Intersting Example +++++++++++++++++++++

function addone(num) {
        return num + 1;
    
}
console.log(addone(10))

// addtwo(10)        error:Becuase addtwo is not defined yet and const functions is not hoisted
const addtwo = function(num) {
    return num + 2;
}
