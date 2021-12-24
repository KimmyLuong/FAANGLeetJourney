/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {

    const countSteps = (numberOfSteps, targetStep, memo={}) => {
        if(targetStep in memo){
            return memo[targetStep]
        }
        let res = 0
        
        if(targetStep === 0) {
            return 1
        }
        if(targetStep < 0) {
            return 0
        }
        for(let stepNumber of numberOfSteps) {
            const stepsLeft = targetStep - stepNumber
            const result = countSteps(numberOfSteps, stepsLeft, memo)
            if(result !== undefined) {
                res += result
            }
        }
        memo[targetStep] = res
        return res

    }
    return countSteps([1,2], n)
}

console.log(climbStairs(44))