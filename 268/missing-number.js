/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const length = nums.length
    const blah = nums.sort((num1, num2) => num1- num2)
    const answer = blah.findIndex((num, index) => {
        if(num !== index) {
            return true
        }
    })
    if(answer === -1){
        return length
    }
    return answer
}

console.log('answer', missingNumber([0,1]))