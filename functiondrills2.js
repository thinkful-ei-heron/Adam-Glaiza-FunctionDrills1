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
function decode(message) {
    let word = message.split(' ');
    let returnWord = '';

    for(let i=0; i < word.length; i++) {
        if(word[i][0] === 'a') {
             returnWord += word[i][2];
        } else if(word[i][0] === 'b') {
            returnWord += word[i][3];
        } else if(word[i][0] === 'c') {
            returnWord += word[i][4];
        } else if(word[i][0] === 'd') {
            returnWord += word[i][5];
        } else {
            returnWord += ' ';
        }
    }
    console.log(returnWord);
}

decode('craft block argon meter bells brown croon droop');

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
    const player1 = Math.floor(Math.random() *3) + 1;
    const player2 = Math.floor(Math.random() *3) + 1;

    if ((player1 === 1 && player2 === 2) || (player1 === 2 && player2 === 1)) {
        console.log('Rocks beats scissors');
    } else if ((player1 === 2 && player2 === 3) || (player1 === 3 && player2 === 2)) {
        console.log('Scissors beats paper');
    } else if ((player1 === 3 && player2 === 1) || (player1 === 1 && player2 === 3)) {
        console.log('Paper beats rock');
    } else {
        throw console.error('error');
        
    }
}

rockPaperScissor();