/**
 * @param {number[]} nums
 * @return {number}
 */
 const missingNumber = function(nums) {
    const numsSum  = nums.reduce((previousValue, currentValue) => previousValue + currentValue)
    let resultSum = 0

    for(let i = 0; i < nums.length+1; i++){
        resultSum += i
    }
    return resultSum - numsSum
}

console.log('answer', missingNumber([0,1]))