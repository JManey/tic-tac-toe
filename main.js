/*----- constants -----*/
const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
/*----- app's state (variables) -----*/
let player1;
let player2;
let playedGrid = [];
let turn;

/*----- cached element references -----*/
let board = document.getElementById('board-container');

/*----- event listeners -----*/
board.addEventListener('click', function(event) {
    event.preventDefault();
    let clickedGrid = event.target;
    if(clickedGrid.tagName !== 'P' || clickedGrid.textContent === 'X' || clickedGrid.textContent === 'O') return;
    console.log(clickedGrid)
    if(turn === 1) {
        clickedGrid.innerHTML='<h3>X</h3>';
    } else {
        clickedGrid.innerHTML='<h3>O</h3>';
    }
    turn = turn * -1;

}) 
    


/*----- functions -----*/
function init() {
    player1 = `X's`;
    player2 = `O's`;
    turn = 1;
}

init();