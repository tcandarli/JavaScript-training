// Arrays

// var x = Array.from("JavaScript");
// console.log(x);

// ES5

// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur){
//     return cur >= 18;
// });

// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// ES6
// findindex() = returns the index of the first element in the array that satisfies the provided texting function
// find() = returns the value of the first element in the array that satisfies the provided testing function

// let ages = [12, 17, 8, 21, 14, 11];
// console.log(ages.findIndex(a => a >= 18));
// console.log(ages.find(a => a >= 18));



// for..of loop

// let myArray = [10, 20, 30];
// for (let x of myArray) {
//     x *= 2;
//     console.log(x);
// };


// let myObj = {
//     x : 1,
//     y: 2,
//     z: 3
// }

// for (let a in myObj) {
//     console.log(a);
//     console.log(myObj[a]);

// }

// let list = [4, 5, 6];
// for (let i in list) {
//     console.log(list[i]);
// }

// let list = [4, 5, 6];
// for (let i of list) {
//     console.log(i);
// }

// // Spread Operator (...)

// let mid = [3, 4];
// let arr = [1, 2, mid, 5, 6];

// console.log(arr);

// let arr2 = [1, 2, ...mid, 5, 6]; // ... spreads the array
// console.log(arr2);

// function addFourAges(a, b, c, d) {
//     return a + b + c + d;

// }

// let sum1 = addFourAges(10, 20, 30, 40);
// console.log(sum1);

// If we have those ages in an array, how can we pass them to function


function addFourAges(a, b, c, d) {
    return a + b + c + d;

}

let ages = [10, 20, 30, 40];

// let sum = addFourAges(...ages);
// console.log(sum);

let sum = (a, b, c, d) => a + b + c + d;
console.log(sum(...ages));
