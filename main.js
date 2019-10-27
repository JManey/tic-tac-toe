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

let winnerStrings = [];

/*----- cached element references -----*/
let board = document.getElementById('container');

/*----- event listeners -----*/
board.addEventListener('click', game); 
    


/*----- functions -----*/
function init() {
    game.player1 = `X's`;
    game.player2 = `O's`;
    game.turn = 1;
    game.moves = 0;
    createGameBoard();
    convertToStrings(winners);
}


function convertToStrings () {
    winners.forEach(function(element) {
        winnerStrings.push(element.join(''));
    });
}

function game(event) {
    event.preventDefault();
    let clickedGrid = event.target;
    if(clickedGrid.tagName !== 'TD' || clickedGrid.textContent === 'X' || clickedGrid.textContent === 'O') return;
    if(game.turn === 1) {
        clickedGrid.innerHTML='<h3>X</h3>';
        player1Selections.push(parseInt(clickedGrid.id));
    } else {
        clickedGrid.innerHTML='<h3>O</h3>';
        player2Selections.push(parseInt(clickedGrid.id));
    }

    game.turn = game.turn * -1;
    game.moves += 1;
    //check for winner if game isn't over
    if(game.moves === maxMoves) {
        console.log('game is a draw');
    } else {
        winner();
    }s
}



function winner() {
    //sort arrays to make it easier to compare to winners array
    player1Selections.sort(function(a,b) {return a-b});
    player2Selections.sort(function(a,b) {return a-b});

    let p1string = player1Selections.join('');
    let p2string = player2Selections.join('');

        winnerStrings.forEach(function(element) {
            if(p1string.includes(element)) {
                console.log('player1 won');
                game.moves = maxMoves;
                return 
            } else if (p2string.includes(element)) {
                console.log('player2 won');
                game.moves = maxMoves;
                return 
             } else return;
            });
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