const rockArray = ['Rock', 'Paper', 'Scissors']
let computerScore = 0
let humanScore = 0


const getComputerChoice = () => {
    return rockArray[Math.floor(Math.random() * 3)].toLowerCase()
}

const getHumanChoice = () => {
    const humanChoice =  prompt().toLocaleLowerCase()
    return humanChoice
}

const playRound = (computerChoice, humanChoice) => {
    if(computerChoice === humanChoice){
        humanScore++
        computerScore++
        console.log(`tight: ${computerChoice} tight  ${humanChoice}\n Computer: ${computerScore}, Human: ${humanScore}` )
    }else if(computerChoice == 'rock' && humanChoice == 'paper'){
        humanScore++
        console.log(`Human: ${humanChoice} wins ${computerChoice} \nHuman: ${humanScore}`)
    }else if(computerChoice == 'rock' && humanChoice == 'scissors'){
        computerScore++
        console.log(`Computer: ${computerChoice} wins ${humanChoice} \nComputer: ${computerScore}`)
    }else if(computerChoice == 'paper' && humanChoice == 'rock'){
        computerScore++
        console.log(`Computer: ${computerChoice} wins ${humanChoice} \nComputer: ${computerScore}`)
    }else if(computerChoice == 'paper' && humanChoice == 'scissors'){
        humanScore++
        console.log(`Human: ${humanChoice} wins ${computerChoice} \nHuman: ${humanScore}`)
    }else if(computerChoice == 'scissors' && humanChoice == 'rock'){
        humanScore++
        console.log(`Human: ${humanChoice} wins ${computerChoice} \nHuman: ${humanScore}`)
    }else if(computerChoice == 'scissors' && humanChoice == 'paper'){
        computerScore++
        console.log(`Computer: ${computerChoice} wins ${humanChoice} \nComputer: ${computerScore}`)
    }else {
        console.log('Enter Rock, Paper, or Scissors')
    }
}

const playGame = () => {
    for(let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getHumanChoice())
    }
}

playGame()
