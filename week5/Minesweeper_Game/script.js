// Set this constant to true to debug the placement of bombs without
// having to click on all cells to reveal them.
const CHEAT_REVEAL_ALL = false;

const ROWS_COUNT = 10;
const COLS_COUNT = 10;
let BOMBS_COUNT = 0;
let FLAG_COUNT = 10;
let CLEARED_CELL_COUNT = 0;

let defeat = false;
let victory = false;

// Cell constructor
function Cell() {
  this.discovered = false;
  this.isBomb = false;
  this.hasBeenFlagged = false;
}

// Initialize cells
let cells = Array(ROWS_COUNT);
for (let row = 0; row < ROWS_COUNT; row++) {
  cells[row] = Array(COLS_COUNT);
  for (let col = 0; col < COLS_COUNT; col++) {
    cells[row][col] = new Cell();
  }
}

//
// TODO: Task 1 - add some bombs at fixed positions.
function addBombs() {
  while (BOMBS_COUNT < 10) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    if (!cells[row][col].isBomb) {
      cells[row][col].isBomb = true;
      BOMBS_COUNT++;
    }
  }
}
//

//
// TODO: Task 2 - Comment out the code of task 1. Instead of adding bombs in fixed places, add 10 of them in random places.
//                Add a BOMBS_COUNT constant so that you can easily change the amount of bombs placed. Put it next to the
//                other constants.
//

// Once the game has been initialized, we "render" it.
render();

//
// Game functions definitions
//

function checkNeighbours(row, col) {
  for (let rowIndex = row - 1; rowIndex <= row + 1; rowIndex++) {
    if (rowIndex < 0 || rowIndex > ROWS_COUNT - 1) continue;
    for (let colIndex = col - 1; colIndex <= col + 1; colIndex++) {
      if (colIndex < 0 || rowIndex > COLS_COUNT - 1) continue;
      if (cells[rowIndex][colIndex] != undefined) {
        if (
          !cells[rowIndex][colIndex].isBomb &&
          !cells[rowIndex][colIndex].hasBeenFlagged &&
          !cells[rowIndex][colIndex].discovered
        ) {
          if (countAdjacentBombs(rowIndex, colIndex) != 0) {
            cells[rowIndex][colIndex].discovered = true;
            CLEARED_CELL_COUNT++;
          } else {
            cells[rowIndex][colIndex].discovered = true;
            checkNeighbours(rowIndex, colIndex);
            CLEARED_CELL_COUNT++;
          }
        }
      }
    }
  }
}

function discoverCell(row, col) {
  //
  // TODO: Task 5 - Reveal cells when clicked.
  //
  //
  // TODO: Task 6 - Discover neighbor cells recursively, as long as there are no adjacent bombs to the current cell.
  //
  //
  // TODO: Task 8 - Implement defeat. If the player "discovers" a bomb (clicks on it without holding shift), set the variable defeat to true.
  //

  if (cells[row][col].isBomb) defeat = true;

  let adjBombs = countAdjacentBombs(row, col);

  if (adjBombs == 0) {
    checkNeighbours(row, col);
  } else {
    cells[row][col].discovered = true;
    CLEARED_CELL_COUNT++;
  }
}

function flagCell(row, col) {
  //
  // TODO: Task 7 - Implement flags. Flags allow the player to mark cells that they think contain a bomb.
  //                When clicking a cell and holding shift, function flagCell() will be called for you.
  //

  let cell = cells[row][col];

  if (!cell.hasBeenFlagged && FLAG_COUNT > 0) {
    cell.hasBeenFlagged = true;
    FLAG_COUNT--;
    CLEARED_CELL_COUNT++;
  } else if (cell.hasBeenFlagged) {
    cell.hasBeenFlagged = false;
    FLAG_COUNT++;
    CLEARED_CELL_COUNT--;
  }
}

// This function is called once for each cell when rendering the game. The row and col of the current cell is
// passed to the functionn
function countAdjacentBombs(row, col) {
  //
  // TODO: Task 4 - Adjacent bombs are bombs in cells touching our cell (also diagonally). Implement this function
  //                so that it returns the count of adjacent cells with bombs in them.
  //
  let adjBombs = 0;

  for (let rowIndex = row - 1; rowIndex <= row + 1; rowIndex++) {
    if (rowIndex < 0 || rowIndex > ROWS_COUNT - 1) continue;
    for (let colIndex = col - 1; colIndex <= col + 1; colIndex++) {
      if (colIndex < 0 || rowIndex > COLS_COUNT - 1) continue;
      if (cells[rowIndex][colIndex] != undefined) {
        cells[rowIndex][colIndex].isBomb ? adjBombs++ : (adjBombs = adjBombs);
      }
    }
  }

  return adjBombs;
}

function getBombsCount() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  return BOMBS_COUNT;
}

function getClearedCells() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  return CLEARED_CELL_COUNT;
}

function getTotalCellsToClear() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  return ROWS_COUNT * COLS_COUNT;
}

function checkForVictory() {
  //
  // TODO: Task 10 - Implement victory. If the player has revealed as many cells as they must (every cell that isn't a
  //                 bomb), set variable victory to true.
  //
  let TOTAL_CELL_COUNT = ROWS_COUNT * COLS_COUNT;
  if (CLEARED_CELL_COUNT == TOTAL_CELL_COUNT) {
    victory = true;
  } else {
    victory = false;
  }
}

//
// Rendering functions
//
function getMessage() {
  if (victory == true) {
    return "Well done! 👏🏼<br><br>Refresh the page to start again.";
  } else if (defeat) {
    return "Boom! 💥<br><br>Refresh the page to try again.";
  }
  return "";
}

// "Render" the game. Update the content of the page to reflect any changes to the game state.
function render() {
  let playfield = document.getElementById("playfield");
  let html = "";

  if (BOMBS_COUNT == 0) {
    addBombs();
  }

  for (let row = 0; row < ROWS_COUNT; row++) {
    html += '<div class="row">';
    for (let col = 0; col < COLS_COUNT; col++) {
      let cell = cells[row][col];
      let cellText = "";
      let cssClass = "";
      let textColor = "";
      if (cell.discovered || CHEAT_REVEAL_ALL || defeat) {
        cssClass = "discovered";
        if (cell.isBomb) {
          cellText = "💣";
        } else {
          let adjBombs = countAdjacentBombs(row, col);
          if (adjBombs > 0) {
            cellText = adjBombs.toString();
            if (adjBombs == 1) {
              textColor = "blue";
            } else if (adjBombs == 2) {
              textColor = "green";
            } else if (adjBombs == 3) {
              textColor = "red";
            } else if (adjBombs == 4) {
              textColor = "black";
            }
          }
        }
      } else {
        if (cell.hasBeenFlagged) {
          cellText = "🚩";
        }
      }
      html += `<div class="cell ${cssClass}" style="color:${textColor}" onclick="onCellClicked(${row}, ${col}, event)">${cellText}</div>`;
    }
    html += "</div>";
  }
  playfield.innerHTML = html;

  // Defeat screen
  let body = document.getElementsByTagName("body")[0];
  if (defeat) {
    body.classList.add("defeat");
  }

  // Victory screen
  if (victory) {
    body.classList.add("victory");
  }

  // Update stats
  document.getElementById("bombs-count").innerText = getBombsCount().toString();
  document.getElementById("cleared-cells-count").innerText =
    getClearedCells().toString();
  document.getElementById("total-cells-to-clear").innerText =
    getTotalCellsToClear().toString();

  // Update message
  document.getElementById("message").innerHTML = getMessage();
}

// This function gets called each time a cell is clicked. Arguments "row" and "col" will be set to the relevant
// values. Argument "event" is used to check if the shift key was held during the click.
function onCellClicked(row, col, event) {
  if (event.shiftKey) {
    flagCell(row, col);
  } else {
    discoverCell(row, col);
  }
  checkForVictory();
  render();
}
