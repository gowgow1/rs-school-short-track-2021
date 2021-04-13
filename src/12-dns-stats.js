/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dom = domains;
  const obj = {};
  for (let i = 0; i < dom.length; i++) {
    const arr = [];
    dom[i] = dom[i].split('.').reverse();
    for (let j = 0; j < dom[i].length; j++) {
      arr.push(dom[i][j]);
      const tem = arr.join('.');
      obj[`.${tem}`] = (obj[`.${tem}`] || 0) + 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
