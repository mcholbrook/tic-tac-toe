/*-------------------------------- Constants --------------------------------*/
let playerText = {
  'null': '',
  '1': 'X',
  '-1': 'O'
 }

 let winPossibilities = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let turn = null
let board = []
let winner = null

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
init()

function init(){
  turn = 1
  winner = null
  board = [null, null, null, null, null, null, null, null, null]
  startSounds()
  render()
}

function onClick(e){
  let currentSquare = e.target.id
  console.log(currentSquare)
  if (board[Number(currentSquare)] || winner){
    return
  } 
  else {
    board[Number(currentSquare)] = turn
    console.log(board)
    turn *= -1
    isWinner()
    moveSounds()
    render()
  }
}

function isWinner(){
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
 })
}

function render(){
  board.forEach(function(square, idx){
    squares[idx].innerText = playerText[square]
  })
  console.log(winner)
  if (winner === "T"){
    message.innerHTML = "It's a tie!"
    tieSounds()
  } else if (winner === 1) {
    message.innerHTML = `Player one wins this round!`
    playerOneWin()
  } else if (winner === -1){
     message.innerHTML = `Player two wins this round!`
     playerTwoWin()
  } else {
     if (turn === 1){
      message.innerHTML = `It's player one's turn!`
     } else {
       message.innerHTML = `It's player two's turn!`
     }
   }
}

function startSounds(){
  let startSound = new Audio("/audio/startsound.wav")
  startSound.play()
}

function tieSounds(){
  let tieSound = new Audio("/audio/tiesound.wav")
  tieSound.play()
}

function moveSounds(){
  let moveSound = new Audio("/audio/movesound.wav")
  moveSound.play()
}

function playerOneWin(){
  let playerOne = new Audio("/audio/playeronewin.wav")
  playerOne.play()
}

function playerTwoWin(){
  let playerTwo = new Audio("/audio/playertwowin.wav")
  playerTwo.play()
}


