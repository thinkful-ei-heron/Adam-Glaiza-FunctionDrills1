'use strict';
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

//Function decode
// function decode() {

// }

//Function daysInMonth
function daysInMonth(month, leapYear) {

    switch(month){
        case 'January':
        case 'March': 
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            console.log(`${month} has 31 days`);
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':    
            console.log(`${month} has 30 days`);
            break;
        case 'February':
            if(leapYear) {
                console.log(`${month} has 29 days`);
                break;
            }else{
                console.log(`${month} has 28 days`);
                break;
            }
        default:
            console.log('Must provide a valid month');  
    }

}

daysInMonth('June', true);

//function rockPaperScissor
function rockPaperScissor(){
    //rock = 1 , scissors =2, paper =3
    const randomNo1 = Math.floor(Math.random() *3) + 1;
    const randomNo2 = Math.floor(Math.random() *3) + 1;

    if ((randomNo1 === 1 && randomNo2 === 2) || (randomNo1 === 2 && randomNo2 === 1)) {
        console.log('Rocks beats scissors');
    } else if ((randomNo1 === 2 && randomNo2 === 3) || (randomNo1 === 3 && randomNo2 === 2)) {
        console.log('Scissors beats paper');
    } else if ((randomNo1 === 3 && randomNo2 === 1) || (randomNo1 === 1 && randomNo2 === 3)) {
        console.log('Paper beats rock');
    } else {
        throw console.error('error');
        
    }
}

rockPaperScissor()