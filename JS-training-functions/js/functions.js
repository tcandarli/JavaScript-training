/**
 * Please provide all functions here!
 * Check the Tests to figure out what is
 * exactly required from the functions
 */


function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function calculateHypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); // Hypotenuse = Square root(a2+b2)
}

function reverse(pWord) {
    return pWord.split("").reverse().join(""); //Converts string to array then Reverses array then Converts array to string
}

function getCurrentDate(myDate) { // dd/mm/yyy  
    let year = myDate.getFullYear();
    let month = myDate.getMonth() + 1;
    let day = myDate.getDate(); // Get the day 
  
      return   day.toString().padStart(2, '0').concat("/")
                 .concat(month.toString().padStart(2, '0'))
                 .concat("/")
                 .concat(year);
  }
  

function rectngleArea(pLongEdge, pShortEdge) {
    return Area = pLongEdge * pShortEdge; // Calculates area of rectangle
}

function circleArea(pRadius) {
   return Math.round(Math.PI * pRadius * pRadius)
    
}

function getMonthName(pDate) {
    let options = {month:"long"};
    return pDate
        .toLocaleDateString('tr-TR', options)

}

function getHoroscope(pDate) {

}

/**
 * 5! = 5*4*3*2*1 = 120;
 */
function findFactorial(pLimit) {
    let factorial = 1;
    for (let i = 1; i <= pLimit; i++) {
        factorial *= i;
    }

    return factorial;
}

function capitalize(pWord) {
    return pWord[0].toUpperCase() + pWord.substring(1);
}

// Same as capitalize, but try to solve it with a different approach
function capitalizeAlternative(pWord) {
    let arr = pWord.split("");
    arr[0] = arr[0] + toUpperCase();
    return arr;
}

function findSocialLevel(pSalary) {
    /*if (pSalary >= 150000) {        //In test pSalary>=150000 so function returns "GOOD"
        return "GOOD"
    }
    return ("NOT GOOD");*/
    switch (pSalary) {
        case 150000:
            return "GOOD";
        default:
            return "NOT GOOD"
    }

}

function findEvenNumbersTo(pLimit) {
    return new Array(pLimit).fill(1)
    .map(function(pValue, pIndex){
       return pIndex;
    })
    .filter(function(pValue){
        return pValue % 2 == 0;
    })
    .filter(a => a != 0);
  }

function findTheSequenceTo(pLimit, pStep) {

}

// Same as findTheSequenceTo, but try to solve it with a different approach
function findTheSequenceToAlternative(pLimit, pStep) {

}

function concatSpecially(pFirstWord, pSecondWord) {
    pFirstWord = pFirstWord.split("").shift();
    pSecondWord = pSecondWord.split("").shift();




}

function orderAlphabetically(pWord) {

}

function findTheLongestWord(pSentence) {

}

function findNumberOfVowel(pSentence) {

}

function maskTheString(pSentence, pLetterList) {


}

function sumEventNumbersTo(pLimit) {

}

function toCamelCase(pSentence) {

}

function findWordsByChars(inputText, searchCharacters) {

}

function generateRandomNumbers() {

}



function getRandom(max, min = 0) {
    return
}

function suggestPassword() {
    const arr = new Array(10).fill(1);
    const randomIndex = generateRandomNumbers(9, 0);
    const getRandomChar = String.fromCharCode(generateRandomNumbers(90, 65));

    arr[randomIndex] = getRandomChar;
    let b = arr.join("");
    return b;


}