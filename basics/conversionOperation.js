/*
let score = "33";
console.log(typeof(score));


let valInNumber = Number(score);
console.log(typeof valInNumber);

let nan = "33as";
let stringToNaN = Number(nan);

console.log(stringToNaN);
console.log(typeof stringToNaN);
console.log(nan);


let b1 = null;
let b2 = false;
let b3 = true;

let n1 = Number(b1);
let n2 = Number(b2);
let n3 = Number(b3);

console.table([n1, n2, n3]);

let val;

let num = Number(val);
console.log(num)
*/


// "33" => 33
// "33abc" or "abajsnd" or undefine => NaN 
// typeof(NaN) = number
// true => 1 || false and null => 0  

let n1 = 0, n2 = 1, n3 = 2137;
let b1 = Boolean(n1), b2 = Boolean(n2), b3 = Boolean(n3);
console.table([b1, b2, b3])

let s1 = "";
console.log(Boolean(s1))
let s2 = "a", s3 = "baba black sheep";
console.table(
    [Boolean(s2), Boolean(s3)]
);


let arr1 = [], arr2 = [1, 2, 3];
console.log(Boolean(arr1));
console.log(Boolean(arr2));


/***********************************************************************          Operatiors          *******************************************************************************/


/*
let val = 6;
let negVal = -val;
console.log(negVal);

console.log(val+val);
console.log(val-val);
console.log(val*val);
console.log(val/val);
console.log(val%val);
console.log(val**val);

*/



// let s1 = "Hello";
// let s2 = " ";
// let s3 = "World";
// let s4 = "!";

// let resString = s1 + s2 + s3 + s4;

// console.log(resString);

// let str1 = "12";
// let num1 = 11, num2 = 89;
// console.log(str1 + num);
// console.log(typeof(str1 + num));
// console.log(num + str1);
// console.log(typeof(num + str1));
// console.log(1 - "12")   // => -11
// console.log(1 - "a")    // => NaN

// console.log(num1 + num2 + str1);
// console.log(num1 + str1 + num2);
// console.log(str1 + num1 + num2);

// console.log(true);
// console.log(+true);
// console.log(true+0);
// console.log(+"");
// console.log(typeof(+""));
// console.log("" + 0);
// console.log(typeof("" + 0));



// let num1, num2, num3;
// num1 = num2 = num3 = 7;
// console.table([num1, num2, num3]);
// num1 += 1;
// num2 += 2;
// num3 += 3;
// console.table([num1, num2, num3]);