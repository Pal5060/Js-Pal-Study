 
function sayMyName(){
    console.log("p");
    console.log("a");
    console.log("l");
}

// sayMyName()

// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(5, 10)

// console.log("Result:", result);


function loginUserMessage (username = "Guest") 
{
    if (! username  ){
        console.log("Please provide a username");
        return 
    }
    return`${username} logged in successfully`
}

// console.log(loginUserMessage("pal"))
// console.log(loginUserMessage())


function claculateCreatePrice (val1, val2,...num1){ // (...)rest operator
    return num1
}

// console.log(claculateCreatePrice(222, 333, 322, 444, 555, 666, 777, 888, 999));

const user = {
    username: "pal",
    prices: 199,
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  
} 

// handleObject(user)
handleObject({
    username: "padd",
    price: 1343
})

const myNewArray = [1000, 232, 34343, 42342];

function returnSecondValue (getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100, 200, 300, 400, 500]));
