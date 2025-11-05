console.log("hello world")

let humanscore = 0;
var computerscore = 0;

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
    console.log(choice);
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Chose your wepon!!")
    return choice;
}

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice==computerChoice) {
        console.log("its a tie both of you chose "+ computerChoice);
    }else if( 
          (humanChoice=="rock" && computerChoice=="scissors") ||
          (humanChoice=="paper" && computerChoice=="rock") ||
          (humanChoice=="scissors" && computerChoice=="paper")
    ){console.log("you win!!! " + humanChoice + " wins " + computerChoice)}
    else {console.log("you lose ;( " + humanChoice + " wins " + computerChoice)}
}