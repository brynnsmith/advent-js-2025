/* Challenge #6: Matching Gloves

In Santa's workshop, the elves have found a mountain of magical gloves in complete disarray. Each glove is described by two values:

    hand: indicates whether it is a left (L) or right (R) glove
    color: the color of the glove (string)

Your task is to help them match gloves: A valid pair is a left glove and a right glove of the same color.

You must return a list with the colors of all the pairs found. Keep in mind that there may be several pairs of the same color. The order is determined by whichever pair can be made first. */


function matchGloves(gloves) {
  const pairsMap = {};
  const matchedGloves = [];
  for (let glove of gloves) {
    const {color, hand} = glove;
    if (!pairsMap[color]) {
      pairsMap[color] = { 'L': 0, 'R': 0};
    }
    pairsMap[color][hand]++
    if (pairsMap[color]['L'] > 0 && pairsMap[color]['R'] > 0) {
      matchedGloves.push(color);
      pairsMap[color]['R']--;
      pairsMap[color]['L']--;
    }
  }
  return matchedGloves;
}

// Examples

const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []

const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

matchGloves(gloves4)
// ['red', 'green']
