//! START SMALL

document.body.onload = addElement;


function addElement() {
    // create and append the title for the game
    let mainDiv = document.getElementById("app");

    const title = document.createElement("div");
    title.id = "title";
    title.className = "d-flex justify-content-center h1";
    title.textContent = "Tic-Tac-Toe";
    mainDiv.appendChild(title);

    // create and append the grid within the mainDiv
    const gameGrid = document.createElement("div");
    gameGrid.id = "game-grid";
    mainDiv.appendChild(gameGrid);

    // create the actual grid inside mainDiv
    const container = document.getElementById("app");

    function makeGrid(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (i = 0; i < (rows * cols); i++) {
            let cell = document.createElement("div");
            cell.innerText = (c + 1);
            container.appendChild(cell).className = "grid-item";
        };
    };
    makeGrid(2, 2);


    // create and append restart game button
    const restartBtn = document.createElement("button");
    restartBtn.id = "restart-btn";
    restartBtn.className = "btn btn-info btn-lg justify-content-center"
    restartBtn.textContent = "Restart Game";
    restartBtn.addEventListener("click", () => {});
    mainDiv.appendChild(restartBtn);
}




document.addEventListener("load", init);
let gameState = {};

// init (Event){
//     buildUI
// }