/*
Create a game that whenever player reaches level 10, a new robot capability is unlocked:the laser beam capability. At level 10, new robot objects receive their laser beams.

1- Create a Game Constructor and set the level to 0

2- Create a Robot Constructor with properties name, year, owner

3- Create a method called play that will increase the level whenever you call. 

    Print inside this method: Welcome to Level ___

4- Create a method called unlock that will check if level is equal to 10. If level is 10, create another method(inside the if statement) called deployLaser that prints: "name of your robot" blasting you with laser beams.

5- Create 2 Robot objects and call deployLaser method. 

** We have 2 constructors which are Game and Robot. We need to create some relationship between, So you have to put the methods(requirement-3 and 4) such a place that they can be inherited.

Sample Output Should be :

Welcome to level 1
Welcome to level 2
Welcome to level 3
Welcome to level 4
Welcome to level 5
Welcome to level 6
Welcome to level 7
Welcome to level 8
Welcome to level 9
Welcome to level 10
Robby is blasting you with laser beams.
Rosie is blasting you with laser beams.
*/

function Game() {
    this.level = 0;
    this.play = function () {
        this.level += 1;
        console.log(`Welcome to Level ${this.level}`);
    };
    this.unlock = function () {
        if (this.level === 10) {
            this.deployLaser = function () {
                console.log(`${this.name} is blasting you with laser beams`);
            }
        }

    }

}

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

let game1 = new Game();
let game2 = new Game();
console.log(game1);
console.log(game2);

game1.play();
game1.play();
game1.play();
game1.play();
game1.play();
game1.play();
game1.play();
game1.play();
game1.play();
game1.play();
game1.play();

Robot.prototype = Game.prototype;
let robot1 = new Robot("Robby", 2017, "John");
let robot2 = new Robot("Rosie", 2018, "Mary");

