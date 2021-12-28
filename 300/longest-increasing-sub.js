/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
    let result = new Array(nums.length).fill(1)

    for(let index = result.length; index >= 0; index--) {
        for(let innerIndex = index+1; innerIndex < nums.length; innerIndex++) {
            if(nums[index] < nums[innerIndex]){
                result[index] = Math.max(result[index], 1+result[innerIndex])
            }
        }
    }
    
    return Math.max(...result)
}

console.log(lengthOfLIS(
    [7,7,7,7,7,7,7]))