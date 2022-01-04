/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function(nums, target) {
    return recursion(target, nums)
}

const recursion = (target, nums, memo={}) => {
    if(target in memo) return memo[target]
    if(target === 0) {
        memo[target] = 1
        return memo[target]
    }
    let result = 0
    
    for(let number of nums) {
        const remainder = target - number
        if(remainder >= 0) {
            result += recursion(remainder, nums, memo)
        }
    }
    memo[target] = result
    return memo[target]
}

console.log(combinationSum4([1,2,3], 4))
// console.log(combinationSum4([9], 3))