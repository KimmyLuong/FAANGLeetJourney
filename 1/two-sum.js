/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let indices1 = 0
    let indices2 = 1
    while(nums[indices1] + nums[indices2] !== target){
        indices2++
        if(indices2 === nums.length){
            indices1++
            indices2= indices1+1
        }
    }
    return [indices1, indices2]
}

console.log(twoSum([3,2,4], 6))