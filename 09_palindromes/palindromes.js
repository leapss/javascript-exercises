const palindromes = function (str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
