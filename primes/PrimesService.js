const isPrime = function (number) {
    if (number === 0 || number === 0) return false;
    let divisor = 2;
    while (divisor < number) {
        if (number%divisor === 0) return false;
        divisor++;
    }
    return true;
};

module.exports = {
    isPrime
};
