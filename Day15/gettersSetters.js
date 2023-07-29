let user = {
    // data properties
    name: 'John',
    surname: 'Smith',

    // accessor properties
    // get fullName() { // getter
    //     return `${this.name} ${this.surname}`;
    // },

    // set fullName(value) { // setter
    //     [this.name, this.surname] = value.split(' ');
    // }
};

// accessor descriptors
// accessor fullName, pass descriptor with get and set
Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },
    set(value) {
        [this.name, this.surname] = value.split(' ');
    }
});

console.log(user.fullName); // getter
user.fullName = "Alice Cooper"; // setter
console.log(user.name);
console.log(user.surname);

