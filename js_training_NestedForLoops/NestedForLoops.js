// For loops 

// Assignment -6 
/*Question-1
Print the table of 12 using for loop.
Output should be in following format:
12 X 1 = 12
12 X 2 = 24
12 X 3 = 36
12 X 4 = 48
12 X 5 = 60
12 X 6 = 72
12 X 7 = 84
12 X 8 = 96
12 X 9 = 108
12 X 10 = 120
*/

for (var column = 12; column >= 1; column--) {
    for (var row = 1; row <= 10; row++) {
        if (column <= 11) {
            break;
        }
        console.log(column + "x" + row + "=" + column * row);

    }
}

/* Question-2
Write a program to print Fibonacci series of n terms where n is input by user : 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34,......
*/

var counter = parseInt(prompt("Enter a number to print fibonacci series :"));
var oldNumber = -1;
var newnumber = 1;
var fibonacci = "";
for (var i = 0; i <= counter; i++) {
    var prevOldNumber = newnumber;
    newnumber = oldNumber + newnumber;
    oldNumber = prevOldNumber;
    fibonacci = fibonacci + newnumber + " ";
}
console.log("Fibonacci series for " + counter + " is : " + fibonacci);

/* Question-3
Write a JavaScript program to print all the numbers between 1 and 100 (including 1 and 100)
which are divisible by 5.
*/
var first = 1;
var divisibleFive = "";
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        divisibleFive = divisibleFive + ", " + i;
    }
}
console.log(first + "" + divisibleFive);

/* Question-4
Print the multiples of 5 starting from 200 to 5 with following restrictions:
1. Use for loop
2. Don't use modulus (%) operator to check whether number is divisible by 5 or not.
*/

var multiplesFive = "";
for (var i = 200; i >= 5; i = i - 5) {
    multiplesFive = multiplesFive + " " + i;
}
console.log("From 200 multiples 5 list is: " + multiplesFive);