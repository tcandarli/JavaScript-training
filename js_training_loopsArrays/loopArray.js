// Add a product
var selection = 0;
do {
    selection = parseInt(prompt("1. Add new product \n2. Remove a product \n3. Edit a product \n4. Print \n5. Exit"))

    var items = ["Orange", "Apple", "Melon"];
    if (selection == 1) {
        var newItem = prompt("Currently you have " + items + " in the list. \nWhat do you want to add?");
        items.push(newItem);
        alert(newItem + " is added to list successfully!")
        alert("New items are : " + items);
    } else if (selection == 2) { // Remove an item
        var removeItem = prompt("Currently you have " + items + " in the list. \nWhat do you want to remove?");
        var found = false;
        for (var i = 0; i < items.length; i++) {
            if (removeItem == items[i]) {
                items.splice(i, 1);
                found = true;
            }
        }
        if (found) {
            alert(removeItem + " successfully removed!")
            alert("New items are : " + items)
        } else {
            alert(removeItem + " could not be found!")
        }
    } else if (selection == 3) { // Edit a product
        var editItem = prompt("Currently you have " + items + " in the list. \nEnter what do you want to change?");
        var addItem = prompt("What is the new product that you want to add?");
        var found = false;
        for (var i = 0; i < items.length; i++) {
            if (editItem == items[i]) {
                items.splice(i, 1, addItem);
                found = true;
            }
        }
        if (found) {
            alert("Successfully changed!")
            alert("New items are : " + items)
        } else {
            alert(editItem + " could not be found!")
        }
    } else if (selection == 4) {    // print products
        for (var i = 0; i < items.length; i++) {
            alert(items[i]);
        }
    } else if (selection == 5) {
        // Exit 
        break;
    } else {
        alert("Please enter a valid number!")
    }
} while (selection != 5)
alert("Thank you!")