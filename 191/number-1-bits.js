/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
    let res = 0
    while(n !== 0) {
        res += n & 1
        n = n >>> 1
    }
    return res
}

console.log(hammingWeight(11111111111111111111111111111101))