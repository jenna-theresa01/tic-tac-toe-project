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
    mainGrid.className = "row";
    mainDiv.appendChild(mainGrid);

    // create and append the grid within the mainDiv
    const gameGrid = document.createElement("div");
    gameGrid.id = "game-grid";
    gameGrid.className = "row justify-content-center";
    mainGrid.appendChild(gameGrid);

    // create div with main col class
    const mainCol = document.createElement("div");
    mainCol.className = "col-md-4";
    gameGrid.appendChild(mainCol);

    // create div to hold first row of the grid
    const rowOne = document.createElement("div");
    rowOne.id = "row-1";
    rowOne.className = "row";
    mainCol.appendChild(rowOne);

    let tile0 = document.createElement("button");
    tile0.id = "tile-0";
    tile0.className = "col-4 col-md-4 square";
    tile0.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile0.textContent = player1;
    });
    rowOne.appendChild(tile0);

    let tile1 = document.createElement("button");
    tile1.id = "tile-1";
    tile1.className = "col-4 col-md-4 square"
    tile1.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile1.textContent = player1;
    });
    rowOne.appendChild(tile1);

    let tile2 = document.createElement("button");
    tile2.id = "tile-2";
    tile2.className = "col-4 col-md-4 square"
    tile2.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile2.textContent = player1;
    });
    rowOne.appendChild(tile2);

     // create div to hold second row of the grid
     const rowTwo = document.createElement("div");
     rowTwo.id = "row-2";
     rowTwo.className = "row";
    mainCol.appendChild(rowTwo);

    let tile3 = document.createElement("button");
    tile3.id = "tile-3";
    tile3.className = "col-4 col-md-4 square"
    tile3.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile3.textContent = player1;
    });
    rowTwo.appendChild(tile3);

    let tile4 = document.createElement("button");
    tile4.id = "tile-4";
    tile4.className = "col-4 col-md-4 square"
    tile4.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile4.textContent = player1;
    });
    rowTwo.appendChild(tile4);

    let tile5 = document.createElement("button");
    tile5.id = "tile-5";
    tile5.className = "col-4 col-md-4 square"
    tile5.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile5.textContent = player1;
    });
    rowTwo.appendChild(tile5);

     // create div to hold first row of the grid
    const rowThree = document.createElement("div");
    rowThree.id = "row-1";
    rowThree.className = "row";
    mainCol.appendChild(rowThree);

    let tile6 = document.createElement("button");
    tile6.id = "tile-6";
    tile6.className = "col-4 col-md-4 square"
    tile6.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile6.textContent = player1;
    });
    rowThree.appendChild(tile6);

    let tile7 = document.createElement("button");
    tile7.id = "tile-7";
    tile7.className = "col-4 col-md-4 square"
    tile7.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile7.textContent = player1;
    });
    rowThree.appendChild(tile7);

    let tile8 = document.createElement("button");
    tile8.id = "tile-8";
    tile8.className = "col-4 col-md-4 square"
    tile8.addEventListener ("click", () => {
        if (player1 === "X"){
         } else {
            player2 === "O"
        };
    tile8.textContent = player1;
    });
    rowThree.appendChild(tile8);

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
    restartBtn.addEventListener("click", () => {});
    btnDiv.appendChild(restartBtn);
};