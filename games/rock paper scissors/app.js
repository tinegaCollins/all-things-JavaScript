// completeD this while listening to  kygo

const comp = document.querySelector("#computerChoice")
const you = document.querySelector("#yourChoice")
const result = document.querySelector("#result")

const buttons = [...document.querySelectorAll("button")]
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ()=>{
        let yourChoice = buttons[i].innerHTML
        function randomRange(ourMin, ourMax){
            return Math.floor(Math.random()*(ourMax-ourMin+1))+ ourMin;
        }
        let value = randomRange(1,3);
        let computerChoice;
        if (value == 1){
            computerChoice = "rock"
        }
        else if(value == 2){
            computerChoice = "paper"
        }
        else{
            computerChoice = "scissors"
        }
        comp.innerHTML = computerChoice;
        you.innerHTML = yourChoice
        //computing winner
        let draw = "stalemate bro🤝"
        let win = "you win 😊"
        let lose = "you lose 🤣"
        if(yourChoice == computerChoice){
            result.innerHTML = draw
        }
        else if(yourChoice == "rock" && computerChoice == "paper" ){
            result.innerHTML = lose
        }
        else if(yourChoice == "rock" && computerChoice == "scissors"){
            result.innerHTML = win
        }
        else if(yourChoice == "paper" && computerChoice == "scissors"){
            result.innerHTML = lose
        }
        else if(yourChoice == "paper" && computerChoice == "rock"){
            result.innerHTML = win
        }
        else if(yourChoice == "scissors" && computerChoice == "rock"){
            result.innerHTML = lose
        }
        else if(yourChoice == "scissors" && computerChoice == "paper"){
            result.innerHTML = win
        }
    })
}