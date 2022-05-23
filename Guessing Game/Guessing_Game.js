var secret = 7;

var startOrgGame = document.getElementById("originalGame");
startOrgGame.addEventListener("click", start_Original);

var startRandGame = document.getElementById("randomGame");
startRandGame.addEventListener("click", start_Random);

function start_Original() { 
var x = 0;
while (x != secret) {
var answer = prompt("Please guess the secret number (1-10)");
var guess = parseInt (answer);
x = guess;
if (guess > secret) {alert("Incorrect. Too High");}
else if (guess < secret) {alert("Incorrect. Too Low")}

}
alert("Well Done,You're Good!")
}

     var RandomNum = Math.floor((Math.random() * 10) + 1);
     document.getElementById("theAns").innerHTML = 'The Answer is ' + RandomNum + '.';

 function start_Random(){       
     var x = 0;
   
    while (x != RandomNum) {        
    var answer = prompt("Please guess the secret number (1-10)");
    var guess = parseInt (answer);
        
    x = guess;
    if (guess > RandomNum) {alert("Incorrect. Too High");}
    else if (guess < RandomNum) {alert("Incorrect. Too Low")}
}
alert('WellDone, Are You A Mind Reader?')
}