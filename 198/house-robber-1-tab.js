/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    if(nums.length < 2) return nums[0]
    const table = Array(nums.length)
    table[0] = nums[0]
    table[1] = nums[1]
    for(let index = 2; index < nums.length; index++) {
        table[index] = Math.max(...table.slice(0, index-1)) + nums[index]
    }
    return Math.max(...table)
}

console.log(rob([1,2,3,1])) //4
console.log(rob([2,7,9,3,1])) //12
console.log(rob([3, 1])) //3
console.log(rob([2, 1, 1, 2])) //4