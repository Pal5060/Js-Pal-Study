// singleton
// object.create
// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "John",
    [mySym]: "mykey1",
    age: 30,
    location: "New York",
    email: "hello@gogle.com",
    isLoggedIn: false,
    lastLogiDays: ["Monday", "Tuesday", "Wednesday"],
}  

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "Pal@colgate.com"
// Object.freeze(JsUser)
JsUser.email = "pal@1234.com"
// console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());