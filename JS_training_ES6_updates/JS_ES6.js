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

