const name = "Dhron";
const role = new String("Teacher");
const son = "Aswadhama";

// console.log("In mahabharat " + name + " was the " + role + " of hasthinapur prince and his son " + son);

console.log(`In mahabharat ${name} was the ${role} of hasthinapur prince and his son ${son}`)  // string interpolation

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   Arjun    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));