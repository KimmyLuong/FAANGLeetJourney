const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null
    let result = null
    for(let number of numbers) {
        const remainder = targetSum - number
        const remainderResult = bestSum(remainder, numbers, memo)

        if(remainderResult !== null) {
            const combination = [...remainderResult, number]
            if(result === null || combination.length < result.length) {
                result = combination
            }
        }
    }
    
    memo[targetSum] = result
    return result
}

console.log(bestSum(7, [5 , 3 , 4 , 7]))
console.log(bestSum(8, [1 , 4 , 5]))
console.log(bestSum(100, [1 , 2 , 5 , 25]))