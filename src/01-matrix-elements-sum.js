/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
/*
Also we can make oneline array
Go throw him and check each item
Index(item) - arr(row).length != 0?
add item to sum
*/
function getMatrixElementsSum(matrix) {
  return matrix.reduce((s, row, rowind, arr) => s + row.reduce((acum, curr, i) => {
    if (rowind > 0) { return arr[rowind - 1][i] === 0 ? acum : acum + curr; }
    return acum + curr;
  }, 0), 0);
}

module.exports = getMatrixElementsSum;
