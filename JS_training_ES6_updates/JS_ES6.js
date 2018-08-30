// variable declarations with let and const

// ES5
var name5 = "Mike Smith";
var age5 = 25;
name5 = "Mike Miller";
console.log(name5)

// ES6
const name6 = "Mike Smith";
let age6 = 25;
// name6 = "Mike Miller"; // We can't reassign to a constant variable.

console.log(name6); // TypeError : Assignment to constant variable. 
console.log(age6);

/*
*****************************************************************************
cont : if value is not changing
let : if value is changing
*/

/*
variables declared with var in ES5 is function scoped and the variables declared with let and const 
in ES6 are block-scoped.
*****************************************************************************
*/

// ES5

function driverLicense5(passedTest) {
    if (passedTest) {
        var firstName = "Mike";
        var yearOfBirth = 1970;

    }
    console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car")

};

driverLicense5(true);

//ES6
function driverLicense6(passedTest) {
    let firstName;
    const yearOfBirth = 1970;
    if (passedTest) {
        firstName = "Mike";
    }
    console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car")

};

driverLicense6(true);


// Example
// var i = 23;
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i) // 0 1 2  4 5

let i = 23;
let sum = 0;
for (let i = 0; i < 5; i++) {
    console.log(i);
    sum = sum + i;
}
console.log(sum);
console.log(i); // 0 1 2 3 4 23

// Strings
var a = 10;
var b = 10;
console.log("JavaScript first appeared " + (a + b) + " years ago.")

// Template String
console.log(`JavaScript first appeared ${a + b} year ago.`);
console.log(`JavaScript first appeared ${2 * 10} year ago.`);

// Task1
let firstName = "Mike";
let lastName = "Smith";
const yearOfBirth = 1970;

function calcAge(year) {
    return 2018 - year;
}
console.log(`This is ${firstName} ${lastName} He was born in ${yearOfBirth} , he is ${calcAge(yearOfBirth)} years old.`)

// New String methods in ES6
let fName = "Mike";
let lName = "Smith";

const n = `${fName} ${lName}`;

console.log(n.startsWith("m")); // false
console.log(n.endsWith("Sm")); // false
console.log(n.endsWith("th")); // true
console.log(n.includes(" ")); // rtrue
console.log(n.includes("ik")); // true
console.log(fName.repeat(3)); // MikeMikeMike
console.log(`${fName} `.repeat(3)); // Mike Mike Mike

// Functions ES5
var b = function (a) {
    return a;
}

// Arrow functions in ES6
let x = a => a;
console.log(x(2));

// If we don't have any parameters

// ES5
var y = function () {
    console.log("Hello");
}

// ES6
let z = () => {
    console.log("Hello");
};
z();

// If we have multiple parameters

// ES5
var m = function (a, b, c) {
    return a + b + c;
};
console.log(m(1, 2, 4));

// ES6
let k = (a, b, c) => a + b + c;
console.log(k(1, 2, 4));

// map() method : Creates a new array with the result of calling a provided function on every element in the calling array
let array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
const map2 = array1.map(x => x + 2);

console.log(map1); // [2, 8, 18, 32]
console.log(map2); // [3, 6, 11, 18]

