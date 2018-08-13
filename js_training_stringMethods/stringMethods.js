// split() method

var str = "In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";
var arrayStr = str.split(" ");
var count = 0;
for (var i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] == "Netscape") {
        count++
    }
}
console.log(count); // 4

// for how many words
var array = str.split(" ");
console.log(array.length);

//Last word
console.log(array[array.length-1]);

// for how many sentences 
var sentence = str.split(".");
console.log(array.length);

// Includes or not
if (array.includes("Netscape")){
    console.log("found");
}

// How many times
var counter =0;
for(var i=0; i<array.length;i++){
    if(array[i] == "Netscape"){
        counter++;
    }
}
console.log(counter);


// substr () method (start:required, length:optional)
var str = "JavaScript";
console.log(str.substr(0,1)); // J
console.log(str.substr(1)); // avaScript
console.log(str.substr(-3)); // ipt
console.log(str.substr(-20, 2)); //Ja
console.log(str.substr(20, 2)); //" "
console.log(str.substr(-7, 2)); // aS
console.log(str.substr(-1, 1)); // t
console.log(str.substr(1, -1)); // " "



var str = "JavaScript";
console.log(str.substr(0,1));   // J    -> 0th index, 1 character.

console.log(str.substr(1,0));   // " "  -> 1st index, 0 character. NOTHING

console.log(str.substr(-1,1));  // t    -> -1st index, 1 character. start from end

console.log(str.substr(1,-1));  // " "  -> 1st index, -1 character. NOTHING

console.log(str.substr(-3));    // ipt  -> -3rd index. start from end. reads left to right.

console.log(str.substr(1));     // avaScript -> 1st index. reads left to right.

console.log(str.substr(-20,2)); // Ja   -> don't have -20th index. It starts beginning and reads 2 character.

console.log(str.substr(20,2));  // " "  -> don't have 20th index. NOTHING


// substring() method (indexStart:required indexEnd: optional)

var str = "Hello world!";

console.log(str.substring(0,1));     //H            -> starts 0th index. reads until 1st index. But, 1th is not included. 
console.log(str.substring(1,0));     //H            -> 1 > 0 = swap it. starts 0th index. reads until 1st index. But, 1th is not included.
console.log(str.substring(0,6));     //Hello        -> starts 0th index. reads until 6th index. But, 6th is not included.
console.log(str.substring(4));       //o world!     -> starts 4th index. reads until end.
console.log(str.substring(4,7));     //o w          -> starts 4th index. reads until 7th index. But, 7th is not included.
console.log(str.substring(7,4));     //o w          -> 7 > 4 = swap it. starts 4th index. reads until 7th index. But, 7th is not included.
console.log(str.substring(0,7));     //Hello w      -> starts 0th index. reads until 7th index. But, 7th is not included.
console.log(str.substring(0,10));    //Hello worl   -> starts 0th index. reads until 10th index. But, 10th is not included.

var str = "Hello world!";

console.log(str.substring(0, 1)); // H
console.log(str.substring(1, 0)); // H
console.log(str.substring(0, 6)); // Hello
console.log(str.substring(4)); // o world!
console.log(str.substring(4, 7)); // o w

var str = "JavaScript";
console.log(str.substring(str.length-4, 2)); // index 6, 2 swap to 2,6 result vaSc
console.log(str.substring(2,3)); // v
console.log(str.substring(str.length, 2)); // 2,10 result vaScript

// toLowerCase() method

var str = "JavaScript";
console.log(str.toLowerCase()); // javascript
console.log(str);
str = str.toLowerCase();
console.log(str);

// // toUpperCase() method
var str = "JavaScript";
console.log(str.toUpperCase()); //JAVASCRIPT

var str = "Javascript";

var newStr = "";
for (var i = 0; i < str.length; i++) {
    if (i == 2 || i == 5) {
        var upper = str.charAt(i).toUpperCase();
    } else {
        upper = str.charAt(i);
    }
    newStr += upper;
}

console.log(str);
console.log(newStr);



// trim() method - removes whitespaces from both ends of a string

var str = "   JavaScript";
console.log(str.trim());
var str = "JavaScript      ";
console.log(str.trim());
var str = "   JavaScript     ";
console.log(str.trim());
var str = "   Ja   va  Scri  pt   ";
console.log(str.trim());


var str = "     342      "
console.log("|" + str.trim() + "|")