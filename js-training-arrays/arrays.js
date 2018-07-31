// Arrays
var scores = Array(10); //size of the array
var scores2 = Array(10, 8, 6, 4);
var colors = ["green", 10,  "red", "blue"];
var emptyArray = [];
var emptyArray2 = new Array();
console.log(scores);
console.log(scores2);
console.log(colors);
console.log(emptyArray);
console.log(emptyArray2);

console.log(colors[0], + "," + colors[3]);



// Arrays - months
var monthIndex = parseInt(prompt("Please enter the month number (0-12) : "));
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
if (monthIndex > 0 && monthIndex <= 12) {
    console.log(monthIndex + ". month is " + months[monthIndex - 1]);
} else {
    console.log("Please enter a valid number!");
}


// Arrays - days
var dayIndex = parseInt(prompt("Please enter the day number (1-7) : "));
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
if (dayIndex > 1 && dayIndex <= 7) {
    console.log(dayIndex + ". day is " + days[dayIndex - 1]);
} else {
    console.log("Please enter a valid number!");
}
console.log(days.length);



// Arrays - loops - Shopping list
var shoppingList = ["Cheese", "Pumpkin", "Bread", "Eggs", "Milk", "Almonds"];

for (var i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}



// Arrays - cars
var found = 0;
var cars = ["honda", "toyota", "opel", "nissan", "renault", "volvo"];
var checkName = prompt("Please enter your brand");
for (var i = 0; i < cars.length; i++) {
    if (cars[i] == checkName) {
        found = 1;
    }
}
if (found == 1) {
    console.log("I found your car " + checkName + " in this array.");
} else {
    console.log("I could not find your car " + checkName + " in this array.")
}



var cars = ["honda", "toyota", "opel", "nissan", "renault", "volvo"];
console.log(Array.isArray(cars));
console.log(cars.toString());


// Arrays - isArray() , toString()
var shoppingList = ["Cheese", "Pumpkin", "Bread", "Eggs", "Milk", "Almonds"];
if (Array.isArray(shoppingList))
    console.log(shoppingList.toString());
else {
    console.log("It's not an array!");
}


// Arrays - push(), pop()
var stack = [];
stack.push(1);
stack.push(3);
stack.push(5);
console.log(stack);
for (var i = 0; i < stack.length; i++) {
    console.log(stack[i]);

}

stack.pop();
stack.pop();
console.log(stack);



// Arrays - push(), pop()

var myArray = ["JavaScript", "Nodejs", "Angularjs", "Typescript"];
do {
    var selection = parseInt(prompt("Please enter the number (1 to 4): "));
    if (selection === 1) {
        myArray.push(prompt("Please enter new element"));
    } else if (selection === 2) {
        myArray.pop();
    } else if (selection === 3) {
        console.log(myArray.toString());
        }
} while (selection != 4);


// Arrays -  push(), pop(), toString()
var userInput=[];
outerLoop:
while(true){
    number=+prompt("Enter your selection:");
    switch (number){
        case 1:
        userInput.push(prompt("Enter new element:"));
        break;
        case 2:
        userInput.pop();
        break;
        case 3:
        console.log(userInput.toString());
        break;
        case 4:
        break outerLoop;
}
}
