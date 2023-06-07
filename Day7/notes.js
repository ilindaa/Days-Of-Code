/* Practice conditionals: Check the login */
let userLogin = prompt("Who's there?");

/* === checks if value and type is the same; identical without changing the type */
if (userLogin === "Admin") {
    let pass = prompt("Enter password");
    if (pass === "TheMaster") {
        alert("Welcome!"); 
    } else if (pass === '' || pass === null){
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (userLogin === '' || userLogin === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}

/* Practice */
let userAnswer = prompt("What's the \"official\" name of JavaScript?");

if (userAnswer === 'ECMAScript') {
    alert("Right!");
} else {
    alert("You don't know? \"ECMAScript\"!")
}

/* Practice */
let userNumber = prompt("Type a number");

if(userNumber == 0) {
    alert(0);
} else if (userNumber > 0) {
    alert(1);
} else {
    alert(-1);
}

/* Practice: Rewrite 'if...else' into '?' */
let result = (a + b < 4) ? 'Below' :
    'Over';

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';

/* Practice: Rewrite 'switch' into 'if' */
let browser = prompt("Browser?");

if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}

/* Practice: Rewrite 'if' into 'switch' */

/* oh the + is unary plus, it turns the string into a number */
let a = +prompt('a?', '');

switch(a) {
    case 0 : 
        alert(0);
        break;
    case 1 :
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

