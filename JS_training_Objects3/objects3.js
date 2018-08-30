/*
CAR GAS PRICE CALCULATOR

1-Ask user to enter min and max mileage and create 4 random mileage between max and min and store them into an array

2-Ask user to enter the gas prices for regular, premium and supper and put them into an object with key and values

3-Create a constructor called Car which includes properties:
make,model,year,mileage,level,tank

4-Add a method to calculate the average mileage

5-Add a method to calculate the how much gas comsume:
if average mileage is between 0 and 500, car comsumes 10 percent more than full tank
if average mileage is between 500 and 1000, car comsumes 20 percent more than full tank
if average mileage is between 1000 and 5000, car comsumes 30 percent more than full tank
if average mileage is between 5000 and 10000, car comsumes 40 percent more than full tank
otherwise car consumes 50 percent more than full tank


6-Add a method to calculate the cost of the gas:
if car year is 2018, that car needs super level gas
if car year is between 2010 and 2018, that car needs premium level gas
if car year is between 2000 and 2010, that car needs regular gas

cost of the gas = gas price * tank

7-Create couple of car objects and console the cost of the gas

*/

// 1-Ask user to enter min and max mileage and create 4 random mileage between max and min and store them into an array
let mileageMin = Number(prompt("Please enter the minimum mileage"));
let mileageMax = Number(prompt("Please enter the maximum mileage"));
let arrMileage = [];

for (let i = 0; i < 4; i++) {
    arrMileage[i] = Math.floor(Math.random() * (mileageMax, mileageMin) + mileageMin);
}

console.log(arrMileage);
// 2-Ask user to enter the gas prices for regular, premium and supper and put them into an object with key and values
let priceRegular = Number(prompt("Enter regular gas price: "));
let pricePremium = Number(prompt("Enter premium gas price: "));
let priceSuper = Number(prompt("Enter super gas price: "));

let objGas = {
    regular: priceRegular,
    premium: pricePremium,
    super: priceSuper,
};

console.log(objGas);

function Car(make, model, year, mileage, level, tank) { // 3-Create a constructor called Car which includes properties
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.level = level;
    this.tank = tank;
    // 4-Add a method to calculate the average mileage
    this.averageMileage = function () {
        let averageMileage = 0;
        let today = new Date();
        let thisYear = today.getFullYear();
        if (this.year == thisYear) {
            averageMileage = Math.floor(this.mileage);
        } else if (this.year < thisYear) {
            averageMileage = Math.floor(this.mileage / (thisYear - this.year));
        }
        return averageMileage;

    }
    //5-Add a method to calculate the how much gas comsume
    this.gasConsume = function () {
        let gasConsume = 0;
        if (this.averageMileage >= 0 && this.averageMileage <= 500) {
            gasConsume = this.tank * 1.1;
        } else if (this.averageMileage > 500 && this.averageMileage <= 1000) {
            gasConsume = this.tank * 1.2;
        } else if (this.averageMileage > 1000 && this.averageMileage <= 5000) {
            gasConsume = this.tank * 1.3;
        } else if (this.averageMileage > 5000 && this.averageMileage <= 10000) {
            gasConsume = this.tank * 1.4;
        } else if (this.averageMileage > 10000) {
            gasConsume = this.tank * 1.5;
        }
        return gasConsume;
    }
    // 6-Add a method to calculate the cost of the gas
    this.gasCost = function () {
        let gasCost = 0;
        if (this.year == 2018) {
            gasCost = objGas.super * this.tank;
        } else if (this.year >= 2010 && this.year < 2018) {
            gasCost = objGas.premium * this.tank;
        } else if (this.year >= 2000 && this.year < 2010) {
            gasCost = objGas.regular * this.tank;
        }
        return gasCost;
    }
}

// 7-Create couple of car objects and console the cost of the gas.

let car1 = new Car("Toyota", "Corolla", 2015, 12000, "premium", 50);
let car2 = new Car("Honda", "Civic", 2017, 80000, "premium", 60);
let car3 = new Car("Mazda", "3", 2018, 1300, "super", 40);
let car4 = new Car("Opel", "Astra", 2005, 160000, "regular", 55);
let car5 = new Car("VW", "Golf", 2010, 105000, "premium", 50);

console.log("Gast cost of " + car1.make + " " + car1.model + " : " + car1.gasCost());
console.log("Gast cost of " + car2.make + " " + car2.model + " : " + car2.gasCost());
console.log("Gast cost of " + car3.make + " " + car3.model + " : " + car3.gasCost());
console.log("Gast cost of " + car4.make + " " + car4.model + " : " + car4.gasCost());
console.log("Gast cost of " + car5.make + " " + car5.model + " : " + car5.gasCost());

console.log("Average mileage of " + car1.make + " " + car1.model + " : " + car1.averageMileage());
console.log("Average mileage of " + car2.make + " " + car2.model + " : " + car2.averageMileage());
console.log("Average mileage of " + car3.make + " " + car3.model + " : " + car3.averageMileage());
console.log("Average mileage of " + car4.make + " " + car4.model + " : " + car4.averageMileage());
console.log("Average mileage of " + car5.make + " " + car5.model + " : " + car5.averageMileage());

// TODO - gasConsume() returns 0
console.log("Gas consume of " + car1.make + " " + car1.model + " : " + car1.gasConsume());

