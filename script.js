console.log("hello world")

let humanscore = 0;
let computerscore = 0;
let rounds = 0;

const message = document.getElementById("game-message");
const roundsLeft = document.getElementById("rounds-left");
const choices = document.querySelector('#Choices');

function getComputerChoice(){
    let v = Math.random();
    let choice;
    
    if(v < 1/3){
        choice = "rock"; 
    }else if((v < 2/3)){
        choice = "paper";
    }else{
        choice = "scissors";
    }   
    return choice;
}

/*function getHumanChoice(){
    let choice = prompt("Chose your wepon!!")
    return choice;
}*/

choices.addEventListener('click',(event) => {
    let button = event.target.closest('button');
    if (!button) return;
    let humanChoice = button.id;
    playgame(humanChoice);
});

function playRound(humanChoice,computerChoice){
    if (humanChoice==computerChoice) {
        message.innerHTML=`Its a tie! (PC chose ${computerChoice})`
    }else if( 
          (humanChoice=="rock" && computerChoice=="scissors") ||
          (humanChoice=="paper" && computerChoice=="rock") ||
          (humanChoice=="scissors" && computerChoice=="paper")
    ){ humanscore++;
        message.innerHTML=`You Win!! (PC chose ${computerChoice})`
    }else {
        computerscore++;
        message.innerHTML=`You lose ): (PC chose ${computerChoice})`
    }
}


function playgame(humanChoice) {
    if (rounds >= 5) {
        humanscore = 0;
        computerscore = 0;
        rounds = 0;
    }
    
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);   
    rounds++;
        
    let remainingRounds = 5 - rounds;

    if (rounds === 5) {
        if (humanscore > computerscore) {
            message.innerHTML = `Game Over! You Won the Match! Final Score - You: ${humanscore}, PC: ${computerscore}`;
        } else if (humanscore < computerscore) {
            message.innerHTML = `Game Over! You Lost the Match! Final Score - You: ${humanscore}, PC: ${computerscore}`;
        } else {
            message.innerHTML = `Game Over! It's a tie match! Final Score - You: ${humanscore}, PC: ${computerscore}`;
        }
        roundsLeft.innerHTML = `Game finished. Click a button to play again!`;
    } else {
        roundsLeft.innerHTML = `Rounds left: ${remainingRounds}`;
    }
}