const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const initalN = String(n).split('');
  if (initalN[0] >= initalN[1]) {
    const minDigit = initalN.reduce((a, b) =>  a < b ? a : b );
    initalN.splice(initalN.indexOf(minDigit), 1);
    return Number(initalN.join(''));
  }
  return Number(initalN.slice(1).join(''));
  
}

module.exports = {
  deleteDigit
};
