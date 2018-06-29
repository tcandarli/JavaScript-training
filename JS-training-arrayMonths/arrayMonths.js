// Finds the month in an array


function findMonth(number) {
    let month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return month[number-1];
}

console.log(findMonth(2)); //returns February