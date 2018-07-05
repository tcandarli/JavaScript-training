/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Simple Functions', () => {

    it('01) This function can add two numbers.', function(){
        let result = sum(1, 3);
        result.should.be.equal(4);
    });
    
    it('02) This function can substract two numbers.', () => {
        let result = substract(7, 5);
        result.should.be.equal(2);
    });
    
    it('03) This function finds the longest edge of a triangle.', () => {
        let result = calculateHypotenuse(3, 4);
        result.should.be.equal(5);
    });
    
    it('04) This function returns the reverse order of a string.', () => {
        let result = reverse("itclub");
        result.should.be.equal("bulcti");
    });    
    
    it('05) This function returns the current date with the following format "dd/mm/yyyy"', () => {
        let result = getCurrentDate(new Date(2017, 9-1, 4));
        result.should.be.equal("04/09/2017");
    });  
    
    it('07) Write a function that calculates the area of a rectangle.', () => {
        let result = rectngleArea(3, 9);
        result.should.be.equal(27);
    });
    
    it('08) Write a function that returns the area of a circle.', () => {
        let result = circleArea(3);
        result.should.be.equal(28);
    });
    
    it('09) Write a function that returns the name of the given month.', () => {
        let result = getMonthName(new Date(2017, 9-1, 4));
        result.should.be.equal("Eylül");
    });
    
    it('10) Write a function that returns the horoscope of the given date.', () => {
        let result = getHoroscope(new Date(2017, 9-1, 4));
        result.should.be.equal("Başak");
    });
    
    it('11) Write a function that calculates factorial of a number.', () => {
        let result = findFactorial(4);
        result.should.be.equal(24);
    });   
    
    it('12a) Write a function that capitalize a string.', () => {
        let result = capitalize("volki");
        result.should.be.equal("Volki");
    });
	
	it('12b) Write a function that capitalize a string.', () => {
        let result = capitalizeAlternative("volki");
        result.should.be.equal("Volki");
    });
    
    it('13) Write a function that finds the social level by salary.', () => {
        let result = findSocialLevel(150000);
        result.should.be.equal("GOOD");
    });
    
    it('14) Write a function that finds the even numbers to the given number starting from one.', () => {
        let result = findEvenNumbersTo(9);
        result.should.be.deepEqual([2,4,6,8]);
    });
    
    it('15a) Write a function that finds the series of the factor of second paramters to the given number starting from one.', () => {
        let result = findTheSequenceTo(13, 4);
        result.should.be.deepEqual([4, 8, 12]);
    });

    it('15b) Write a function that finds the series of the factor of second paramters to the given number starting from one.', () => {
        let result = findTheSequenceToAlternative(13, 4);
        result.should.be.deepEqual([4, 8, 12]);
    });     
    
    it('16) Write a function to concatenate two strings except their first character.', () => {
        let result = concatSpecially("it", "club");
        result.should.be.equal("tlub");
    });  
   
    it('17) Write a function that rearrange a string in alphatical order', () => {
        let result = orderAlphabetically("itclub");
        result.should.be.equal("bciltu");
    }); 
    
    it('18) Write a function that accepts a string and find the longest word in it', () => {
        let result = findTheLongestWord("Herzlich willkommen zu unseren itclub Übungen. Hier sehen Sie Ihre Verbesserungspotenziel");
        result.should.be.equal("Verbesserungspotenziel");
    });  
    
    it('19) Write a function that find the number of vowels.', () => {
        let result = findNumberOfVowel("Herzlich willkommen zu unseren itclub Übungen!");
        result.should.be.equal(14);
    });   
    
    it('20) Write a function that masks with * by the given characters.', () => {
        let result = maskTheString("Willkommen zu den Übungen!", ["l", "n"]);
        result.should.be.equal("Wi**komme* zu de* Übu*ge*!");
    });   
    
    it('21) Write a function that sums all even numbers to the given upper limit.', () => {
        let result = sumEventNumbersTo(193);
        result.should.be.equal(9312);
    });    
    
    it('22) Write a function to convert a string into camel case.', () => {
        let result = toCamelCase("it club volketswil");
        result.should.be.equal("itClubVolketswil");
    });    
 
    it('23) Implement a function that finds words in a string which includes any of the given chars.', () => {
        let result = findWordsByChars("Every saturday, we have a it-club checkpoint!", ["o", "u"]);
        result.should.be.deepEqual(["saturday", "it-club", "checkpoint"]);
    });
    
    it('24) Implement a function which produces random numbers between 1 and 10', () => {
        let result = generateRandomNumbers();
        result.should.be.within(1, 10);
    });
    
    it('25) Write a function which create a complex password with 8 chars including at least one letter and one numner', () => {
        let result = suggestPassword();
        result.should.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    });     
});