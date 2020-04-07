const x_class = 'x'
const o_class = 'o'
const WINNING = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElement = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winMassage = document.getElementById('winmassage')
const restartButton = document.getElementById('restart')
const winningMessageTextElement = document.querySelector('[data-win-masage-text]')
let circelTurn
restart.addEventListener('click' , startGame)
startGame()
function startGame() {
    circelTurn = false;
    cellElement.forEach(cell => {
        cell.classList.remove(x_class)
        cell.classList.remove(o_class)
        cell.addEventListener('click' ,handelClick)
        cell.addEventListener('click', handelClick, { once: true })
    })
    hover()
    winMassage.classList.remove('show')
}
function handelClick(e) {
    const cell = e.target
    const currentClass = circelTurn ? o_class : x_class
    markPlace(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    }
    else if(isDraw()){
        endGame(true)
    }else{
        swapTurns()
        hover()
    }



}
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerHTML = "Draw!"

    }
    else {
        winningMessageTextElement.innerHTML = `${circelTurn ? "O wins! " : "X Wins! "} `

    }

    winMassage.classList.add('show')
    

}
function isDraw(){
    return [...cellElement].every(cell => {
        return cell.classList.contains(x_class) ||
        cell.classList.contains(o_class)
    })
}


function markPlace(cell, currentClass) {
    cell.classList.add(currentClass)
}
function swapTurns() {
    circelTurn = !circelTurn
}
function hover() {
    board.classList.remove(x_class)
    board.classList.remove(o_class)
    if (circelTurn) {
        board.classList.add(o_class)
    }
    else {
        board.classList.add(x_class)
    }

}
function checkWin(currentClass) {
    return WINNING.some(combination => {
        return combination.every(index => {

            return cellElement[index].classList.contains(currentClass)
        })

    })
}
