/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum
    let maxSum = nums[0]
    nums.forEach((num, index) => {
        if(index === 0) {
            sum = num
        }
        else if(num > sum+num){
            sum = num
        }
        else {
            sum += num
        }
        if(sum > maxSum){
            maxSum = sum
        }
    })
    return maxSum
}

console.log(maxSubArray([1,2]))