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
    // const container = document.getElementById("app");

    function makeGrid(rows, cols) { // defines the function and gives it 2 parameters "rows" and "cols"
        const gridContainer = document.getElementById("app"); // retrieves the html element by id and sets it to variable

        // set up nested loop structure by looping through rows and columns
        for (let i = 0; i < rows; i++) {
            for (let m = 0; m < cols; m++) {
                // create new element for each grid cell
                const gridItem = document.createElement("div");
                // give grid item an id (try to get the grid off the total app id div)
                gridItem.id = "grid"
                // adds css class for styling
                gridItem.classList.add("grid-item");
                // set text content inside each grid item element (change this for later placement)
                gridItem.textContent = `${i},${m}`;
                // append the "gridItem" element; this adds the grid container, making it a part of the grid
                gridContainer.appendChild(gridItem);
            }
        }
        


    // create and append restart game button
    const restartBtn = document.createElement("button");
    restartBtn.id = "restart-btn";
    restartBtn.className = "btn btn-info btn-lg justify-content-center"
    restartBtn.textContent = "Restart Game";
    restartBtn.addEventListener("click", () => {});
    mainDiv.appendChild(restartBtn);
}
// call the function with desired number of rows and columns
makeGrid(3, 3);

}

// document.addEventListener("load", init);
// let gameState = {};

