/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let leftPointer = 0
    let rightPointer = numbers.length-1
    let answer
    while(answer === undefined) {
        const sum = numbers[leftPointer] + numbers[rightPointer]
        if(sum > target) {
            rightPointer--
        } 
        else if(sum < target) {
            leftPointer++
        }
        else if(sum === target) {
            answer = [leftPointer+1, rightPointer+1]
        }
    }
    return answer
}

console.log(twoSum([2,7,11,15], 9))