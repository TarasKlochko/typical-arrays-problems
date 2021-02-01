exports.min = function min(array) {
    let min = 0;
    if (array && array.length) {
        array.forEach((element) => (element < min ? (min = element) : min));
    }
    return min;
};

exports.max = function max(array) {
    let max = 0;
    if (array && array.length) {
        array.forEach((element) => (element > max ? (max = element) : max));
    }
    return max;
};

exports.avg = function avg(array) {
    return array && array.length
        ? array.reduce((sum, number) => sum + number, 0) / array.length
        : 0;
};
