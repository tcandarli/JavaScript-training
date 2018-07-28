// while , do while loops 

/* Question-1
** Use pre-decrement operator in while's boolean_expression to print HELLO 5 times on to the console.
*/


var counter = 5;
while (--counter >= 0) {
    console.log("Hello " + counter);
}

/* Question-2
** Write a program to calculate the sum of the numbers from 1 till upper bound. 
** If upper bound is 5, sum should be 1 + 2 + 3 + 4 + 5 = 15.
** If upper bound is 11, sum should be 1 + 2 + ... + 11 = 66.
** If upper bound is 100, sum should be 1 + 2 + ... + 100 = 5050.
You should use while loop.
*/

var upperBound = parseInt(prompt("Please enter upperbound: "));
var i = 1;
var sum = 0;

while (i <= upperBound) {
    sum += i;
    i++;
}
console.log("Sum of numbers until " + upperBound + " is : " + sum);

/*  Question-3
** Write a program using while loop to print Even numbers from 1 to 100.
*/

var evenNumber = "";
var number = 0;
while (number <= 100) {
    if (number % 2 === 0) {
        evenNumber = evenNumber + " " + number;
    }
    number++;
}
console.log("Even numbers between 0-100 are : " + evenNumber);

/* Question-4
** Write a program for following logic:
** Print all the odd numbers in comma separated form from 1 till end (you may change it):
** if end = 10, OUTPUT = 1, 3, 5, 7, 9
** if end = 11, OUTPUT = 1, 3, 5, 7, 9, 11
You should use while loop and if - else statements. Note that, there should not be any comma after last digit.
*/

var oddNumber = 2;
var allOddNumbers = "";
var number = parseInt(prompt("Enter a number to write odd numbers"));
while(oddNumber++<number){
    if (oddNumber % 2 === 1){
        allOddNumbers += ", " + oddNumber;
    }
} 
console.log(1 + allOddNumbers);
