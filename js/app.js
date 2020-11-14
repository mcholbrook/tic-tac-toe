/*-------------------------------- Constants --------------------------------*/
//Player 1 = red, X, 1
//Player 2 = blue, O, -1

let colors = {
  'null': 'white',
  '1': 'red',
  '-1': 'blue'
 }

 let winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let turn = null;
let board = []
let winner = null;

/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here
const squares = Array.from(document.querySelectorAll('.board div'))
// const squares = document.querySelectorAll('.board')
console.log(squares)
const resetButton = document.getElementById('resetButton')
const message = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.querySelector('.board').addEventListener('click', onClick)
resetButton.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading


function init(){
  turn = 1
  winner = null
  board = [null, null, null, null, null, null, null, null, null]
  render()
}

// On-Click function:
// Set up what happens when one of the elements
// is clicked
function onClick(e){
  let currentSquare = e.target.id
  console.log(currentSquare)
  console.log(Number(currentSquare))
  board[Number(currentSquare)] = turn
  render()
  console.log(board)
  turn *= -1
}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
function isWinner(){

}

// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render(){
  board.forEach(function(square, idx){
    squares[idx].style.backgroundColor = colors[square]
  })
  if (winner === "T"){
    message.innerHTML = "It's a tie!"
  } else if (winner) {
    message.innerHTML = `${winner.toUpperCase()} wins this round!`
  } else {
    if (turn === 1){
      message.innerHTML = `It's player one's turn!`
    } else {
      message.innerHTML = `It's player two's turn!`
    }
  }
}

init()