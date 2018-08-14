// We use objects instead of repetitive declaration as below

var plan1Name = "Basic";
var plan1Price = 3.99;
var planSpace = 100;
var plan1Data = 1000;
var plan1Pages = 10;

var plan2Name = "Professional";
var plan2Price = 5.99;
var planSpace = 200;
var plan2Data = 2000;
var plan2Pages = 200;

var plan3Name = "Ultra";
var plan3Price = 7.99;
var planSpace = 100;
var plan3Data = 5000;
var plan3Pages = 500;

console.log("The cost of the " + plan2Name + " package is $" + plan2Price + " per month.")

// Objects are used for detailed variables
var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    data: 1000,
    pages: 10
};
var plan2 = {
    name: "Professional",
    price: 5.99,
    space: 500,
    data: 5000,
    pages: 50
};
var plan3 = {
    name: "Ultimate",
    price: 9.99,
    space: 2000,
    data: 20000,
    pages: 500
};

console.log("The cost of the " + plan1.name + "package is $ " + plan1.price + " per month"); 
console.log("The cost of the " + plan2.name + "package is $ " + plan2.price + " per month"); 
console.log("The cost of the " + plan3.name + "package is $ " + plan3.price + " per month"); 

// Task 1
// Check if the mileage is less than 5000 and make is Fiat. 
// If it is, display "buy it", otherwise display "do not buy it" 

var car = {
    make: "Fiat",
    model: 500,
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 8800
};

if (car.make == "Fiat" && car.mileage < 8800) {
    console.log("Buy it!");
} else {
    console.log("Do not buy it!")
}

// How to add a property
// If the current month is July, August or December, the customer gets 20 % discount on the hosting plan

plan1.discountMonths = [7, 8, 12];
console.log(plan1);

plan1.price = 4.99;
console.log(plan1);

delete plan1.data;
console.log(plan1);

console.log("name" in plan1); //checks the property exists or not - true

// Check if John's salary is more than 100

var salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

if (salaries.John <= 100) {
    salaries.John = 120
}
if ("Adam" in salaries == false) {
    salaries.Adam = 140
}

console.log(salaries);

var salaries={
	John:100,
	Ann:160,
	Pete:130
};

if (salaries.John<=100){
	salaries.John=120;
}
if(!("Adam" in salaries)){
	salaries.Adam=180;
}
console.log(salaries);


// Task 
// Display "My Honda engine size is 2.2 and hp is 500"
var myHonda = {
    color: "Red",
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    },
    hp: [300, 500, 100]
};

console.log("My Honda engine size is " + myHonda.engine.size + " and hp is " + myHonda.hp[1]);

var myHonda = {
    color: "Red",
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    },
    hp: [300, 500, 100]
};

// Adding behavior to object

var car = {
    make : "Honda",
    model : "Civic",
    year : 2000,
    color : "Red",
    mileage: 75000,

    drive : function() {
        console.log("My car is " + car.make + car.model)
    }
}

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    data: 1000,
    pages: 10,
    discountMonths: [7, 8],
    calcAnnual: function (percentDisc) {
        var bestPrice = plan1.price;
        for (var i = 0; i < plan1.discountMonths.length; i++) {
            if (plan1.discountMonths[i] == 7 || plan1.discountMonths == 8) {
                bestPrice = plan1.price * percentDisc;
            }
        }
        return bestPrice * 12; // Annual price with discount
    }

};


// // if user signs up in certain months, he gets discount for the entire year
// // if user signs up for the basic plan in July or August he gets 20 % discount

var annualPrice = plan1.calcAnnual(0.80)
console.log("Annual price is : " + annualPrice);


"this" shows the object 
var car = {
    make: "Honda",
    model: "Civic",
    year: 2000,
    color: "Red",
    mileage: 75000,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            console.log("it is running");
        } else {
            console.log("You need to start the engine first!")
        }
    }
};

car.drive();
car.start();
car.drive();
car.stop();

// Find the errors in the code

var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function () {
        if (!playing) {
            this = true;
            console.log("Playing " + name + "by " + artist);
        }
    },
    pause: function () {
        if (playing) {
            this.playing = false;
        }
    }
}

// Errors checked in the code

var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function () {
        if (!this.playing) {
            this.playing = true;
            console.log("Playing " + this.name + " by " + this.artist);
        }
    },
    pause: function () {
        if (this.playing) {
            this.playing = false;
        }
    }
}

song.play();
song.pause();

var person = {
    name: "John",
    lastName: "Hamilton",
    yearofBirth: 1985,
    job: "Automation tester",
    isMarried: true,
    family: ["Tom", "Mike", "Mary"],
    calculateAge: function (year) {
        var age = year - this.yearofBirth;
        return age;
    }
}
console.log(person.name + " " + person.lastName);
console.log("Age is : " + person.calculateAge(2018));

// for...in statement
var car = {
    make: "Ford",
    model: "Mustang",
    year: 1955,
    color: "black",
    mileage: 281341
};

for (i in car) {
    console.log(i + ":" + car[i]);
}

var object = {
    a: 1,
    b: 2,
    c: 3
};

var text = "";
for (var i in object) {
    text += object[i];
}
console.log(text);