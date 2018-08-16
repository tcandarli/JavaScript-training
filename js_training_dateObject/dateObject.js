// // Create new date object
var today = new Date();
console.log(today);

// // Zero time plus the number
var d = new Date(1534000000000); // This miliseconds is added to zero time which is 31.12.1969
console.log(d);

// // a new date object from the specified date and time
var date = new Date ("October 13, 2018 11:15:00");
console.log(date);

// // a new date object with specified date and time
var d = new Date(2018, 08, 16, 4, 33, 30, 0);
console.log(d);

// // Missing arguments are either set to 1, if day is missing, or 0 for all others
var d = new Date(2018, 7); //Aug 01 2018
console.log(d);

// // ISO Date
var d = new Date("2018-08-16");
console.log(d);

// // Short Date
var d = new Date("08/16/2018");
console.log(d);

// // Long date
var d = new Date("Aug 16 2018");
console.log(d);

var d = new Date("Thursday Aug 16 2018");
console.log(d);

// getFullYear()
var moonLanding = new Date("July 20, 69 00:20:18");
console.log(moonLanding.getFullYear()); // 1969

// getFullYear()
var today = new Date();
var year = today.getFullYear();
console.log(year); // 2018

// getMonth()
var month = today.getMonth();
console.log(month); // 7

// getDate()
var date = today.getDate();
console.log(date); // 16

// getHours()
var hour = today.getHours();
console.log(hour);

// getMinutes()
var minute = today.getMinutes();
console.log(minute);

// getTime()
var time = today.getTime();
console.log(time); // miliseconds since Jan 1, 1970;

var time = today.getDay();
console.log(time); // Sunday is 0, Monday is 1, 

setDate()
var event = new Date("August 19, 1975 23:15:30");
event.setDate(24);
console.log(event.getDate()); // 24
console.log(event);

var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24);
console.log(theBigDay); // Jul 24 1962
theBigDay.setDate(32);
console.log(theBigDay); // 1962-08-01
theBigDay.setDate(42);
console.log(theBigDay); // 1962-09-11

// setFullYear() method
theBigDay.setFullYear(2018, 11, 3);
console.log(theBigDay); // Mon Dec 03 2018 00:00:00 GMT+100

// setHours() method

event.setHours(20, 21, 22);
console.log(event); // Sun Aug 24 1975 20:21:22 GMT+0100

var bigDay = new Date();
bigDay.setHours(7);
console.log(bigDay); // Thu Aug 16 2018 07:54:39 GMT+0200

// setMinutes() method

bigDay.setMinutes(7);
console.log(bigDay); // Thu Aug 16 2018 07:07:41 GMT+0200

// setMonth()

bigDay.setMonth(10);
console.log(bigDay); // Fri Nov 16 2018 07:07:14 GMT+0100

// setseconds()
bigDay.setSeconds(10);
console.log(bigDay); // Fri Nov 16 2018 07:07:10 GMT+0100

// setTime() - miliseconds January 1, 1970, 00:00:00

var event1 = new Date("July 1, 1999");
var event2 = new Date();
event2.setTime(event1.getTime());

console.log(event1); // Thu Jul 01 1999
console.log(event2); // Thu Jul 01 1999

//Birthday calculate


var birthDay = new Date("10/15/1985");
var today = new Date();

var age = today.getFullYear() - birthDay.getFullYear();
birthDay.setFullYear(today.getFullYear());

if (today < birthDay) {
    age--;
}

console.log(age);

