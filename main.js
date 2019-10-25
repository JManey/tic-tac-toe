/*----- constants -----*/
const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
const maxMoves = 9;
const winners = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
/*----- app's state (variables) -----*/
var game = {
    player1: 'X',
    player2: 'O',
    turn: 1,
    moves: 0,
};

let player1Selections = [];
let player2Selections = [];

/*----- cached element references -----*/
let board = document.getElementById('container');

/*----- event listeners -----*/
board.addEventListener('click', function(event) {
    event.preventDefault();
    let clickedGrid = event.target;
    if(clickedGrid.tagName !== 'TD' || clickedGrid.textContent === 'X' || clickedGrid.textContent === 'O') return;
    console.log(clickedGrid)
    if(game.turn === 1) {
        clickedGrid.innerHTML='<h3>X</h3>';
        player1Selections.push(parseInt(clickedGrid.id));
    } else {
        clickedGrid.innerHTML='<h3>O</h3>';
        player2Selections.push(parseInt(clickedGrid.id));
    }

    game.turn = game.turn * -1;
    game.moves += 1;
    //push clicked id + player to array

}) 
    


/*----- functions -----*/
function init() {
    game.player1 = `X's`;
    game.player2 = `O's`;
    game.turn = 1;
    game.moves = 0;
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