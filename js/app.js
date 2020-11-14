/*-------------------------------- Constants --------------------------------*/
//Player 1 = red, X, 1
//Player 2 = blue, O, -1

let colors = {
  white: null,
  '1': 'red',
  '-1': 'blue'
 }

 let win1 = [sq1, sq2, sq3]
 let win2 = [sq4, sq5, sq6]
 let win3 = [sq7, sq8, sq9]
 let win4 = [sq1, sq4, sq7]
 let win5 = [sq2, sq5, sq8]
 let win6 = [sq3, sq6, sq9]
 let win7 = [sq3, sq5, sq7]
 let win8 = [sq1, sq5, sq9]


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let turn = null;
let board = []
let winner = null;

/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here
const sq0 = document.getElementById('sq1')
const sq1 = document.getElementById('sq2')
const sq2 = document.getElementById('sq3')
const sq3 = document.getElementById('sq4')
const sq4 = document.getElementById('sq5')
const sq5 = document.getElementById('sq6')
const sq6 = document.getElementById('sq7')
const sq7 = document.getElementById('sq8')
const sq8 = document.getElementById('sq9')

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.body.addEventListener('click', (e) =>{
  e.target.id ===
  
})

/*-------------------------------- Functions --------------------------------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading
init()

function init(){
  turn = 1
  winner = null
  board = [null, null, null, null, null, null, null, null, null]

}

// On-Click function:
// Set up what happens when one of the elements
// is clicked
function onClick(){

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

}