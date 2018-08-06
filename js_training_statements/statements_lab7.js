// function stringTimes(string, number) {
//     var newString = "";
//     for (var i = 0; i < number; i++); {
//         newString = string.concat(string);
//     }
//     return newString;
// }

// var printString = stringTimes("Hi", 4);
// console.log(printString);

//Question 1
function stringTimes(string, number) {
    var newString = "";
    for (var i = 0; i < number; i++); {
        newString += string;
    }
    console.log(newString);
}

stringTimes("Hi", 3);
stringTimes("Hi", 5);

//Question 2

function love6(number1, number2) {
    var result = false;
    if (number1 == 6 || number2 == 6) {
        result = true;
    } else if (number1 + number2 == 6) {
        result = true;
    }
    return result;
}

console.log(love6(6, 4)); // true
console.log(love6(4, 5)); // false
console.log(love6(1, 5)); // true
console.log(love6(12, 6)); // true

// Question 3

function specialEleven(number) {
    var result = false;
    if (number % 11 == 0 || number % 11 == 1) {
        result = true;
    }
    return result;
}

console.log(specialEleven(22)); // true
console.log(specialEleven(23)); // true
console.log(specialEleven(24)); // false

// Question 4

function deerPlay(temperature, isSummer) {
    play = false;
    if (temperature >= 60 && temperature <= 90 && isSummer == false) {
        play = true;
    } else if (temperature >= 60 && temperature <= 100 && isSummer) {
        play = true;
    }
    return play;
}

console.log(deerPlay(70, false)); // true
console.log(deerPlay(95, false)); // false
console.log(deerPlay(95, true)); // true

// Question 5

function arrayCount9(arrayNine) {
    var countNine = 0;
    for (var i = 0; i < arrayNine.length; i++) {
        if (arrayNine[i] == 9) {
            countNine++;
        }
    }
    return countNine;
}

console.log(arrayCount9([1, 2, 9])); //1
console.log(arrayCount9([1, 9, 9])); //2 
console.log(arrayCount9([1, 9, 9, 3, 9])); //3

// Question 6

function cigarParty(cigars, isWeekend) {
    result = false;
    if (cigars >= 40 && cigars <= 60 && isWeekend == false) {
        result = true;
    } else if (isWeekend) {
        result = true;
    }
    return result;
}

console.log(cigarParty(30, false)); // false
console.log(cigarParty(50, false)); // true
console.log(cigarParty(70, true)); // true


