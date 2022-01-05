/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    if(nums.length < 2) return nums[0]
    if(nums.length === 2) return Math.max(nums[0], nums[1])
    const table = Array(nums.length)
    table[0] = nums[0]
    table[1] = nums[1]
    table[2] = nums[0] + nums[2]
    for(let index = 3; index < nums.length; index++) {
        table[index] = Math.max(table[index-2], table[index-3]) + nums[index]
    }
    return Math.max(table[nums.length-2], table[nums.length-1])
}

console.log(rob([1,2,3,1])) //4
console.log(rob([2,7,9,3,1])) //12
console.log(rob([3, 1])) //3
console.log(rob([2, 1, 1, 2])) //4
console.log(rob([1,3,1,3,100])) //103