/*-------------------------------- Constants --------------------------------*/
//Player 1 = red, X, 1
//Player 2 = blue, O, -1

let colors = {
  white: null,
  '1': 'red',
  '-1': 'blue'
 }

 let winCombos = [[sq0, sq1, sq2], [sq3, sq4, sq5], [sq6, sq7, sq8], [sq0, sq3, sq6], [sq1, sq4, sq7], [sq2, sq5, sq8], [sq0, sq4, sq8], [sq2, sq4, sq6]]


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let turn = null;
let board = []
let winner = null;

/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here
const squares = document.querySelectorAll('.board')
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
  if (turn === 1){
    currentSquare.innerText = 'X'
  } else {
    currentSquare.innerText = 'O'
  }
  // turn *= -1
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
    console.log(square, idx)
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