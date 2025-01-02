const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encoding = [];
  let temp = str[0];
  let counter = 1;
  for (let i = 1; i < str.length; i += 1){
    if (temp === str[i]){
      counter += 1;
    } else{
      if (counter > 1)   encoding.push(String(counter));
      encoding.push(temp);
      counter = 1;
      temp = str[i];
    }
  }
  if (counter > 1)   encoding.push(String(counter));
  encoding.push(temp);

  return encoding.join("");
}

module.exports = {
  encodeLine
};
