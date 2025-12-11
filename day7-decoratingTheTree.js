/* Challenge #7: Decorating the Tree

It’s time to decorate the Christmas tree 🎄! Write a function that receives:

    height → the height of the tree (number of rows).
    ornament → the ornament character (for example, "o" or "@").
    frequency → how often (in asterisk positions) the ornament appears.

The tree is drawn with asterisks *, but every frequency positions, the asterisk is replaced by the ornament.

The position counting starts at 1, from the top to the bottom, left to right. If frequency is 2, the ornaments appear in positions 2, 4, 6, etc.

The tree must be centered and have a one-line trunk # at the end. */

function drawTree(height, ornament, frequency) {
  let treeArt = "";
  let count = 0;
  for (let i = 0; i < height; i++) {
    const blankSpace = ' '.repeat(height - (i+1));
    let starsInRow = i*2 + 1;
    treeArt += blankSpace;
    for (let j = 0; j < starsInRow; j++) {
      count++;
      if (count % frequency === 0) {
        treeArt += ornament;
      } else {
        treeArt += '*';
      }
    } 
    treeArt += '\n';
  }
  treeArt += ' '.repeat(height - 1) + '#';
  return treeArt;
}

// Examples

console.log(drawTree(5, 'o', 2));
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

console.log(drawTree(3, '@', 3));
//   *
//  *@*
// *@**@
//   #

console.log(drawTree(4, '+', 1));
//    +
//   +++
//  +++++
// +++++++
//    #
