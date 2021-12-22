/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function(a, b) {
    return b ? getSum(a ^ b, (b & a) << 1) : a
}

console.log(getSum(2, 3))

// 0010
// 0011
// 0001
// 0101