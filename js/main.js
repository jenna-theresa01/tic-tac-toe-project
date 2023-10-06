// main.js

function init(){
    console.log("hello world!");
}

document.body.onload = addElement;


function addElement() {
    // create and append the title for the game
    let mainDiv = document.getElementById("app");

    // create div to assign row for each child div I want separated by a "line"
    const title = document.createElement("div");
    title.id = "title";
    title.className = "text-center";
    title.textContent = "Tic-Tac-Toe";
    mainDiv.appendChild(title);

    const mainGrid = document.createElement("div");
    mainGrid.id = "mainGrid";
    mainGrid.className = "container justify-content-center";
    mainDiv.appendChild(mainGrid);

    // create and append the grid within the mainDiv
    const gameGrid = document.createElement("div");
    gameGrid.id = "game-grid";
    gameGrid.className = "row justify-content-center";
    mainGrid.appendChild(gameGrid);

    // create div with main col class
    const mainCol = document.createElement("div");
    mainCol.className = "col-12 justify-content-center";
    gameGrid.appendChild(mainCol);

    // create div to hold first row of the grid
    const rowOne = document.createElement("div");
    rowOne.id = "row-1";
    rowOne.className = "row justify-content-center";
    mainCol.appendChild(rowOne);

    for (let i = 0; i <= 8; i++) {
        let tile = document.createElement("button");
        tile.id = "tile-" + i;
        tile.className = "col-4 col-md-4 square justify-content-center";
        tile.addEventListener ("click", () => {
        tile.textContent = currentPlayer;
        boardState[i] = currentPlayer;
        turns.push(1)
        if (currentPlayer == "O") {
            currentPlayer = "X"
        } else {
            currentPlayer = "O"
        }
    });
   rowOne.appendChild(tile);
   }

    // create div for restart button
    const btnDiv = document.createElement("div");
    btnDiv.id = "btn-div";
    btnDiv.className = "row justify-content-center"
    mainDiv.appendChild(btnDiv);

    // create and append restart game button
    const restartBtn = document.createElement("button");
    restartBtn.id = "restart-btn";
    restartBtn.className = "btn btn-info btn-sm "
    restartBtn.textContent = "Restart Game";
    restartBtn.addEventListener("click", () => {
        function clearBoard() { // function to clear the game board
            // reset the content of each square to an empty state
            for (let i = 0; i <= 8; i++) {
                const tile = document.getElementById(`tile-${i}`);
                tile.textContent = " ";
            }
            // reset current player to the first player
            currentPlayer = player1;
        }
        clearBoard();
    });
    btnDiv.appendChild(restartBtn);
};

// define player variables
let player1 = "X"
let player2 = "O"
let currentPlayer = player2;
let currentSymbol = "X"; // initialize "X" for player 1

function switchPlayer() {
    // switch between players
    switch (currentPlayer) {
        case "X":
            currentPlayer = player2;
            break;
        case "O":
            currentPlayer = player1;
            break
    }
    // switch between the two assigned symbols
    switch (currentSymbol) {
        case "X":
            currentSymbol = "O";
            break;
        case "O":
            currentSymbol = "X";
            break
    }
};


// function to handle a tile click event
function handleTileClick(tileId) {
    const tile = document.getElementById(tileId);

    // check if a tile is empty before allowing the move
    if (tile.textContent === "") {
        tile.textContent = currentSymbol; // set the current symbol 
        switchPlayer();
    }
};

// define the win combinations
const winCombo = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // row win
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // column win
    [0, 4, 8], [6, 4, 2], // diagonal win
]; 

// create function for a win condition
function checkWin () {

};

const boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let turns = [];