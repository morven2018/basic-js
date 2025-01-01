const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  const newArr = [...arr];
  newArr.forEach((item, index) => {
    if (item === controlSequences[0]) markElement(newArr, index, false);
    if (item === controlSequences[1]) markElement(newArr, index);
    if (item === controlSequences[2]) doubleElement(newArr, index, false);
    if (item === controlSequences[3]) doubleElement(newArr, index);
  }
  )
  return newArr.filter(item => item !== 'to_del');
}

function markElement(arr, index, prev = true) {
  if (prev && index !== 0) {
    arr[index - 1] = 'to_del';
  } else if (!prev && index + 1 < arr.length) {
    arr[index + 1] = 'to_del';
  }
  arr[index] = 'to_del';
}

function doubleElement(arr, index, prev = true) {
  if (prev && index !== 0) {
    arr[index] = arr[index - 1]
  } else if (!prev && index + 1 < arr.length) {
    arr[index] = arr[index + 1];
  } else {
    arr[index] = 'to_del';
  }
}



module.exports = {
  transform
};
