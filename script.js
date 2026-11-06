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

/*function getHumanChoice(){
    let choice = prompt("Chose your wepon!!")
    return choice;
}*/

const choices = document.querySelector('#Choices');

choices.addEventListener('click',(event) => {
    button = event.target.closest('button');
    let humanChoice = button.id;
    playgame(humanChoice);}   )

function playRound(humanChoice,computerChoice){

    if (humanChoice==computerChoice) {
        console.log("its a tie both of you chose "+ computerChoice);
    }else if( 
          (humanChoice=="rock" && computerChoice=="scissors") ||
          (humanChoice=="paper" && computerChoice=="rock") ||
          (humanChoice=="scissors" && computerChoice=="paper")
    ){  console.log("you win!!! " + humanChoice + " wins " + computerChoice)
        humanscore++;
    }else {
        console.log("you lose ;( " + humanChoice + " wins " + computerChoice);
        computerscore++;
    }
}


function playgame(humanChoice) {
        let rounds = 0;
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);   
        rounds ++;
   if(rounds == 5){
    rounds = 0;
     if (humanscore > computerscore) {
        console.log(`%c🎉 You won!!! %cYour score: ${humanscore}-${computerscore}`,
    "color: lime; font-weight: bold; font-size: 16px;",
    "color: white; font-size: 14px;");
    }else if (humanscore < computerscore) {
        console.log(`%c😢 You lost... %cYour score: ${humanscore}-${computerscore}`,
    "color: red; font-weight: bold; font-size: 16px;",
    "color: white; font-size: 14px;");
    }else{console.log(`%c🤝 It's a tie! %cBoth scored ${humanscore}.`,
    "color: gold; font-weight: bold; font-size: 16px;",
    "color: white; font-size: 14px;");}
   }else
   {
    console.log('you still have -->',5-rounds,'<-- left')
   }
}