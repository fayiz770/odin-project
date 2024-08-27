let firstNumber = 0
let secondNumber = 0
let operator = ''
document.addEventListener('click', e => {
    e.preventDefault()
    const eventValue = e.target.dataset.calc
    if(eventValue && firstNumber === 0){
        firstNumber = e.target.textContent
        console.log(firstNumber)
    }else {
        secondNumber = e.target.textContent
        console.log(secondNumber)
    }
})
