/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let left = 0
    let right = 0

    let maxProfit = 0
    while(right < prices.length) {
        let profit = prices[right] - prices[left]
        maxProfit = profit > maxProfit ? profit : maxProfit
        if(prices[right] < prices[left]){
            left = right
        }
        right++
    }
    return maxProfit
}

console.log(maxProfit([2,1,2,0,1]))