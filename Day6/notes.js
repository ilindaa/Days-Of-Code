// This is only some JavaScript Notes

// multi-line variable declaration
let user = 'John',
    age = 25,
    message = 'Hello';

// variable names: letters, digits, $, or _
// camel case
// cannot start with numbers, no reserved words or hyphens
let userName;

// constants (unchanging) variables (can't reassign)
const myBirthday = '18.04.1982';
// more meaningful, less likely to mistype
const COLOR_ORANGE = "#FF7F00";

// human-readable names, maximally descriptive and concise, agree on terms within your team/mind
// TL;DR use let instead of var (some cases may use), const is let but can't change

/* Tasks */
let admin, name;
name = "John";
admin = name;
alert(admin);

let ourPlanetName = 'Earth';
let currentVisitorName = 'John';

// capitalize const names if it's hard-coded, if it's evaluated in run-time keep it lowercase

// unary + converts non-numbers to numbers
alert( +true ); // 1 
alert( +false ); // 0 
alert( +"" ); 

let apples = "2";
let oranges = "3";
alert ( apples + oranges ); // 23
alert( +apples + +oranges ); // 5

// increment and decrement can only be applied to variables not values like 5++
// counter++ is postfix (increment but use previous value), ++counter is prefix (increase and immediately use value)

/* Tasks */
let a1 = 1, b1 = 1;
let c = ++a1;
let d = b++;

// a = 2
// b = 2
// c = 2
// d = 1

let a2 = 2;
let x = 1 + (a2 *= 2);

// a = 4
// x = 5

/*
10
?? answer = -1
false answer = 1
2
6
9px
$45
2
?? answer = NaN
-4 answer = "   -9  5"
-14
null answer = 1
undefined answer = NaN
?? answer = -2
*/

let a3 = prompt("First number?", 1);
let b3 = prompt("Second number?", 2);
alert( +a3 + +b3); 

// == does type transformation and then checks equality, === checks if the type is equal (if not returns false) and value



