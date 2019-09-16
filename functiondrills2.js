//Function  JediName
function jediName(firstName, lastName) {
    return lastName.slice(0,3) + firstName.slice(0,2);
}

const jediResult = jediName('Beyonce', 'Knowles');
console.log(jediResult);

//Function beyond
function beyond(num) {
    if (num === -Infinity || num === Infinity) {
        console.log('And Beyond');
    } else if (isFinite(num) && num > 0) {
        console.log('To Infinity');
    } else if (isFinite(num) && num < 0) {
        console.log('To negative infinity');
    } else if (num === 0) {
        console.log('Staying Home');
    }
}

beyond(20);

