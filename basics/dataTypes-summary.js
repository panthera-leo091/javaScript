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

const heros = ["shaktiman", "naagraj", "daga", "Kirmada", "dushasana"];
let obj = {id: 1, name: "dushasana", age: "dead", hero: true}
console.log(obj);

const myFunction = function(){
    console.log("Hello JS!");
}

console.table([typeof(heros), typeof(obj), typeof(myFunction)]);