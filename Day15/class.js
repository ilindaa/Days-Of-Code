// 1. no commas in between class methods (unlike with object literals)
class User {
    // 3.2. Class fields (set on individual objects, not User.prototype; similar to object properties rather than variables)
    name = 'John';

    constructor(name) {
        this.name = name;
    }

    // 1.1. class method is stored in User.prototype
    // 3.1. Computed Names: ['say' + 'Hi']() is sayHi()
    sayHi() {
        console.log(`Hi ${this.name}!`);
    }

    // 3. Getters/setters in classes
    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('Name must be longer than 4 characters.');
            return;
        } else {
            this._name = value;
        }
    }
}

let user = new User('John');
user.sayHi();

user = new User('');
user.sayHi();

user = new User('Jane');
user.sayHi();

// 2. Playing around with Class Expressions
let Pog = class PogClass {
    sayHi() {
        console.log(PogClass);
    }
}

new Pog().sayHi();

function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}

let newClass = makeClass("What's up?");
new newClass().sayHi();

// Playing around with inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        // super.speak();
        console.log(`${this.name} barks.`);
    }
}

const d = new Dog ("Pomeranian");
const a = new Animal("Animal");

d.speak();
a.speak();