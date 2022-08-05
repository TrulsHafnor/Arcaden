const cardArray = [
    {
        name: 'fries',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/pizza.png'
    },
    {
        name: 'fries',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'JavaScript/BilderTilSpill/MemoryGame/images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

createBoard()


function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    let optionOneId = cardsChosenIds[0]
    let optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'JavaScript/BilderTilSpill/MemoryGame/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'JavaScript/BilderTilSpill/MemoryGame/images/blank.png')
        alert('You have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'JavaScript/BilderTilSpill/MemoryGame/images/white.png')
        cards[optionTwoId].setAttribute('src', 'JavaScript/BilderTilSpill/MemoryGame/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'JavaScript/BilderTilSpill/MemoryGame/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'JavaScript/BilderTilSpill/MemoryGame/images/blank.png')
        alert('Sorry Try Again!!!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == (cardArray.length/2)) {
        resultDisplay.innerHTML = 'Congratulations you found them all!'
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'JavaScript/BilderTilSpill/MemoryGame/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}