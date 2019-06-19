/* Section 2
NOTE- JS has dynamic typing so data types are automatically assigned to variables.
console.log('Hello World!!!');
var firstName = 'Mushtaq';
console.log(firstName);

var job;
console.log(job);
job = 'teacher';
console.log(job);

// lecture 9 mutation data type coercion

/*Below is an example of how JS converts data types
like firstName is string and age is the number

var firstName = 'John';
var age = 32;
console.log(firstName + ' ' + age);

// example two of type coercion
var job, isMerried;
job = 'teacher';
isMerried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he merried? ' + isMerried);

// Variable mutation
// Changing variable's value and data type is called variable mutation.
age = 'twenty eight';
job = 'driver';
alert (firstName + ' is a ' + age + ' years old ' + job + '. Is he merried? ' + isMerried);

// Taking input from the user or asking a question? Can be done as bellow.
var lastName = prompt ('Whats ' + firstName + 's last name? ');
console.log (firstName + ' ' + lastName);
// End lecture 9
*/

// Lecture 10 ***Basic Operators***
/* = , + , - , * , /
var myBirthYear;
var myAge = 36;
myBirthYear = 2019 - myAge;
console.log(myBirthYear);

// *** Logical Operators ***
var year, birthYearJohn, birthYearMark, currentYear;
  currentYear = 2019;
  ageJohn = 28;
  ageMark = 36;
birthYearJohn = currentYear - ageJohn;
birthYearMark = currentYear - ageMark;
console.log(birthYearMark);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// 'typeof' operator - 'typeof' is the keyword to check on type of data.

var name = 'Ali';
var height;

console.log (typeof name);
console.log(typeof height);
console.log(typeof ageJohn);
console.log(typeof johnOlder);
*/

// Lecture 11 *** operator precedence*** i.e which operator is executed 1st
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
 So according to precedence preference 1st substraction then
greater than equal to and thirdly assignment operator will be executed.


var ageJohn = now - yearJohn;
var ageMark = 35;
/* NB- var average = ageJohn + ageMark /2; we cant do this as / has more
precedence than addition, hence we have to group theme
var average = (ageJohn + ageMark) /2;
console.log(average);
*/

/* ***Coding chellenge 1- Section 2- Lecture 12.***
Calculating body mass index.
Formula: BMI = mass / height * height
(mass is in kg and height in meter)


 var marksHeight = 1.524; // meters
 var marksMass = 75; //kg
 var johnheight = 1.828; // meters
 var johnMass = 80; // kg

var marksBmi = marksMass / (marksHeight * marksHeight);
console.log(marksBmi);

var johnBmi = johnMass / (johnheight * johnheight);
console.log(johnBmi);

var whoseFat = johnBmi < marksBmi;
console.log(whoseFat);


// Section 2 Lecture 14 ***if and else conditonal statement***

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
}
  else {
    console.log(firstName + ' will be married soon');
  }

*/

// Section 2 Lecture 15
/* Bolean Logic *** i.e AND &&, OR ||, and NOT ! ***

var firstName = 'John';
var age = 12;

if (age < 13) {
  console.log(firstName + ' is a boy.');
}
  else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
  }
  else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
  }
  else {
    console.log(firstName + ' is a man');
  }
  */

  // Section 2 Lecture 16
  /* Ternary operator and
  Switch statement
  */

  // Ternary Operator Syntax:- ** Boolean expression ? statement execute if true : statement execute if false **
  //var firstName = 'John';
  // var age = 29;
    //age < 13 ? console.log(firstName + ' is a boy.') : console.log(firstName + ' is older than a boy age.');
    //(age >= 13 && age < 20) ? console.log(firstName + ' is a teenager') : console.log(firstName + ' is older than teenager');
    //(age >= 20 && age < 30) ? console.log(firstName + ' is a young man' ) : console.log(firstName + ' is a man');

    // *** We can also write as below!
  // var ageCheck;
    /* ageCheck = age < 13 ? firstName + ' is a boy' : firstName + ' is older than a boy';
    console.log (ageCheck); */
    /* ageCheck = (age >= 13 && age < 20) ? (firstName + ' is a teenager.') : (firstName + ' is older than a teenager.');
    console.log(ageCheck); */

    // ** Switch statement using string comparison

/*  var job = prompt ('What\'s '+firstName+ '\'s job');
    switch (job) {
      case 'teacher':
      console.log(firstName + ' teaches kids coding.');
      break;

      // ** we can also write double case expressions for a single statement.
      case 'doctor':
      case 'madic':
      console.log(firstName + ' works at NHS.');
        break;

        case 'driver':
        console.log(firstName + ' drives a uber cab in London.');
        break;

      default: // if no cases match we can just default it
      console.log(firstName + ' does something else.');

    }

    // ** Switch statement using Boolean expression comparison
      var age = prompt ('Enter'+firstName+ '\'s age.');
      switch (true) {
        case age < 13:
        console.log(firstName + ' is a boy.');
        break;

        case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;

        case age >= 20 && age < 30:
          console.log(firstName + ' is a young man.');
          break;

        default:
          console.log(firstName + ' is a man');
      }
*/

// Section 2 Lecture 17
/*
** TOPIC:- Truthy and Falsey values and Equality operator
*/
// Falsey values are - undefined, null, 0, '', NaN.
// Truthy values are - Basically all values excluding falsey values.

/*
//Example 1 of Undefined
var height;

if (height) {
  console.log('Example 1 undefined: variable is defined')

} else {
  console.log("Example 1 undefined: variable is not defined");
}

//Example 2 of Undefined
var height = 2;

if (height) {
  console.log('Example 2 undefined: variable is defined')

} else {
  console.log("Example 2 undefined: variable is not defined");
}

// Example of empty-string
var height = '';

if (height) {
  console.log('Example 1 empty-string: variable is defined')

} else {
  console.log("Example 1 empty-string: variable is not defined");
}

// Exaple 2 of empty-string
var height = 'tall';

if (height) {
  console.log('Example 2 undefined: variable is defined')

} else {
  console.log("Example 2 undefined: variable is not defined");
}

// Example of null
var height = null; // even though it is defined and given value of null BUT ***null is a falsey value**

if (height) {
  console.log('Example of null: variable is defined')

} else {
  console.log("Example of null: variable is not defined");
}

// Example 1 of 0
var height = 0;

if (height) {
  console.log('Example 1 of zero: variable is defined')

} else {
  console.log("Example 1 of zero: variable is not defined"); //prints this as 0 is a falsey value.

}

// Example 2 of 0
var height = 0;

if (height || height ===0) {
  console.log('Example 2 of zero: variable is defined')

} else {
  console.log("Example 2 of zero: variable is not defined");
}


//Section 2 Coding chellenge 2

var johnTeamAv = (110+10+139) /3;
    mikeTeamAv = (110+2+130) /3;
    maryTeamAv = (97+134+105) /3;
console.log('John scored '+johnTeamAv+' Mike scored '+mikeTeamAv+' Mary scored '+maryTeamAv);

/*if (johnTeamAv > mikeTeamAv && johnTeamAv > maryTeamAv) {
  console.log ('John team is the winner, they scored ' + johnTeamAv );
} else if (johnTeamAv === mikeTeamAv && johnTeamAv === maryTeamAv) {
  console.log('The match is drawn as the scores are level, scores are '+'John\'s team '+johnTeamAv+'Mike\'s team '+mikeTeamAv+' and Mary\'s team scored '+maryTeamAv);
} else if (maryTeamAv > johnTeamAv && maryTeamAv > mikeTeamAv) {
  console.log('Mary\'s team is the winner, they scored '+maryTeamAv);
} else {
  console.log('Mike team is the winner, they scored ' + mikeTeamAv);
}
switch (true) {
  case (johnTeamAv > mikeTeamAv && johnTeamAv > maryTeamAv):
  console.log('John won, John score is');
  break;
  case (johnTeamAv === mikeTeamAv && johnTeamAv === maryTeamAv):
  console.log('The match is drawn and scores are level');
  break;
  case (maryTeamAv > johnTeamAv && maryTeamAv > mikeTeamAv):
  console.log('Mary\'s team is the winner');
  break;
  case (maryTeamAv === mikeTeamAv && maryTeamAv === johnTeamAv):
  console.log('The match is drawn as scores are leveled');
  default:
  console.log('Mike\'s team has won the match');

}
*/

// Section 2 Lecture 20
// Topic- Functions
/*
function calculateAge (birthYear) {
  return  2019 - birthYear ;
}
//birthYear = prompt ('Whats your birthe year');

var aminaAge = calculateAge (1980);
var myAge = calculateAge (1982);
var friendAge = calculateAge (1976);
console.log(myAge, aminaAge, friendAge);

// another function to calculate retirement years remaining

function yearsToRetirement (years, firstName) {
  var age = calculateAge (years);
  var retirement = 65 - age;
  console.log(firstName + ' retires in ' + retirement + ' years.');
}
yearsToRetirement(1982, 'Mushtaq');
yearsToRetirement(1980, 'Amina');
yearsToRetirement(1976, 'Friend');


// *** Function statements and Expression ***

/*  ** function declaration is
  function nameOfFunction (parameter, parameter) {
  }



NB - Difference between statements and expressions is, statement performs action but not immidiate results
while expression is piece of code which performs action and give results.


// Function Expression

var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
    return firstName + ' teaches kids how to code';

    case 'driver':
    return firstName + ' drives cab in London';

    case 'designer':
    return firstName + ' makes beatiful websites';

    default:
    return firstName + ' does something else';

  }
}

console.log (whatDoYouDo ('teacher', 'John'));
console.log (whatDoYouDo ('driver', 'Mike'));
console.log (whatDoYouDo ('designer', 'Jolly'));
console.log (whatDoYouDo ('Painter', 'Danny'));

*/

/* *** Section 2 Lecture 22 Arrays ***
Defination:- Arrays can be defined as, a single variable that stores or referes to multiple/lits of elements,
which can have different data types, and are accessible through that single variable.
Note:- Arrays elements position starts with location zero n onwards.
*/

// Two ways of initiasing Arrays
/*
var names = ['John', 'Mark', 'Sam'];
// OR
var years = new Array(1980, 1990, 2000); // Both are absolutly the same.

// Mutating, changing, adding elements in Array
names[1] = 'Ben';
//names[5] = 'Mike';
names [names.length] = 'Billy';
// Accessing Arrays
console.log(names[0]);
console.log(names);
console.log(years);
console.log(years.length);
*/

// Working with different type of data in an Array.
/*
// initiasation
var john = ['John', 'Smith', 1990, 'Teacher', false];
console.log(john);
// *** Methodes on Arrays ***

john.push('Blue'); // Push adds an element at the end of an Array.
console.log(john);

john.unshift('Mr.'); // unshift adds an element at the start of an Array.
console.log(john);

john.pop(); // pop is a methode which takes off/deletes an element from end of an Array.
console.log(john);

john.shift(); // shhift a method which takes off/deletes an element from the start of an Array.
console.log(john);

console.log(john.indexOf(1990)); // indexOf tells you the position of given element.

console.log (john.indexOf(10)); // NB:- if asked element is not present indexOf returns -1.

// Testing further indexOf with Ternary operator.
var test = john.indexOf('Teacher') === -1 ? 'John is not a Teacher officer' : 'John is a Teacher officer';
console.log (test);


// *** Coding chellenge 2 ***
// Tip Calculator
// Tip 20% when bill is less $50
// Tip 15% when bill between $50 and $200
// Tip 10% when bill is over $200
// Calculating 20% of a value FORMULA:- 20/100 = 0.2

function tipCalculator(bill) {
  if (bill < 50) {
    return bill * 0.2;
  }
  else if (bill >= 50 && bill <= 200) {
    return bill * 0.15;
  }
  else {
    return bill * 0.1;
  }
}

// var tipsArray = []; // storing all tips in an array
// var trip1 = tipCalculator(124);
// tipsArray.unshift(trip1);
// var trip2 = tipCalculator(48);
// tipsArray.push(trip2);
// var trip3 = tipCalculator(268);
// tipsArray.push(trip3);
// console.log(tipsArray);
//
// var totalPaidArray = []; // storing total paid including tips per trip.
// totalPaidArray.unshift(trip1+124);
// totalPaidArray.push(trip2+48);
// totalPaidArray.push(trip1+268);
// console.log(totalPaidArray);

// Another way to make tips array and total amount paid.

var bills = [124,48,268];
var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
console.log(tips);
var tipsBills = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(tipsBills);


// ***25 Objects and its properties***

//***Object Literal***
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Jessy','Jasmin','Jemma'],
  job: 'teacher',
  isMerried: false
};

console.log(john);

// ways to access those propertis
console.log(john.firstName);
// 2 way
console.log(john['lastName']);
// 3 way
var x = 'birthYear';
console.log(john[x]);

// Object mutation i.e changing values or editing
// 2 ways to mutate an object

// 1 way
john.lastName = 'Halepoto';
// 2nd way
john['isMerried'] = true;
console.log(john);


// *** New Object Syntax ***
var jane = new Object();

// creating new object jane's properties.
jane.firstName = 'Jane';
jane['lastName'] = 'Smith';
jane.birthYear = 1982;
jane.family = ['John','Ali','Jumma','Jemma'];
jane['job'] = 'home maker';
jane.isMerried = true;

console.log(jane);
*/

/* *** Methodes in Objects *** Methodes can be difined
 as 'Functions belong to an object'


// initialising new object
var john = new Object();

// creating object's properties
john.firstName = 'John';
john.midlleName = 'Save';
john.lastName = 'Smith';
john.birthYear = 1984;
john.family = ['Ama','Teh','Tab','Af','Ami'];
john.job = 'teacher';
john.isMerried = false;
// creating a Method
john.calcAge = function () {
  this.age = 2019 - this.birthYear;
  }
//console.log(john); // testing
// console.log(john.calcAge(1984)); // testing 'calcAge' methode
// console.log(john.calcAge(john.birthYear)); // testing to fetch function call from objects property.
//console.log(john.calcAge());  testing keyword this and fetching object's property without passing arguments.

// creating new property with help of calling the method n calculating the age
// john.age = john.calcAge();

// OR we can include keyword 'this' at return line in the method and create new property of age with just power of this
// for example
 // console.log(john.calcAge());  **output undefined**
 john.calcAge();
 console.log(john)


 // 27-Coding chellenge 4
// ** Creating objects through 'Object Literal' way.

var john = {
  fullName :'John Smith',
  mass : 80, // in kgs
  height : 1.828, // in meters
  calBmi : function (johnBmi) {
      this.johnBmi = this.mass / ( this.height * this.height);
       return this.johnBmi;
  }
};

var mark = {
  fullName : 'Mark Tyson',
  mass : 75, // in kgs
  height : 1.524, // in meters
  calBmi : function (markBmi) {
      this.markBmi = this.mass / ( this.height * this.height);
       return this.markBmi;
  }
};

// testing
// john.calBmi();
// mark.calBmi();
// console.log(john);
// console.log(mark);

 console.log(john.calBmi()); //If you call like this with console.log it returns 'undefined'.
 console.log(mark.calBmi()); //If you call like this with console.log it returns 'undefined'.

// Comparing BMIs and printing results.
if (john.johnBmi > mark.markBmi) {
  console.log(john.fullName +' is fatter than ' + mark.fullName + ' and John\'s BMI is ' + john.johnBmi);
} else if (john.johnBmi < mark.markBmi) {
  console.log(mark.fullName + ' is fatter than ' +john.fullName + ' and Mark\'s BMI is ' + mark.markBmi);
} else {
  console.log('John and Mark both have same BMI, John\'s BMI is ' + john.johnBmi + 'Mark\'s BMI is ' + mark.johnBmi);
}
*/


// /* *** Loops and Iteration ***
// Secton 2: Lecture 29
// */
// // Exmaple 1
// for (var i =0; i < 11; i++) {
//   console.log(i);
// }
//
// // Example 2
// for (var i =0; i < 20; i +=2) {
//   console.log(i);
// }
//
// // Example 3
// var john = ['John', 'Smith', 1990, 'Teacher', false];
// for (var i =0; i < john.length; i++) {
//   console.log(john[i]);
//
// }
// console.log(john.length); // checking array's length
//
// // ** Reverse looping Updated 2 - Github email problem fixed **
// // Example one
// var john = ['John', 'Smith', 1990, 'Teacher', false];
// for (var i =4; i < john.length && i >=0; i--) {
//   console.log(john[i]);
// }
//
// // Example two
// var john = ['John1', 'Smith1', 1990, 'Teacher1', false];
// for (var i = john.length-1; i >=0; i--) {
//   console.log(john[i]);
// }
//
// // *** Basic While loop and its format ***
//
// // Time table of 7
// var table = 7;
// var mult = 1;
// while (mult <= 10) {
//   console.log(table * mult);
//   mult +=1;
// }




// ** continue and break in the loopin **

/* *** continue ***
We can use continue to print off selected elements that we want, only.
e.g We can use continue when we want to select a specific type of element.
Example
*/
// One way
var john = ['John', 'Smith', 1990, 'Teacher', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

// 2nd way..... continue with curly brackets.
var john = ['John1', 'Smith1', 1990, 'Teacher1', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') {  //So if condition is true it executes 'continue',skips
    continue;                        //console.log statement and goes up to select another
  } ;                               //element of array of john, when false it skips continue
  console.log(john[i]);            //block and executes console.log statement.
}

// exprimenting with 'continue' with the help of for loop
var john = ['John3', 'Smith3', 1991, 'Teacher3', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] === 'string') {
    continue;
  }
  console.log(john[i]);
}

// exprimenting with 'continue' with the help of for while loop
// for now below code has errors
/*
var john = ['John4', 'Smith4', 1995, 'Teacher4', false];
var a = 0;
while (a < john.length) {
  if (typeof john[a] === 'string') {
    continue;
  }
  console.log(john[a]);
  a++;
}*/

/* ** break **
We can use break, when we want a specific type of element
but when condition is not met it breaks loops completely,
leaving remaining elements un-checked.
*/
// Example
var john = ['John5', 'Smith5', 1990, 'Teacher5', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') {
    break;
  }
  console.log(john[i]);
}
