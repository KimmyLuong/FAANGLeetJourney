/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    const pivot = nums[0]-1
    const zeroCenter = nums.length - pivot
    return nums.findIndex((num) => num === target)
    
}

console.log(search([4,5,6,7,0,1,2], 1))