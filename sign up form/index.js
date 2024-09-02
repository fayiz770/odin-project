const submit = document.querySelector('.submit')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirm-password')
const match = document.querySelector('.match')


submit.addEventListener('click', e => {
    if(password.value !== confirmPassword.value){
        match.style.display = 'block'
    }
})
