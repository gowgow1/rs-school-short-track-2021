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
  let finish = '';
  let times = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      times++;
    } else if (times > 1) {
      finish += times + str[i];
      times = 1;
    } else {
      finish += str[i];
    }
  }
  return finish;
}

module.exports = encodeLine;
