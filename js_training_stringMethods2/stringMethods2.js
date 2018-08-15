// /* Question1
// Returns true if for every '*' (star) in the string, if there are chars both immediately 
// before and after the star, they are the same.

// sameStarChar("xy*yzz") → true
// sameStarChar("xy*zzz") → false
// sameStarChar("*xa*az") → true
// */

function sameStarChar(str) {
    var result;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "*" && (str.charAt(i + 1) == str.charAt(i - 1))) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    console.log(result);
}

sameStarChar("xy*yzz") // true
sameStarChar("xy*zzz") // false
sameStarChar("*xa*az") // true

function sameStarChar(str) {

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "*" && (str.charAt(i + 1) == str.charAt(i - 1))) {
            console.log("true");
            break;
        } else if (i == str.length-1) {
            console.log("false");
        }
    }
}

sameStarChar("xy*yzz") // true
sameStarChar("xy*zzz") // false
sameStarChar("*xa*az") // true


// /* Question2
// We'll say that a "triple" in a string is a char appearing three times in a row. 
// Return the number of triples in the given string. The triples may overlap.

// countTriple("abcXXXabc") → 1
// countTriple("xxxabyyyycd") → 3
// countTriple("a") → 0
// */

function countTriple(str) {
    var countChar = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i + 1) && str.charAt(i) == str.charAt(i + 2)) {
            countChar++;
        }
    }
    console.log(countChar);
}

countTriple("abcXXXabc") // 1
countTriple("xxxabyyyycd") // 3
countTriple("a") // 0

// // Second option

function countTriple(str) {
    var countChar = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.substring(i, i+1) == str.substring(i+1, i+2) && str.substring(i, i+1) == str.substring(i+2, i+3)) {
            countChar++;
        }
    }
    console.log(countChar);
}

countTriple("abcXXXabc") // 1
countTriple("xxxabyyyycd") // 3
countTriple("a") // 0

// /* Question3
// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately 
// to its left or right. Return true if all the g's in the given string are happy.

// gHappy("xxggxx") → true
// gHappy("xxgxx") → false
// gHappy("xxggyygxx") → false
// */

// // function gHappy(str) {
// //     for (var i = 0; i < str.length; i++) {
// //         if (str.substr(i, 1) == "g") {
// //             var isFound = false;
// //             if (str.substr(i + 1, 1) == "g" || str.substr(i - 1, 1) == "g") {
// //                 isFound = true;
// //             }
// //         }
// //     }
// //     if (isFound) {
// //         console.log("true");
// //     } else {
// //         console.log("false");
// //     }
// // }

// // gHappy("xxggxx") // true
// // gHappy("xxgxx") // false
// // gHappy("xxggyygxx") // false

// /* Question4
// Given a string, return true if the number of appearances of "is" anywhere in the 
// string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

// equalIsNot("This is not") → false
// equalIsNot("This is notnot") → true
// equalIsNot("noisxxnotyynotxisi") → true
// */

// function equalIsNot(str) {
//     countIs = 0;
//     countNot = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.substr(i, 2) == "is") {
//             countIs++;
//         }
//         if (str.substr(i, 3) == "not") {
//             countNot++;
//         }
//     }
//     if (countIs == countNot) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// equalIsNot("This is not") // false
// equalIsNot("This is notnot") // true
// equalIsNot("noisxxnotyynotxisi") // true

// /* Question5
// A sandwich is two pieces of bread with something in between. Return the string 
// that is between the first and last appearance of "bread" in the given string, 
// or return the empty string "" if there are not two pieces of bread.

// getSandwich("breadjambread") → "jam"
// getSandwich("xxbreadjambreadyy") → "jam"
// getSandwich("xxbreadyy") → ""
// */

function getSandwich(str) {

}

getSandwich("breadjambread") // "jam"
getSandwich("xxbreadjambreadyy") // "jam"
getSandwich("xxbreadyy") // ""

// /* Question6
// Given two strings, return true if either of the strings appears at the very 
// end of the other string, ignoring upper/lower case differences (in other words, 
// the computation should not be "case sensitive"). Note: str.toLowerCase() 
// returns the lowercase version of a string.=

// endOther("Hiabc", "abc") → true
// endOther("AbC", "HiaBc") → true
// endOther("abc", "abXabc") → true
// */

// /* Question7

// Given a string, if the string begins with "red" or "blue" return 
// that color string, otherwise return the empty string.

// seeColor("redxx") → "red"
// seeColor("xxred") → ""
// seeColo("blueTimes") → "blue"
// */