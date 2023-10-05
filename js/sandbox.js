//! START SMALL

document.body.onload = addElement;


function addElement() {
    // create and append the title for the game
    let mainDiv = document.getElementById("app");

    // create div to assign row for each child div I want separated by a "line"
    const titleDiv = document.createElement("div");
    titleDiv.id = "titleDiv";
    titleDiv.className = "row"
    mainDiv.appendChild(titleDiv);


    const title = document.createElement("div");
    title.id = "title";
    title.className = "text-center h6";
    title.textContent = "Tic-Tac-Toe";
    mainDiv.appendChild(title);

    const mainGrid = document.createElement("div");
    mainGrid.id = "mainGrid";
    mainGrid.className = "row";
    mainDiv.appendChild(mainGrid);


    // create and append the grid within the mainDiv
    const gameGrid = document.createElement("div");
    gameGrid.id = "game-grid";
    gameGrid.className = "col-12";
    mainDiv.appendChild(gameGrid);

    // create the actual grid inside mainDiv
    // const container = document.getElementById("app");

    let tile0 = document.createElement("button");
    tile0.id = "tile-0";
    tile0.className = "col-4 height: 100px width: 100px";
    gameGrid.appendChild(tile0);

    let tile1 = document.createElement("button");
    tile1.id = "tile-1";
    tile1.className = "col-4 height: 100px width: 100px"
    gameGrid.appendChild(tile1);

    let tile2 = document.createElement("button");
    tile2.id = "tile-2";
    tile2.className = "col-4 height: 100px width: 100px"
    gameGrid.appendChild(tile2);

    let tile3 = document.createElement("button");
    tile3.id = "tile-3";
    tile3.className = "col-4 height: 100px width: 100px"
    gameGrid.appendChild(tile3);

    let tile4 = document.createElement("button");
    tile4.id = "tile-4";
    tile4.className = "col-4 height: 100px width: 100px"
    gameGrid.appendChild(tile4);

    let tile5 = document.createElement("button");
    tile5.id = "tile-5";
    tile5.className = "col-4 height: 100px width: 100px"
    gameGrid.appendChild(tile5);

    let tile6 = document.createElement("button");
    tile6.id = "tile-6";
    tile6.className = "col-4 height: 100px width: 100px"
    gameGrid.appendChild(tile6);

    let tile7 = document.createElement("button");
    tile7.id = "tile-7";
    tile7.className = "col-4 height: 100px width: 100px"
    gameGrid.appendChild(tile7);

    let tile8 = document.createElement("button");
    tile8.id = "tile-8";
    tile8.className = "col-4 height: 100px width: 100px"
    gameGrid.appendChild(tile8);

    // function makeGrid(rows, cols) { // defines the function and gives it 2 parameters "rows" and "cols"
                
       // retrieves the html element by id and sets it to variable
    //     const gridContainer = document.getElementById("app"); // this is placing the grid on the entire document; I want it under the title div element

        // set up nested loop structure by looping through rows and columns
    //     for (let i = 0; i < rows; i++) {
    //         for (let m = 0; m < cols; m++) {
             // create new element for each grid cell
    //             const gridItem = document.createElement("div");
          // give grid item an id (try to get the grid off the total app id div)
    //             gridItem.id = "grid"
             // adds css class for styling
    //             gridItem.classList.add("grid-item");
          // set text content inside each grid item element (change this for later placement)
    //             gridItem.textContent = `${"X"},${"O"}`;
         // append the "gridItem" element; this adds the grid container, making it a part of the grid
    //             gridContainer.appendChild(gridItem);
    //         }
    //     }
        
// add event listener to each grid item in order to place an X/O depending on the player
// can I make that a for loop to contain the listener to each grid item instead of separately writing for all 9 grid items?

    // create div for restart button
    const btnDiv = document.createElement("div");
    btnDiv.id = "btn-div";
    btnDiv.className = "row"
    mainDiv.appendChild(btnDiv);

    // create and append restart game button
    const restartBtn = document.createElement("button");
    restartBtn.id = "restart-btn";
    restartBtn.className = "btn btn-info btn-lg justify-content-center"
    restartBtn.textContent = "Restart Game";
    restartBtn.addEventListener("click", () => {});
    mainDiv.appendChild(restartBtn);
}
// call the function with desired number of rows and columns
// makeGrid(2, 2);

// }

// document.addEventListener("load", init);
// let gameState = {};

