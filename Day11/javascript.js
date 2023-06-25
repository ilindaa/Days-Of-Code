// 1.

// create an empty object
let user = {};
// add the property name with value 'John'
user.name = 'John';
// add the property surname with the value 'Smith'
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// 2.
let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );

// pass in 'schedule' to obj, if the for loop runs that means
// schedule is not empty, if the for loop doesn't run it means it's empty
function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

// 3. 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}
// return sum;

// 4.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu)

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}