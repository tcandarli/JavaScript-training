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

let mainMenu = Number(prompt("Please select \n1.Vegetables \n2.Fruits"));
if (mainMenu = 1) {
    let vegetable = Number(prompt("Please select vegetable  \n1.Cucumber   $2.5 \n2.Tomatoes    $3\n3.Onion          $1.5 \n4.Pepper        $2 \n5.Carrot         $4"));

}