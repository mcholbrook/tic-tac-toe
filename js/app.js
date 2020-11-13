/*-------------------------------- Constants --------------------------------*/
let colors = {
  null: ,
  player1: 1,
  player2: -1,
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
let board = [sq1, sq2, s3,
             sq4, sq5, sq6,
             sq7, sq8, sq9]
let winner = null;

/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here

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