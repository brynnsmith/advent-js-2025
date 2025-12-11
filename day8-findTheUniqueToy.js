/* Challenge #8: Find the Unique Toy

Santa 🎅 wants to know what the first non-repeated letter is in a toy's name 🎁.

Write a function that takes a string and returns the first letter that is not repeated, ignoring uppercase and lowercase when counting, but returning the letter as it appears in the string.

If there is none, return an empty string (""). */

function findUniqueToy(toy) {
  const toyLowerCase = toy.toLowerCase();
  for (let i = 0; i < toyLowerCase.length; i++) {
    if (toyLowerCase.indexOf(toyLowerCase[i]) === toyLowerCase.lastIndexOf(toyLowerCase[i])) {
      return toy[i];
    }
  }
  return "";
}


// Examples:

console.log(findUniqueToy('Gift')) // 'G'
// ℹ️ The G is the first letter that is not repeated
// and we return it exactly as it appears

console.log(findUniqueToy('sS')) // ''
// ℹ️ The letters are repeated, since it doesn't distinguish uppercase

console.log(findUniqueToy('reindeeR')) // 'i'
// ℹ️ The r is repeated (even if it's uppercase)
// and the e as well, so the first one is 'i'

// More cases:
console.log(findUniqueToy('AaBbCc')) // ''
console.log(findUniqueToy('abcDEF')) // 'a'
console.log(findUniqueToy('aAaAaAF')) // 'F'
console.log(findUniqueToy('sTreSS')) // 'T'
console.log(findUniqueToy('z')) // 'z'
