var string = "JavaScript";

console.log(string.length);


// Dislay numbers of characters

var name = "John";
var lastName = "Tesla";

console.log(name.length + lastName.length);


// // charAt()
var string = "Java Script";

console.log(string.charAt(2)); // v
console.log(string.charAt(4)); // 
console.log(string.charAt(7)); // r

// Display each character
var myString = "Java Script";

for (var i = 0; i < myString.length; i++) {
    if (myString.charAt(i) != " ") {
        console.log(myString.charAt(i));
    }
}

// concat() method
var s1 = "Hello";
var s2 = "World";
var s3 = "JavaScript"
var s4 = s1.concat(s2).concat(s3);
console.log(s4);

// Generate password

var password = "";
var string1 = "";
var string2 = "";

function passwordCreate(string1, string2) {
    string1 = prompt("Enter string1");
    string2 = prompt("Enter string2");
    for (i = 0; i < 3; i++) {
        password = password.concat(string1.charAt(i));
    }
    return password.concat(string2.length);
}
var generatePassword = passwordCreate("Java", "Script");
console.log(generatePassword);

// includes() method
var str = "Hello Mike, welcome to Amazon world."
var n = str.includes("welcome");
console.log(n); // true


// function checkedString (str1, str2) {
if (str1.includes(str2)) {
    console.log(str2.length);
} else {
    console.log("Not found");
}

checkedString("Your order confirmation number is XYZ", "confirmation");

//indexOf()
var str = "Hello Mike, welcome to Amazon world."
var n = str.indexOf("Mike");
var i = str.indexOf("Hello");
console.log(n); // 6
console.log(i); // 0

// function checkedString(str1, str2) {
if (str1.includes(str2)) {
    console.log(str1.indexOf(str2));
} else {
    console.log("Not found");
}

checkedString("Your order confirmation number is XYZ", "confirmation");

// replace() method
var str = "Ebay is very good website";
var replaced = str.replace("Ebay", "Bestbuy");
console.log(replaced);

// replace()
var str1 = "John";
var str2 = "Brackets";
var firstLetters = str1.charAt(0) + str1.charAt(1);
var lastLetters = str2.charAt(str2.length - 2) + str2.charAt(str2.length - 1);
var newStr = str2.replace(lastLetters, firstLetters);

console.log(newStr);

// Manuel replace()
console.log(str2.replace("ar", "Or"));

var str1 = "John";
var str2 = "Brackets";
var firstLetters = str1.charAt(0).concat(str1.charAt(1));
var lastLetters = str2.charAt(str2.length - 2).concat(str2.charAt(str2.length - 1));
var newStr = str2.replace(lastLetters, firstLetters);

console.log(newStr);

// search()
var str = "I want to be number 1 test automation developer";
console.log(str.search("automation")); //27
console.log(str.search("1")); //20


var str = "In order to be a good  developer, I need to practice at last 2 to 3 hours a day."
if (str.search("developer") >= 0) {
    console.log("It is found");
} else {
    console.log("It is not found");
}

// slice()
var str = "The morning is upon us.";
console.log(str.slice(1, 8)); // he morn
console.log(str.slice(4, -2)); // morning us upon u
console.log(str.slice(12)); // is upon us
console.log(str.slice(30)); // ""

var str1 = "Welcome to JavaScript";
console.log(str1.length);
console.log(str1.slice(4, -3)) // ome to JavaScr
console.log(str1.slice(4, 18)) // ome to JavaScr

console.log(str1.slice(5, -6)) // me to Java
console.log(str1.slice(5, 15)) // me to Java



// slice()

var str = "In order to be a good test automation developer, I need to practice at last 2 to 3 hours a day."
var indexStr = str.indexOf("automation");
var lengthStr = indexStr + 10;
if (str.slice(indexStr, lengthStr) == "automation") {
    console.log("It is found");
} else {
    console.log("It is not found");
}