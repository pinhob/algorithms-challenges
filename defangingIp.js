// https://leetcode.com/problems/defanging-an-ip-address/

/**
 * WITHOUT JS BUILT-IN METHODS:
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newAddress = ''

  for (let c = 0; c < address.length; c++) {
    if (address[c] === '.') {
        newAddress += '[.]'
    } else {
        newAddress += address[c]
    }
  }

  return newAddress
};

// WITH JS - REPLACE ALL
var defangIPaddr = function(address) {
  return address.replaceAll('.', '[.]')
};

// WITH JS - SPLIT, MAP AND JOIN:
return address.split('').map(char => char === '.' ? '[.]' : char).join('')
