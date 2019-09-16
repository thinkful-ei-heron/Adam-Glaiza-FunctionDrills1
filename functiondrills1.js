'use strict';
function yearOfBirth(age) {
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    return 2019 - age;
}

function createGreeting(name, age) {
    const yob= yearOfBirth();
    if(name !== null && parseInt(age) !== null) {
        return `Hi my name is ${name} and I'm ${age} years old.`;
        
    } else if (typeof name !== "string" || typeof age !== "number") {
        throw new Error("Something wrong with the name/age");
    }
    else {
        console.log('Arguments not valid');
    }
    
}

try {
const greeting1 = createGreeting('Adam', 32);
} catch (error) {
    console.log(error,error.message);
}