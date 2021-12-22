/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    const haha = []
    nums.forEach((num, index) => {
        const targetSum = num
        const slicedNums = nums.slice(index+1, nums.length)
        const result = findTargetNumbers(slicedNums, targetSum, haha)
    })
    let uniqueThreeSums = haha.filter((nums, index) => {

        return nums.indexOf(nums) === index
    })

    return haha
}

const findTargetNumbers = (slicedNums, targetSum, storage) => {
    slicedNums.forEach((num, index) => {
        const numberToSearch = 0 - (targetSum + num)
        const sliceMeUp = slicedNums.slice(index+1, slicedNums.length)
        if(sliceMeUp.find(num => num === numberToSearch) !== undefined) {
            console.log('storage before blah', storage)
            if(storage.length === 0) {
                storage.push([targetSum, num, numberToSearch].sort((num1, num2) => num1-num2))
            }
            else {
                const search = storage.find(numbers => {
                    const sortedArray = [targetSum, num, numberToSearch].sort((num1, num2) => num1-num2)
                    return numbers[0] === sortedArray[0] && numbers[1] === sortedArray[1] && numbers[2] === sortedArray[2]
                })
                if(search === undefined) {
                    storage.push([targetSum, num, numberToSearch].sort((num1, num2) => num1-num2))
                }
            }
        }
       
    })
    return storage
}

console.log(threeSum([-1,0,1,2,-1,-4]))