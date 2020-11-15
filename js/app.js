/*-------------------------------- Constants --------------------------------*/
//Player 1 = red, X, 1
//Player 2 = blue, O, -1

let colors = {
  'null': '',
  '1': 'X',
  '-1': 'O'
 }

 let winPossibilities = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let turn = null;
let board = []
let winner = null;

/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here
const squares = Array.from(document.querySelectorAll('.board div'))
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
  if (board[Number(currentSquare)]){
    return
  } 
  else {
    board[Number(currentSquare)] = turn
    console.log(board)
    turn *= -1
    isWinner()
    render()
    
  }
}

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so
function isWinner(){
    //  if (board[0] && board[0] === board[1] && board[0] === board[2]){
    //   winner = board[0]
    //   console.log(winner)
    //   return winner}

  winPossibilities.forEach(function(possibility){
    if (board[possibility[0]] && board[possibility[0]] === board[possibility[1]] && board[possibility[0]] === board[possibility[2]]){
      winner = board[possibility[0]]
      console.log(`There is a winner! ${winner}`)
      return winner
     } else if (!board.includes(null)){
       winner = "T"
       console.log(`This is a tie game. ${winner}`)
       return winner
     }
     
     
    //  else if (board.includes(null)){
    //   winner = null
    //   console.log(`There's no winner yet: ${winner}`)
    //   return winner
    // } winner = 'T'
    // return winner 
 })
}


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render(){
  board.forEach(function(square, idx){
    squares[idx].innerText = colors[square]
  })
  console.log(winner)
  if (winner === "T"){
    message.innerHTML = "It's a tie!"
  } else if (winner === 1 || winner === -1) {
    message.innerHTML = `${winner} wins this round!`
   } else {
     if (turn === 1){
      message.innerHTML = `It's player one's turn!`
     } else {
       message.innerHTML = `It's player two's turn!`
     }
   }
}

init()