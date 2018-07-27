/* Question 1:
Write a logic using switch-case to print "EVEN" / "ODD" for the numbers. 
Numbers divisible by 2 are even and numbers not divisible by 2 are odd.
*/

let number = +prompt("Enter a number :");
let evenOdd = number % 2;
switch (evenOdd) {
    case 0: 
        console.log(number + " is an even number.");
        break;
    case 1: case -1:
        console.log(number + " is an odd number.");
        break;
    default:
        console.log("Enter a valid number!")
}

/* Question 2:
Write a switch-case program that accepts a number from user.
IF number is 0,1 or 2 print "Low Number. IF number is 3,4,5 print "Medium Number". 
IF number is is not between 0-5 then print "Other Number"
*/

let number = +prompt("Enter a number :");
switch (number) {
    case 0:
    case 1:
    case 2:
        console.log(number + " is a low number!");
        break;
    case 3:
    case 4:
    case 5:
        console.log(number + " is a medium number!");
        break;
    default:
        console.log(number + " is other number!");
        break;
}

/* Question 3:
Write a switch-case program that accepts the total cost of shopping from user and apply discount ratio 
according the below table. Print the total amount that user needs to pay after discount
Total Cost Of Shopping	Discount Ratio	Pay Amount
1000	5%	?
10000	8%	?
other	0%	?
*/


let shoppingCost = Number(prompt("Please enter the shopping cost :"));
let discount = 0;
let totalCost = 0;
switch (shoppingCost) {
    case 1000:
        discount = shoppingCost * 0.05;
        totalCost = shoppingCost - discount;
        console.log("For " + shoppingCost + " $ shopping, you have %5 discount :" + discount + " $");
        console.log("Total amount after discount is : " + totalCost);
        break;
    case 10000:
        discount = shoppingCost * .08;
        totalCost = shoppingCost - discount;
        console.log("For " + shoppingCost + " $ shopping, you have %8 discount :" + discount + " $");
        console.log("Total amount after discount is : " + totalCost);
        break;
    default:
        console.log("There is no discount!");
        console.log("Total amount after discount is : " + shoppingCost);
        break;
}

/* Question 4:
Write a program to display traffic light colors using following logic:
if code (R/r)-->"Red"
if code (O/o)-->"Orange"
if code (G/g)-->"Green"
*/

let trafficLight = prompt("Please enter the traffic light code (e.g: R,r/O,o/G,g)");
switch (trafficLight) {
    case "R":
    case "r":
        console.log("Light is red.");
        break;
    case "O":
    case "o":
        console.log("Light is orange.");
        break;
    case "G":
    case "g":
        console.log("Light is green.");
        break;
    default:
        console.log("Enter a valid color code!");
        break;
}
