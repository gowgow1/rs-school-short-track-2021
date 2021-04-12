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
  const m = new Map();
  domains.forEach((elem) => {
    const ar = elem.split('.');
    let str = '';
    for (let i = ar.length - 1; i >= 0; i--) {
      str += `.${ar[i]}`;
      if (m.has(str)) {
        m.set(str, m.get(str) + 1);
      } else {
        m.set(str, 1);
      }
    }
  });
  return Object.fromEntries(m);
}

module.exports = getDNSStats;
