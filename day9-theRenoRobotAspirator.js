/* Challenge #9: The Reno Robot Aspirator

The elves have built a robot vacuum reindeer 🦌 (@) to tidy up the workshop a bit before Christmas.

The reindeer moves on a board to pick things up off the floor (*) and must avoid obstacles (#).

You will receive two parameters:

    board: a string that represents the board.
    moves: a string with the movements: 'L' (left), 'R' (right), 'U' (up), 'D' (down).

Movement rules:

    If the reindeer picks something up off the floor (*) during the moves → return 'success'.
    If the reindeer goes off the board or crashes into an obstacle (#) → return 'crash'.
    If the reindeer neither picks anything up nor crashes → return 'fail'.

Keep in mind that if the reindeer picks something up off the floor, it is already 'success', regardless of whether in later moves it crashes into an obstacle or goes off the board.

Important: Keep in mind that in the board the first and last lines are blank and must be discarded. */

function moveReno(board, moves) {
  const boardGrid = board.split('\n').slice(1, -1);
  let row = boardGrid.findIndex(r => r.includes("@"));
  let col = boardGrid[row].indexOf("@");
  let pickedUp = false;

  const movesMap = {L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0]};

  for (const move of moves) {
    row += movesMap[move][0];
    col += movesMap[move][1];

    const outOfBounds = row < 0 || row >= boardGrid.length || col < 0 || col >= boardGrid[0].length;

    if (outOfBounds) {
        return pickedUp? 'success' : 'crash';
    }
    const cell = boardGrid[row][col];
    if (cell === "#") {
        return pickedUp? 'success' : 'crash';
    }
    if (cell === '*') {
        pickedUp = true; 
    }
  }
  return pickedUp? 'success' : 'fail';
}


// Example:

const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'));
// ➞ 'fail' -> it moves but doesn't pick anything up

console.log(moveReno(board, 'U'));
// ➞ 'success' -> it picks something up (*) right above

console.log(moveReno(board, 'RU'));
// ➞ 'crash' -> it crashes into an obstacle (#)

console.log(moveReno(board, 'RRRUU'));
// ➞ 'success' -> it picks something up (*)

console.log(moveReno(board, 'DD'));
// ➞ 'crash' -> it crashes into the bottom of the board

console.log(moveReno(board, 'UUU'));
// ➞ 'success' -> it picks something up off the floor (*) and then crashes at the top

console.log(moveReno(board, 'RR'));
// ➞ 'fail' -> it moves but doesn't pick anything up
