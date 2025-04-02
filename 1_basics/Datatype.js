// let someNumber = 67
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber);


// Primtive data type
// String, number, boolean, null, undefined, symbol, bigint 
const score = 500 
// datatype number

const scoreValue = 100.3


const isLoggedIn = true
// datatype boolean 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// Non Primtive type

// Array, function, Object 


const heros = ["batman", "spiderman"]

let myFav = {
name: "Singh",
age: 18,
}

// Function 
const myFirstFunction = function(){

    console.log("hello world");
}

console.log (typeof myFirstFunction);


// Stack (primitive), heap (non primitive) refrence changes will be done to main object

// stack exaple
let singh  = "shikhar"

let shikhar = singh

singh = "Rana" 
console.log(shikhar);
console.log(singh);
// heap example


let user = {

email: "Singh@gmail.com",
 upi: "singh"

}

let user2 = user

user2.email = "Shikharsingh"

console.log(user.email);
console.log(user2.email);