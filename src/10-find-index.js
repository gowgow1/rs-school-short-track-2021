/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    const mid = Math.floor((max + min) / 2);
    if (array[mid] === value) return mid;
    if (array[mid] > value) max = mid;
    if (array[mid] < value) min = mid;
  } return -123;
}

module.exports = findIndex;
