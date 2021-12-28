/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount, memo={}) {
    if(amount in memo) return memo[amount]
    if(amount === 0) return []
    if(amount < 0) return null
    let result = null
    for(let coin of coins) {
        const amountTarget = amount - coin
        const returnArray = coinChange(coins, amountTarget,memo)
        if(returnArray !== null) {
            const combination = [...returnArray, coin]
            if(result === null || combination.length < result.length) {
                result = combination
            }
        }
    }
    memo[amount] = result
    return result
}

console.log(coinChange([1,2,5], 11)) // 3