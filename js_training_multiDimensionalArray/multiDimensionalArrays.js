// Multidimensinal array
var activities = [
    ["work", 9, 1, 4],
    ["eat", 2],
    ["commute", 2],
    ["sleep", 7, 9]
];
// console.log(activities);
// console.log(activities[2][1]);

for (var i=0; i<activities.length; i++) {
    var innerArrayLength = activities[i].length;
    for (var j=0; j<innerArrayLength; j++){
        console.log("[" + i + "," + j + "]");
    }
}

multiArray[0] = Array(arrayLength);
multiArray[1] = Array(arrayLength);
multiArray[2] = Array(arrayLength);


// Multidimensional array
var arrayLength = 3;
var multiArray = Array(arrayLength);

for (var i = 0; i < arrayLength; i++) {
    multiArray[i] = Array(arrayLength);
}
console.log(multiArray);
multiArray[0][0] = "apple";
multiArray[0][1] = "banana";
multiArray[0][2] = "cherry";
multiArray[1][0] = 2;
multiArray[1][1] = 5;
multiArray[1][2] = 9;
multiArray[2][0] = ["java", "phyton"];
multiArray[2][1] = ["sql", "oracle"];
multiArray[2][2] = ["javascript", "Typescript"];
// console.log(multiArray);
console.log(multiArray[2]);
console.log(multiArray[2][2][1]);


multiArray = [
    ["apple", "banana", "cherry"],
    [2, 5, 9],
    [
        ["java", "phyton"],
        ["sql", "oracle"],
        ["hp", "apple", "acer"]

    ]
]

for (var i = 0; i < multiArray.length; i++) {
    for (var j = 0; j < multiArray[i].length; j++) {
        console.log("[" + i + j + "]" + "=" + multiArray[i][j]);
    }
}

