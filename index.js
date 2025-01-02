let homeScore = document.getElementById('home-score'); 
let awayScore = document.getElementById('away-score'); 

let homeCounter = 0; 
let awayCounter = 0; 
homeScore.textContent = homeCounter;
awayScore.textContent = awayCounter;

function homePlusOne() {
    homeCounter +=  1; 
    homeScore.textContent = homeCounter;
}
function homePlusTwo() {
    homeCounter += 2; 
    homeScore.textContent = homeCounter;
}
function homePlusThree() {
    homeCounter += 3; 
    homeScore.textContent = homeCounter;
}
 

function awayPlusOne() {
    awayCounter += 1; 
    awayScore.textContent = awayCounter;
}
function awayPlusTwo() {
    awayCounter += 2; 
    awayScore.textContent = awayCounter;
}

function awayPlusThree() {
    awayCounter += 3; 
    awayScore.textContent = awayCounter;
}



