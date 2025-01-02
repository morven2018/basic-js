const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr.map(item => item === -1 ? -1 : 0);

  const toSort = arr.filter(item => item !== -1);
  toSort.sort((x1, x2) => x1 - x2);

  if (toSort.length === arr.length) return toSort;
  
  let ones = 0;
  for (let i = 0; i < toSort.length; i += 1){
    while(result[i+ones] === -1) ones += 1;
    result[i+ones] = toSort[i];
  }

  return result;
}

module.exports = {
  sortByHeight
};
