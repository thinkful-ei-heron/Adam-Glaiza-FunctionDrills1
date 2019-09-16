'use strict';
function yearOfBirth(age) {
    return 2019 - age;
}
function createGreeting(name, age) {
    const yob= yearOfBirth();
    return `Hi my name is ${name} and I'm ${age} years old.`;
}
const greeting1 = createGreeting('Adam', 32);
createGreeting(greeting1);