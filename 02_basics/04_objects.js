// const tinderUser = new Object() // single object creation
const tinderUser = {}       // non single object creation

tinderUser.id = "12345";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const resgularUser = {
    email: "some@gamil.com",
    fullname: {
        username:{
            fristname: "John",
            lastname: "Doe",
        }
    }
}

// console.log(resgularUser.fullname.username.fristname); 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) 
const obj3 = {...obj1, ...obj2} 
// console.log(obj3);

const users = [
    {
        id: "1",
        name: "Alice",
        age: 25,
        isLoggedIn: true,
    },
    {
        id: "2",
        name: "Bob",
        age: 30,
        isLoggedIn: false,
    },
    {
        id: "3",
        name: "Charlie",
        age: 28,
        isLoggedIn: true,
    },
]   

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("id"));
