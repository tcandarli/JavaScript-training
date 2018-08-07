/*
Question-1
Write a function that accepts a string and a non-negative number, and prints a larger 
string that is number copies of the original String.
stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*/

function stringTimes(string, number) {
    var copyString = "";
    for (var i = 0; i < number; i++) {
        copyString += string;
    }
    console.log(copyString);
}

stringTimes("Hi", 2);
stringTimes("Hi", 3);
stringTimes("Hi", 1);

/*
Question-2
The number 6 is a truly great number. Write a function that accepts num1 and num2, prints true if either one is 6. Or if their sum or difference is 6. 
love6(6, 4) → true
love6(4, 5) → false
love6(1, 5) → true
love6(12, 6); ->true
*/

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

/*
Question-3
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Write a function that accepts a number and prints true if the given number is special.
specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false
*/

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

/*
Question-4
You and your date are trying to get a table at a restaurant. The parameter "yourStyle" is the stylishness of your clothes, 
in the range 0..10, and "dateStyle" is the stylishness of your date's clothes. The result getting the table is encoded 
as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). 
With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe). 
Write a function that accepts yourStyle and dateStyle and prints the result
dateFashion(5, 10) → 2
dateFashion(5, 2) → 0
dateFashion(5, 5) → 1
*/

function dateFashion(style1, style2) {
    var result = 1;
    if (style1 >= 8 || style2 >= 8) {
        result = 2;
    } else if (style1 <= 2 || style2 <= 2) {
        result = 0;
    }
    console.log(result);
}

dateFashion(5, 10);
dateFashion(5, 2);
dateFashion(5, 5);


/*
Question-5
Write a function that accepts an array and prints the number of 9 s in the array
arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
*/

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

/*
Question-6
When chipmonks get together for a party, they like to have cigars. A chipmonk party is successfull when the number of cigars is between 40 and 60. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Write a function that accepts number of cigars and a boolean for weekend, and prints true if the party with the given values is successful, or false otherwise.
cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true
*/

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

/*
Question-7
Write a function that accepts an array and prints true if the first instance of "x" in the array 
is immediately followed by another "x". if array doesnt have "x", print "not found"
doubleX(["a","x","x","b","b"]) → true
doubleX(["a","x","a","x","a","x"]) → false
doubleX(["x","x","x","x","x"]) → true
doubleX(["a","a"]); -> not found
*/

function doubleX(arrayX) {
    var result;
    result1 = false;
    result2 = true;
    result3 = "not found"

    for (i = 0; i < arrayX.length; i++) {
        if (arrayX[i] == "x" && arrayX[i + 1] == "x") {
            result = result2;
            if (result) {
                break;
            }
        } else if (arrayX[i] != "x" && arrayX[i + 1] == "x") {
            result = result1;
        } else if (arrayX[i] != "x") {
            result = result3
        }

    }
    console.log(result)
}

doubleX(["a", "x", "x", "b", "b"]);
doubleX(["a", "x", "a", "x", "a", "x"]);
doubleX(["x", "x", "x", "x", "x"]);
doubleX(["a", "a"]);


/*
Question-8
The deers in VA spend most of the day playing. In particular, they play if the temperature is between 60 and 90. Unless it is summer, then the upper limit is 100 instead of 90.
Write a function that accempts temperature and a boolean isSummer, prints true if the deers play and false otherwise.
squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true
*/

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

/*
Question-9
You are driving a little too fast, and a police officer stops you. Write a function to compute the result: 
0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. 
If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. 
Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
caughtSpeeding(60, false) → 0
caughtSpeeding(65, false) → 1
caughtSpeeding(65, true) → 0
*/

function caughtSpeeding(speed, isBirthday) {
    var result;
    if (speed <= 60 && isBirthday == false) {
        result = 0;
    } else if (speed >= 61 && speed <= 81 && isBirthday == false) {
        result = 1;
    } else if (speed >= 61 && speed <= 81 && isBirthday == true) {
        result = 0;
    } else if (speed >= 81) {
        result = 2;
    }
    console.log(result);
}

caughtSpeeding(60, false);
caughtSpeeding(65, false);
caughtSpeeding(65, true);

/*
Question-10
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, 
write a funtion that accepts the indexOfDay and isVacation and prints a string of the form "7:00" indicating 
when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". 
Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
alarmClock(1, false); ->"7:00"
alarmClock(5, false); ->"7:00"
alarmClock(0, false); ->"10:00"
alarmClock(2,true); ->"10:00"
alarmClock(7,true); ->off
*/

function alarmClock(day, isVacation) {
    var result;
    var result1 = "7.00";
    var result2 = "10:00";
    var result3 = "Off";
    if (day > 0 && day <= 5 && isVacation == false) {
        result = result1;
    } else if (day > 0 && day <= 5 && isVacation) {
        result = result2;
    } else if (day >= 5 && isVacation == false) {
        result = result2;
    } else if (day == 0 || day >= 6 && isVacation == false) {
        result = result2
    } else if (day == 0 || day >= 6 && isVacation) {
        result = result3;
    }
    console.log(result);
}

alarmClock(1, false);
alarmClock(5, false);
alarmClock(0, false);
alarmClock(2, true);
alarmClock(7, true);