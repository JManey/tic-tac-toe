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

/*----- cached element references -----*/
let board = document.getElementById('board-container');

/*----- event listeners -----*/
board.addEventListener('click', function(event) {
    event.preventDefault();
    let clickedGrid = event.target;
    if(clickedGrid.tagName !== 'P') return;
    console.log(clickedGrid)
}) 
    


/*----- functions -----*/
init() {
    player1 = `X's`;
    player2 = `O's`;
}