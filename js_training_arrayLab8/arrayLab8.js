/*Question-1
Write a function that accepts an array and return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
Sample Output:
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
============================================================================================
*/
function firstLast(Array) {
    var lastElement = Array.length - 1;
    var found = false;
    if (Array[0] == 6 || Array[lastElement] == 6) {
        found = true;
    }
    console.log(found);
}

// Sample output
firstLast([1, 2, 6]); // true
firstLast([6, 1, 2, 3]); // true
firstLast([13, 6, 1, 2, 3]); // false

/*
Question-2
Write a function that accepts an array and check the length of the array first. If the length is more than one, 
check if the first element and last element are equal. if it is print true, if not print false. 
If the length is not more than 1, print not valid an array
Sample Output:
sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true
sameFirstLast([1]); → not a valid array
============================================================================================
*/

function sameFirstLast(Array) {
    var isArray = false;
    if (Array.length > 1) {
        isArray = true;
    }
    var result;
    var result1 = "true";
    var result2 = "false";
    var result3 = "Not a valid array!";
    var firstElement = Array[0];
    var lastElement = Array[Array.length - 1];
    if (isArray && firstElement == lastElement) {
        result = result1;
    } else if (isArray == false) {
        result = result3;
    } else {
        result = result2;
    }
    console.log(result);
}

// Sample output
sameFirstLast([1, 2, 3]); // false
sameFirstLast([1, 2, 3, 1]); // true
sameFirstLast([1, 2, 1]); // true
sameFirstLast([1]); // Not a valid array!


/*
Question-3
Write a function that accepts 2 arrays and checks the lengths of the arrays first. 
If lengths are more than 1, it prints true if the arrays have the same first element or 
they have the same last element. If the length of the array is not more than 1, 
it prints the "array1 is not a valid array " or "array2 is not a valis array"
Sample Output:
commonEnd([1, 2, 3], [7, 3]); - >true
commonEnd([1, 2, 3], [7, 3, 2]); - >false
commonEnd([1, 2, 3], [1, 3]); - >true
commonEnd([1], [7, 3]); - >array1 is not a valid array
commonEnd([1, 2, 3], [1]); - >array2 is not a valid array
=============================================================================================
*/

function commonEnd(Array1, Array2) {
    var lengthArray1 = Array1.length;
    var lengthArray2 = Array2.length;
    var result;
    var result1 = "True";
    var result2 = "False";
    var result3 = "Array1 is not a valid array";
    var result4 = "Array2 is not a valid array";
    if (lengthArray1 <= 1) {
        result = result3;
    } else if (lengthArray2 <= 1) {
        result = result4;
    } else if (lengthArray1 > 1 && lengthArray2 > 1 && Array1[0] == Array2[0] || Array1[lengthArray1 - 1] == Array2[lengthArray2 - 1]) {
        result = result1;
    } else {
        result = result2;
    }
    console.log(result);
}

// Sample output
commonEnd([1, 2, 3], [7, 3]); // true
commonEnd([1, 2, 3], [7, 3, 2]); // false
commonEnd([1, 2, 3], [1, 3]); // true
commonEnd([1], [7, 3]); // Array1 is not a valid array
commonEnd([1, 2, 3], [1]); // Array2 is not a valid array

/*
Question-4
Write a function that accepts an array and prints the sum of all elements in the array
Sample Output:
sum([1, 2, 3]); - >6
sum([5, 11, 2]); - > 18
sum([7, 0, 0]); - >7
sum([3, -2, 10,4]); - >15
=============================================================================================
*/

function sum(Array) {
    var sum = 0;
    for (i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    console.log(sum);
}

// Sample output
sum([1, 2, 3]); // 6
sum([5, 11, 2]); // 18
sum([7, 0, 0]); // 7
sum([3, -2, 10, 4]); // 15

/*
Question-5
Write a function that accepts an array and prints an array with the elements "rotated left"
so [1,2,3] yields [2,3,1]
Sample Output:
rotateLeft([1, 2, 3]);  - >[2,3,1]
rotateLeft([5, 11, 9]); - >[11,9,5]
rotateLeft([7, 0, 0]); - >[0,0,7]
rotateLeft([17, 12, 10, 8]); - >[12,10,8,17]
============================================================================================
*/

function rotateLeft(Array) {
    var newArray = [];
    for (var i = 0; i < Array.length; i++) {
        newArray [i-1] = Array[i];
    }
    console.log(newArray)
}

//Sample Output:
rotateLeft([1, 2, 3]); // [2,3,1]
rotateLeft([5, 11, 9]); // [11,9,5]
rotateLeft([7, 0, 0]); // [0,0,7]
rotateLeft([17, 12, 10, 8]); // [12,10,8,17]

/*
Question-6
Write a function that accepts an array and figure out which is greatest element 
in the array, and set all the other elements to be that value. Print the changed array.
Sample Output:
maxEnd([1,2,3]); - > [3,3,3]
maxEnd([11,5,9]); - > [11,11,11]
maxEnd([2,11,17]); - > [17,17,17]
=============================================================================================
*/

function maxEnd(Array) {
    var greatest = Array[i];
    var newArray = [];
    for (var i = 0; i < Array.length; i++) {
        if (Array[i] < Array[i + 1]) {
            greatest = Array[i + 1];
        }
    }
    for (var j = 0; j < Array.length; j++) {
        newArray.push(greatest);
    }
    console.log(newArray);

}

// Sample Output:
maxEnd([1, 2, 3]); // [3,3,3]
maxEnd([11, 5, 9]); // [11,11,11]
maxEnd([2, 11, 17]); // [17,17,17]
/*
Question-7
Write a function that accepts 2 arrays and prints the second array containing the first and last elements from the first array.
Sample Output:
makeEnds([1,2,3],[]);  - >[1,3]
makeEnds([1,2,3,4],[]); - >[1,4]
makeEnds([7,4,6,2],[]); - >[7,2]
=============================================================================================
*/

function makeEnds(array1, array2) {
    array2.push(array1[0]);
    array2.push(array1[array1.length-1]);
    console.log(array2);
}

//Sample Output:
makeEnds([1,2,3],[]);  // [1,3]
makeEnds([1,2,3,4],[]); // [1,4]
makeEnds([7,4,6,2],[]); // [7,2]

/*
Question-8
Write a function that accepts an array and prints true if it contains a 2 or a 3
Sample Output:
has23([2,5]); - >true
has23([4,3]); - >true
has23([4,5]); - >false
=============================================================================================
*/

function has23(array) {
    var result = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i - 1] == 2 || array[i] == 3) {
            result = true;
        } else {
            result = false;
        }
    }
    console.log(result);
}
// Sample Output:
has23([2, 5]); // true
has23([4, 3]); // true
has23([4, 5]); // false

/*
Question-9
Write a function that accepts an array and prints a new array with double 
the length where its last element is the same as the original array, 
and all the other elements are 0.
Sample Output:
makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
makeLast([1, 2]) → [0, 0, 0, 2]
makeLast([3]) → [0, 3]
=============================================================================================
*/

function makeLast(array) {
    var newArray = [];
    var lastElement = array[(array.length - 1)];
    for (var i = 0; i < (array.length * 2) - 1; i++) {
        newArray.push(0);
    }
    newArray.push(lastElement);
    console.log(newArray);
}

// Sample Output:
makeLast([4, 5, 6]) // [0, 0, 0, 0, 0, 6]
makeLast([1, 2]) // [0, 0, 0, 2]
makeLast([3]) // [0, 3]

/*
Question-10
Write a function that accepts an array and prints true if the array contains 2 twice or 3 twice.
Sample Output:
double23([2,2]); - >true
double23([3,3]); - >true
double23([2,3]); - >false
double23([12,20,42]); - >false
double23([2,2,2]); - >false
==============================================================================================
*/

function double23(array) {
    var result = false;
    for (var i = 0; i < array.length; i++) {

        if (array[i] == 2 && array[i + 1] == 2 && array[i + 2] == 2) {
            result = false;
        } else if (array[i] == 3 && array[i + 1] == 3 && array[i + 2] == 3) {
            result = false;
        } else if (array[i] == 2 && array[i + 1] == 2) {
            result = true;
        } else if (array[i] == 3 && array[i + 1] == 3) {
            result = true;
        }
    }
    console.log(result);
}

// Sample Output:
double23([2, 2]); // true
double23([3, 3]); // true
double23([2, 3]); // false
double23([12, 20, 42]); // false
double23([2, 2, 2]); // false