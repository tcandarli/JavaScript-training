/*
Main Screen has two main products
            1.Vegetables 2.Fruits
 
if user enter 1 (vegetables ) , list 5 vegetables with price
if user enter 2 (fruit) list 5 fruits with price
if user enter different input from 1 and 2,
-alert "Please enter valid option"
Accepts 1-5 for vegetables or fruits selection,
if user enter different input, show "Please enter valid option"
after product selection,  user should enter amount between 1 to 100.
if different than this range show "Please enter amount between 1 to 100"
after amount entrance,  show total price and ask "do you want to shop more ?"
if user enter 1 (yes) start from main product, at the same time keep previous total and add new total it
if no (2) show total price say thank you
first selection only accepts 1 or 2, if not ask again
second selection only accept 1-5 ,if not ask again
amount only accept numbers 1 to 100, if not ask again
continue selection only accept 1 or 2 if not ask again
Vegetables
Cucumber   $2.5
Tomatoes    $3
Onion          $1.5
Pepper        $2
Carrot         $4
Fruits
Orange         $3.5
Banana         $4
WaterMelon  $7
Apple             $8  
Cherry            $4
*/

let total = 0;
let subTotal = 0;
let more = 0;
let products = ["Vegetables", "Fruits"];
let vegetables = [
    ["Cucumber", 2.5],
    ["Tomatoes", 3],
    ["Onion", 1.5],
    ["Pepper", 2],
    ["Carrot", 4]
];
let fruits = [
    ["Orange", 3.5],
    ["Banana", 4],
    ["Watermelon", 7],
    ["Apple", 8],
    ["Cherry", 4]
];

MAIN:
    while (true) {
        let selectProduct = Number(prompt("Please select type of prooduct \n 1. " + products[0] + "\n 2. " + products[1]));
        if (selectProduct == 1) {
            PRODUCT1: while (true) {
                let selectVegetable = Number(prompt("Please select a vegetable  \n1. " + vegetables[0][0] + "   $" + vegetables[0][1] +
                    "\n2 ." + vegetables[1][0] + "    $" + vegetables[1][1] +
                    "\n3. " + vegetables[2][0] + "     $" + vegetables[2][1] +
                    "\n4. " + vegetables[3][0] + "    $" + vegetables[3][1] +
                    "\n5. " + vegetables[4][0] + "     $" + vegetables[4][1]));
                VEGETABLE1:
                    while (true) {
                        if (selectVegetable == 1) {
                            let amount = Number(prompt("Please enter amount of " + vegetables[0][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * vegetables[0][1];
                                alert("Your card total is : " + subTotal);
                                SHOPMORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue SHOPMORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue VEGETABLE1;
                            }
                        } else if (selectVegetable == 2) {
                            amount = Number(prompt("Please enter amount of " + vegetables[1][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * vegetables[1][1];
                                alert("Your card total is : " + subTotal);
                                SHOPMORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue SHOPMORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue VEGETABLE1;
                            }
                        } else if (selectVegetable == 3) {
                            amount = Number(prompt("Please enter amount of " + vegetables[2][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * vegetables[2][1];
                                alert("Your card total is : " + subTotal);
                                SHOPMORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue SHOPMORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue VEGETABLE1;
                            }
                        } else if (selectVegetable == 4) {
                            amount = Number(prompt("Please enter amount of " + vegetables[3][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * vegetables[3][1];
                                alert("Your card total is : " + subTotal);
                                SHOPMORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue SHOPMORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue VEGETABLE1;
                            }
                        } else if (selectVegetable == 5) {
                            amount = Number(prompt("Please enter amount of " + vegetables[4][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * vegetables[4][1];
                                alert("Your card total is : " + subTotal);
                                SHOPMORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue SHOPMORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue VEGETABLE1;
                            }
                        } else {
                            alert("Please enter a valid option (1-5)!")
                            continue PRODUCT1;
                        }
                    }
            }
        }
        else if (selectProduct == 2) {
            PRODUCT2: while (true) {
                let selectFruit = Number(prompt("Please select a fruit  \n1. " + fruits[0][0] + "   $" + fruits[0][1] +
                    "\n2 ." + fruits[1][0] + "    $" + fruits[1][1] +
                    "\n3. " + fruits[2][0] + "     $" + fruits[2][1] +
                    "\n4. " + fruits[3][0] + "    $" + fruits[3][1] +
                    "\n5. " + fruits[4][0] + "     $" + fruits[4][1]));
                FRUIT1:
                    while (true) {
                        if (selectFruit == 1) {
                            let amount = Number(prompt("Please enter amount of " + fruits[0][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * fruits[0][1];
                                alert("Your card total is : " + subTotal);
                                SHOPMORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue SHOPMORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue FRUIT1;
                            }
                        } else if (selectFruit == 2) {
                            amount = Number(prompt("Please enter amount of " + fruits[1][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * fruits[1][1];
                                alert("Your card total is : " + subTotal);
                                SHOPMORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue SHOPMORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue FRUIT1;
                            }
                        } else if (selectFruit == 3) {
                            amount = Number(prompt("Please enter amount of " + fruits[2][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * fruits[2][1];
                                alert("Your card total is : " + subTotal);
                                SHOPMORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue SHOPMORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue FRUIT1;
                            }
                        } else if (selectFruit == 4) {
                            amount = Number(prompt("Please enter amount of " + fruits[3][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * fruits[3][1];
                                alert("Your card total is : " + subTotal);
                                MORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue MORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue FRUIT1;
                            }
                        } else if (selectFruit == 5) {
                            amount = Number(prompt("Please enter amount of " + fruits[4][0]));
                            if (amount >= 1 && amount <= 100) {
                                subTotal = subTotal + amount * fruits[4][1];
                                alert("Your card total is : " + subTotal);
                                MORE:
                                    while (true) {
                                        more = Number(prompt("Do you want to shop more? \n1. Yes \n2. No"));
                                        if (more == 1) {
                                            continue MAIN;
                                        } else
                                        if (more == 2) {
                                            alert("Your total is : " + subTotal + "\nThank you for shopping with us!");
                                            break MAIN;
                                        } else {
                                            alert("Please enter a valid number(1-2)");
                                            continue MORE;
                                        }
                                    }
                            } else {
                                alert("Please enter amount between 1 to 100");
                                continue FRUIT1;
                            }
                        } else {
                            alert("Please enter a valid option (1-5)!")
                            continue PRODUCT2;
                        }
                    }
            }
        }
        else {
            alert("Please enter valid option(1-2)");
            continue MAIN;
        }
    }