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
  const rslt = n.toString().split('').map(() => n.toString().split(''));
  return Math.max(...rslt.map((a, i) => {
    a.splice(i, 1);
    return +a.join('');
  }));
}

module.exports = deleteDigit;
