const weapon = document.querySelector('.weapon')
const scoreText = document.querySelector('.score-text')
const playerGuss = document.querySelector('.player-guss')
const computerGuss = document.querySelector('.computer-guss')


let winnerText = ''
let scoreTextText = ''
let playerIcon = ''
let computerIcon = ''

const rockArray = ['Rock', 'Paper', 'Scissors']
let humanChoice = ''
let computerScore = 0
let humanScore = 0


const getComputerChoice = () => {
    return rockArray[Math.floor(Math.random() * 3)].toLowerCase().slice()
}


document.addEventListener('click', e => {
    const retrieve = e.target.dataset.exist
    if(retrieve){
        humanChoice = retrieve
        playRound(getComputerChoice(), humanChoice.toLowerCase().slice())
        weapon.textContent = winnerText
        scoreText.textContent = scoreTextText
        playerGuss.innerHTML = `<img src="assets/${humanChoice}.svg" alt="${humanChoice}">`
        computerGuss.innerHTML = `<img src="assets/${getComputerChoice()}.svg" alt="${getComputerChoice()}">`
    }
})

const playRound = (computerChoice, humanChoice) => {
    if(computerChoice === humanChoice){
        humanScore++
        computerScore++
        winnerText = "It's a tie!"
        scoreTextText = `${humanChoice} ties ${computerChoice}!`
    }else if(computerChoice == 'rock' && humanChoice == 'paper'){
        humanScore++
        winnerText = "You won!"
        scoreTextText = `${humanChoice} beates ${computerChoice}!`
    }else if(computerChoice == 'rock' && humanChoice == 'scissors'){
        computerScore++
        winnerText = "You lose!"
        scoreTextText = `${humanChoice} beaten by ${computerChoice}!`
    }else if(computerChoice == 'paper' && humanChoice == 'rock'){
        computerScore++
        winnerText = "You lose!"
        scoreTextText = `${humanChoice} beaten by ${computerChoice}!`
    }else if(computerChoice == 'paper' && humanChoice == 'scissors'){
        humanScore++
        winnerText = "You won!"
        scoreTextText = `${humanChoice} beates ${computerChoice}!`
    }else if(computerChoice == 'scissors' && humanChoice == 'rock'){
        humanScore++
        winnerText = "You won!"
        scoreTextText = `${humanChoice} beates ${computerChoice}!`
    }else if(computerChoice == 'scissors' && humanChoice == 'paper'){
        computerScore++
        winnerText = "You lose!"
        scoreTextText = `${humanChoice} beaten by ${computerChoice}!`
    }
}


