const state = document.querySelector('.state')
const weapon = document.querySelector('.weapon')
const button = document.querySelector('.button')
const modalEl = document.querySelector('.modal')
const scoreText = document.querySelector('.score-text')
const playerGuss = document.querySelector('.player-guss')
const computerGuss = document.querySelector('.computer-guss')
const playerScoreEl = document.querySelector('.player-score')
const computerScoreEl = document.querySelector('.computer-score')


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
    const computerChoice = getComputerChoice()
    if(retrieve){
        humanChoice = retrieve
        playRound(computerChoice, humanChoice.toLowerCase())
        playerIcon = `<img src="assets/${humanChoice}.svg" alt="${humanChoice}">`
        computerIcon = `<img src="assets/${computerChoice}.svg" alt="${computerChoice}">`
        render(playerIcon, computerIcon)
        if(computerScore === 5 || humanScore === 5){
            modalEl.style.display = 'flex'
            gameResult(computerScore, humanScore)
        }
    }
})

const render = (playerIcon, computerIcon) => {
    playerGuss.innerHTML = playerIcon
    computerGuss.innerHTML = computerIcon
    weapon.textContent = winnerText
    scoreText.textContent = scoreTextText
    playerScoreEl.textContent = humanScore
    computerScoreEl.textContent = computerScore
    
}
button.addEventListener('click', e => {
    e.preventDefault()
    modalEl.style.display = 'none'
    humanScore = 0
    computerScore = 0
    winnerText = 'Choose your weapon' 
    scoreTextText = 'First to score 5 points wins the game'
    playerIcon = '?'
    computerIcon = '?'
    render(playerIcon, computerIcon)
})

const playRound = (computerChoice, humanChoice) => {
    if(computerChoice === humanChoice){
        winnerText = "It's a tie!"
        scoreTextText = `${humanChoice} ties ${computerChoice}!`
    }else if(
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ){
        humanScore++
        winnerText = "You won!"
        scoreTextText = `${humanChoice} beates ${computerChoice}!`
    }else if(
        (computerChoice == 'rock' && humanChoice == 'scissors') ||
        (computerChoice == 'paper' && humanChoice == 'rock') ||
        (computerChoice == 'scissors' && humanChoice == 'paper')
    ){
        computerScore++
        winnerText = "You lost!"
        scoreTextText = `${humanChoice} beaten by ${computerChoice}!`
    }
}

const gameResult = (computer, human) => {

    if(computer > human){
        state.textContent = 'You lost...'
    }else {
        state.textContent = 'You won...'
    }
}

