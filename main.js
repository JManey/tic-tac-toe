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

let player1Selections = {};
let player2Selections = {};

let winnerStrings = [];
let winnerCheck;
let player1Score = 0;
let player2Score = 0;

/*----- cached element references -----*/
let board = document.getElementById('container');
let replayBtn = document.getElementById('replayBtn');
let scoreP1 = document.getElementById('player1score');
let scoreP2 = document.getElementById('player2score');
let announce = document.getElementById('announce');
let cell = document.querySelectorAll('H3');

/*----- event listeners -----*/
board.addEventListener('click', gameFunc); 
// replayBtn.addEventListener('click', playAgain);
 


/*----- functions -----*/
function init() {
    game.player1 = `X's`;
    game.player2 = `O's`;
    game.turn = 1;
    game.moves = 0;
    createGameBoard();
    convertToStrings(winners);
    winnerCheck = false;
    announce.textContent = 'Good Luck!';
}

function nextRound() {
    announce.textContent = 'Good Luck!';
    winnerCheck = false;
    game.turn = 1;
    game.moves = 0;
    for(i=1; i < 10; i++) {
        document.getElementById(i).innerHTML = '';
    }
    player1Selections = {};
    player2Selections = {};
    replayBtn.removeEventListener('click', playAgain);
    board.addEventListener('click', gameFunc); 
}


function convertToStrings () {
    winners.forEach(function(element) {
        winnerStrings.push(element.join(''));
    });
}

function gameFunc(event) {
    event.preventDefault();
    let clickedGrid = event.target;  
    
    if(clickedGrid.tagName !== 'TD' || clickedGrid.textContent === 'X' || clickedGrid.textContent === 'O') return;
    if(game.turn === 1) {
        clickedGrid.innerHTML='<h3>X</h3>';
        player1Selections[parseInt(clickedGrid.id)] = -1;
    } else {
        clickedGrid.innerHTML='<h3>O</h3>';
        player2Selections[parseInt(clickedGrid.id)] = 1;
    }
    game.turn = game.turn * -1;
    game.moves += 1;
    //check for winner if game isn't over
    winner();
    if(!winnerCheck && game.moves === maxMoves) {
        announce.textContent = `It's a draw!!`;
        board.removeEventListener('click', gameFunc);
        replayBtn.addEventListener('click', playAgain);
    }
};



function winner() { 
    winnerStrings.forEach(function(element) {
        // console.log(element)
        console.log(element[0] +' ' + element[1] + element[2])
        if((player1Selections[element[0]] + player1Selections[element[1]] + player1Selections[element[2]] === -3)) {
            announce.textContent = 'Player X Wins!!!';
            player1Score ++;
            winnerCheck = true
            board.removeEventListener('click', gameFunc);
            replayBtn.addEventListener('click', playAgain);
            return; 
        } else if ((player2Selections[element[0]] + player2Selections[element[1]] + player2Selections[element[2]] === 3)) {
            announce.textContent = 'Player O Wins!!!';
            player2Score ++;
            winnerCheck = true
            board.removeEventListener('click', gameFunc);
            replayBtn.addEventListener('click', playAgain);
            return; 
        } else {
            return;
        }
    })
    
}
     
function updateScore() {
    scoreP1.innerHTML = player1Score;
    scoreP2.innerHTML = player2Score;
}

function playAgain() {
    updateScore();
    nextRound();
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