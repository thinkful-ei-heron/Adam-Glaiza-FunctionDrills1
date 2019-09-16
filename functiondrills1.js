'use strict'; 

function yearOfBirth(age) { return 2019 - age; }


function createGreeting(name, age) {

if(name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
} 
else if (typeof name !== "string" || typeof age !== "number") {
    throw new Error('Something wrong with the name/age');
}    
else if (age < 0) {
    return new Error('Age cannot be negative')
}
const yob= yearOfBirth(age);
return `Hi my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

try { const greeting1 = createGreeting(4, 32); 
    console.log(greeting1); 
} catch (error) { 
    console.log(error); 
}