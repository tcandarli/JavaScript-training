/* Question 1
Given a string, return true if the first 2 chars in the string also 
appear at the end of the string, such as with "edited".

// Sample output
frontAgain("edited") // true
frontAgain("edit") // false
frontAgain("ed") // true
*/

function frontAgain(str) {
    if (str.length > 2) {
        var first2Char = str.substr(0, 2);
        var last2Char = str.substr(-2);
        if (first2Char == last2Char) {
            console.log("true");
        } else {
            console.log("false");
        }
    } else {
        console.log(true);
    }
}

frontAgain("edited") // true
frontAgain("edit") // false
frontAgain("ed") // true

/* Question 2

Return the number of times that the string "hi" appears anywhere in the given string.

countHi("abc hi ho") → 1
countHi("ABChi hi") → 2
countHi("hihi") → 2
*/

function countHi(str) {
    var count = 0;
    var arrayStr = str.split("");
    for (var i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i] == "h" && arrayStr[i + 1] == "i") {
            count++;
        }
    }
    console.log(count);

}

// Sample 
countHi("abc hi ho") // 1
countHi("ABChi hi") // 2
countHi("hihi") // 2

// Second option
function countHi(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "h" && str.charAt(i + 1) == "i") {
            count++;
        }
    }
    console.log(count);

}

// Sample 
countHi("abc hi ho") // 1
countHi("ABChi hi") // 2
countHi("hihi") // 2

/* Question 3

Return true if the string "cat" and "dog" appear the same number of times in the given string.

catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true
*/

function catDog(str) {
    var countCat = 0;
    var countDog = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "c" && str.charAt(i + 1) == "a" && str.charAt(i + 2) == "t") {
            countCat++
        }
        if (str.charAt(i) == "d" && str.charAt(i + 1) == "o" && str.charAt(i + 2) == "g") {
            countDog++
        }
    }
    if (countCat == countDog) {
        console.log("true");
    } else {
        console.log("false");
    }
}

catDog("catdog") // true
catDog("catcat") // false
catDog("1cat1cadodog") // true

// Second option

function catDog(str) {
    var countCat = 0;
    var countDog = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.substring(i, i + 3) == "cat") {
            countCat++
        }
        if (str.substring(i, i + 3) == "dog") {
            countDog++
        }
    }
    if (countCat == countDog) {
        console.log("true");
    } else {
        console.log("false");
    }
}

catDog("catdog") // true
catDog("catcat") // false
catDog("1cat1cadodog") // true


/* Question 4
Given a string, return a string where for every char in the original, there are two chars.

doubleChar("The") → "TThhee"
doubleChar("AAbb") → "AAAAbbbb"
doubleChar("Hi-There") → "HHii--TThheerree"
*/

function doubleChar(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        newStr += str.charAt(i) + str.charAt(i);
    }
    console.log(newStr);
}

doubleChar("The") // "TThhee"
doubleChar("AAbb") // "AAAAbbbb"
doubleChar("Hi-There") // "HHii--TThheerree"

/* Question 5
Given a string, return true if it ends in "ly".

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false
*/

function endsLy(str) {
    if (str.substr(-2) == "ly") {
        console.log("true");
    } else {
        console.log("false");
    }
}

endsLy("oddly") // true
endsLy("y") // false
endsLy("oddy") // false

/* Question 6
Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""
*/

function withoutEnd2(str) {
    var newStr = str.slice(1, -1);
    console.log(newStr);
};

withoutEnd2("Hello") // "ell"
withoutEnd2("abc") // "b"
withoutEnd2("ab") // ""

/* Question 7
Given a string, return true if "bad" appears starting at index 0 or 1 in the string, 
such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. 
Note: use .equals() to compare 2 strings.

hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false
*/
function hasBad(str) {
    if (str.substr(0, 4).includes("bad")) {
        console.log(true);
    } else {
        console.log("false");
    }
}

hasBad("badxx") // true
hasBad("xbadxx") // true
hasBad("xxbadxx") // false

/* Question 8
Given a string, return a string length 2 made of its first 2 chars. 
If the string length is less than 2, use '@' for the missing chars.

atFirst("hello") → "he"
atFirst("hi") → "hi"
atFirst("h") → "h@"
*/

function atFirst(str) {
    if (str.length >= 2) {
        console.log(str.substr(0, 2));
    } else {
        console.log(str.concat("@"));
    }
}

atFirst("hello") // "he"
atFirst("hi") // "hi"
atFirst("h") // "h@"