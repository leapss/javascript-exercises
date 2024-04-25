const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0 || typeof n1 != 'number' || typeof n2 != 'number'){
        return 'ERROR'
    } else {
        const start = Math.min(n1, n2);
        const end = Math.max(n1, n2);
        let sum = 0;
        
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    };
};

// Do not edit below this line
module.exports = sumAll;
