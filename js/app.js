/*-------------------------------- Constants --------------------------------*/
let colors = {}


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)

/*------------------------ Cached Element References ------------------------*/

// You might choose to put your game status here

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.body.addEventListener('click', (e) =>{
  let audioVar = new Audio(`/audio/${e.target.id}.mp3`)
  audioVar.play()
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