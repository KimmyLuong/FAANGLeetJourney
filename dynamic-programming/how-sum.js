const howSum = (targetSum, nums, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null
    
    for(let number of nums) {
        const remainder = targetSum - number
        const remainderResult = howSum(remainder, nums, memo)
        if(remainderResult !== null) {
            memo[targetSum] = [...remainderResult, number]
            return [...remainderResult, number]
        }
    } 
    memo[targetSum] = null
    return null
}

console.log(howSum(300, [5,3,4,7]))
