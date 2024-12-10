// premitive data types

// 7 types: String, Number, NaN, BigInt, Symbol, undefined

// javaScript is dynamically Typed language.
const city = 10;
let age = "12";
const isLogIn = false;
const outTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id)
console.log(anotherId)
console.log(id == anotherId)
console.log(id === anotherId)

const bigNum = 21548798653254886n;




// Refererence(Non Premitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga", "Kirmada", "dushasana"];
let obj = {id: 1, name: "dushasana", age: "dead", hero: true}
console.log(obj);

const myFunction = function(){
    console.log("Hello JS!");
}

console.table([typeof(heros), typeof(obj), typeof(myFunction)]);



console.clear();


//  +++++++++++++++++++++++++++++++

// Stack (premitive), Heap(Non Premitive/referenced)

let userName1 = "Shaktiman";   //stack
let userName2 = userName1;    //stack
userName2 = "Kirmada";
console.log(userName1);
console.log(userName2);


console.clear();


let userOne = {
    name: "Dhritarashtra",
    age: "Mrit",
    hero: true
}

let userTwo = userOne;
userTwo.age = "dead";

console.log(userOne);
console.log(userTwo);