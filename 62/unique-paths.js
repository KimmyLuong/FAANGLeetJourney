/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n, memo={}) {
    const key = m + ',' + n
    if(key in memo) return memo[key]
    if(m === 1 && n === 1) return 1
    if(m === 0 || n === 0) return 0

    let result = uniquePaths(m - 1, n, memo) + uniquePaths(m, n-1, memo)

    memo[key] = result
    return result
}

console.log(uniquePaths(3, 7)) //28
// console.log(uniquePaths(3, 2)) //3