/**
 * @param {number[]} nums
 * @return {number}
 */
 const findMin = function(nums) {
    const result = Math.min(...nums)
    return result
}

console.log(findMin([3,4,5,1,2]))