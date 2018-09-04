// ES5

var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(`Age is ${age}`);
};

var mike5 = new Person5("Mike", 1980, "Tester");
mike5.calculateAge();

// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(`Age is ${age}`);
    }
}

let mike6 = new Person6("Mike", 1980, "Test Engineer");
mike6.calculateAge();

// Static Methods

/* Static methods that are simply attached to the classes.

*/

// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     calculateAge() {
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(`Age is ${age}`);
//     }

//     static greeting() {
//         console.log("Hello");
//     }
// }

// let mike6 = new Person6("Mike", 1980, "Test Engineer");
// mike6.calculateAge();
// Person6.greeting(); // We call static methods by class name.

/* When to use static methods?
1. If you write utility classes and they are not supposed to be changed?
2. If there is some code that can easily be shared by all the instance methods,
3. Extract that code into a static code
If you are sure that the definition of the method will never be changed or overriden. As 
static methods can not be overriden.
*/

function Bicycle5(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTire = function () {
        this.tirePressure += 3;
    }
}

var b15 = new Bicycle5(50, 20, 4, 25);
console.log(b15);

// ES6

class Bicycle6 {
    constructor(cadence, speed, gear, tirePressure) {
        this.cadence = cadence;
        this.speed = speed;
        this.gear = gear;
        this.tirePressure = tirePressure;
    }
    inflateTire() {
        return this.tirePressure += 3;
    }
}
let b16 = new Bicycle6(50, 20, 4, 25);
console.log(b16.inflateTire());

// INHERITENCE

// Inheriting constructor

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

let dog1 = new Dog("Lassie");
console.log(dog1.name);

class Person {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayName() {
        console.log(this.name);
    }

    displayAge() {
        console.log(this.age);
    }

    displayWeight() {
        console.log(this.weight);
    }
}

class Programmer extends Person {
    constructor(name, age, weight, language) {
        super(name, age, weight); //  super has to be first than this.language
        this.language = language;
    }
    displayLanguage() {
        console.log(this.language);
    }
}

let mike = new Person("Mike", 25, 70);
mike.displayName();
mike.displayAge();
mike.displayWeight();

console.log("..........................................");

let john = new Programmer("John", 35, 75, "JavaScript");
john.displayName();
john.displayAge();
john.displayWeight();
john.displayLanguage();
console.log("..........................................")

class Vehicle {
    start() {
        console.log("Starting the vehicle");
    }
}

class Car extends Vehicle {
    start() {
        // super.start();
        console.log("Starting the car");
        super.start();
    }
};

let honda = new Car();
honda.start();

// Getter and Setter

class GetThings {
    constructor(size) {
        this.length = size;
    }
    get Length() {
        return this.length;
    }

    set Length(value) {
        this.length = value;
        $
        console.log("The value has been set");
    }
}