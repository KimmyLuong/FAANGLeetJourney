/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = (nums, target) => {     
    const numsHash = Object.fromEntries(nums.map((num, index) => [num, index]))
    let indices1 = 0
    let indices2
    while(indices2 === undefined){
        const result = numsHash[target-nums[indices1]]
        if(result !== undefined && result !== indices1){
            indices2 = result
        }
        else {
            indices1++
        }
    }

    return [indices1, indices2]
}

console.log(twoSum([3,2,4], 6))