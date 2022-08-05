document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1
    
    //Dette er en totrial fra nettet, skriv den om for moro :)

  
    function checkBoard() {
      //Todo dette er for å sjekke hvem som har vunnet
    }
  
    for (let i = 0; i < squares.length; i++) {
      squares[i].onclick = () => {
        if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
          if (currentPlayer == 1) {
            squares[i].classList.add('taken')
            squares[i].classList.add('player-one')
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
          } else if (currentPlayer == 2){
            squares[i].classList.add('taken')
            squares[i].classList.add('player-two')
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer        
          } 
        } else alert('cant go here')
        checkBoard()
      }
    }
    
  })