/* Challenge #11: Unwatched Gifts

The Grinch wants to steal the Christmas presents from the warehouse. To do this, he needs to know which presents are not under surveillance.

The warehouse is represented as an array of strings (string[]), where each present (*) is protected if its position is next to a camera (#). Each empty space is represented with a dot (.).

Your task is to count how many presents are not under surveillance, meaning they do not have any adjacent camera (up, down, left, or right).

Keep in mind: only the 4 cardinal directions are considered "adjacent", not diagonals.

Presents in the corners or at the edges can be unguarded, as long as they do not have cameras directly next to them. */


function findUnsafeGifts(warehouse) {
  function isWatched(warehouse, row, col) {
    if (row > 0 && warehouse[row-1][col] === "#") {
      return true;
    }
    if (row < warehouse.length-1 && warehouse[row+1][col] === "#") {
      return true;
    }
    if (col > 0 && warehouse[row][col-1] === "#") {
      return true;
    }
    if (col < warehouse[row].length-1 && warehouse[row][col+1] === "#") {
      return true;
    }
    return false;
  }
  let unwatchedGifts = 0;
  for (let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[i].length; j++) {
      if (warehouse[i][j] === "*" && !isWatched(warehouse, i, j)) {
        unwatchedGifts++;
      }
    }
  }
  return unwatchedGifts;
}


// Examples

findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]) // ➞ 0

// All presents are next to a camera

findUnsafeGifts([
  '...',
  '.*.',
  '...'
]) // ➞ 1

// This present has no cameras around

findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]) // ➞ 2
// The presents in the top corners have no cameras around

findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
]) // ➞ 4

// The four presents have no cameras, because they are diagonal to the camera