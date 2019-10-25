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
let boardsize;

/*----- cached element references -----*/
let board = document.getElementById('container');

/*----- event listeners -----*/
board.addEventListener('click', function(event) {
    event.preventDefault();
    let clickedGrid = event.target;
    if(clickedGrid.tagName !== 'TD' || clickedGrid.textContent === 'X' || clickedGrid.textContent === 'O') return;
    console.log(clickedGrid)
    if(turn === 1) {
        clickedGrid.innerHTML='<h3>X</h3>';

    } else {
        clickedGrid.innerHTML='<h3>O</h3>';
    }
    turn = turn * -1;
console.log(clickedGrid);
}) 
    


/*----- functions -----*/
function init() {
    player1 = `X's`;
    player2 = `O's`;
    turn = 1;
    boardSize = 3;
    createGameBoard();
}

function winner() {

}

function createGameBoard() {
    let table = document.createElement('table');
    let idCounter = 1;
    for(let row of gameBoard) {
        table.insertRow();
        for(let cell of row) {
            let newCell = table.rows[table.rows.length -1]
            .insertCell();
            newCell.classList.add('cell');
            newCell.setAttribute('id', idCounter)
            idCounter ++;

        }
    }
    //add to the dom
    board.appendChild(table);
}


init();