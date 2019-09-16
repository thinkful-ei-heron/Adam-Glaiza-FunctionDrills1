function jediName(firstName, lastName) {
    return lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName('Beyonce', 'Knowles'));


function beyond(num) {
    if (num < 0) {
        return'To Negative Infinity and Beyond';
    } else if (num > 0 || num < 0) {
        return 'To Infinity and Beyond';
    } else if (num === 0) {
        return'Staying Home';
    } 
}

beyond(-5);