const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPostition
let currentTime =60
let timerId = null


moveMole()

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPostition ) {
            result++
            score.textContent = result
            hitPostition = null
        }
    })
})



function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')

    hitPostition = randomSquare.id
}

function moveMole() {
    timerId =setInterval(randomSquare, 500)
}

function countDown() {
    currentTime--
    timeleft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)



