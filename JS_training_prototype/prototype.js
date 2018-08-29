/* In Java we created classes and put meethods inside and inherited these methods by using extends.

JS does not have classes but have PROTOTYPES.

It is not exacty same as class, because you do not create instance of it, but you can create methods that affect multiple
objects by using prototype 

*/

function bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;

    this.inflateTires = function () {
        return this.tirePressure += 3;
    }
}

let bike1 = new bicycle(50, 20, 4, 25);
bike1.inflateTires();
console.log(bike1.tirePressure);


function mechanic(name) {
    this.name = name;
}

// let mechanic1 = new mechanic("Mike"); // I wanna to give acces to Mike to inflateTires method.

/*

Whenever you create a function, JS creates 2 objects.
1. function name object
2. proototype object

*/

function foo(){

};

function bar(){

};

function greet(){
    console.log("Hello");
}

console.log(greet()); //hello
console.log(greet); //function object
console.log(greet.prototype);

/* when you create object, __proto__ is created
 */

function foo() {

};

let myObj = new foo();
console.log(myObj);

/*
Set a property to foo prototype and access it from obj
*/

foo.prototype.test = "this is object";
console.log(myObj.__proto__.test);
console.log(myObj.test);

myObj.__proto__.hello = "test";
console.log(myObj.hello);

myObj.test = 10;

function employee(name) {
    this.name = name;
}

let employee1 = new employee("Mike");
let employee2 = new employee("John");

employee.prototype.playPranks = function(){
    console.log("Plank played")
}

employee1.playPranks();
employee2.playPranks();

/* 
In class modules, you have to define all method upfront 
In prototype, you can put things at runtime.
The minute you add that extra property, every object that was created
from the employee as a constructor, even thhe ones that were created before you 
added that on the property would still work. Because the property look up happens at runtime.
*/

let simple = {};
var obj = new Object();

console.log(simple.__proto__ === obj.__proto__);


console.log(obj.__proto__ === Object.prototype);
console.log(simple.__proto__ === Object.prototype);
console.log(simple.__proto__ === simple.prototype);