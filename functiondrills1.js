'use strict';
function createGreeting(name, age) {
    const yearOfBirth = 2019 - age;
    return `Hi my name is add ${name} and I'm ${age} years old.`;
}
const greeting1 = createGreeting('Adam', 32);
createGreeting(greeting1);