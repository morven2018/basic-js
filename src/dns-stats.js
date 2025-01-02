const { NotImplementedError } = require('../extensions/index.js');

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
  const dns = {};
  domains.forEach(item => {
    const adressItem = item.split('.').map(elem => '.' + elem).reverse();
    for (let len = 0; len < adressItem.length; len += 1){
        const dnsAddress = adressItem.slice(0, len+1).join('');
        dns[dnsAddress] = dns[dnsAddress] ? dns[dnsAddress] + 1 : 1;
    }
  })
  return dns;
}

module.exports = {
  getDNSStats
};
