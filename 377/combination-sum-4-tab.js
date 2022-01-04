/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function(nums, target) {
    const table = Array(target+1).fill(0)
    table[0] = 0
    for(let index = 0; index <= target; index++) {
        for(let number of nums) {
            table[index + number] = table[index] + 1
        }
    }

    console.log(table[target])
}

console.log(combinationSum4([1,2,3], 4))
// console.log(combinationSum4([9], 3))