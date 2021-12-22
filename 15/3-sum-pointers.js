/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    const sorted = nums.sort((num1, num2) => num1-num2)
    const res = []
    if(nums.length < 3) {
        return []
    }
    if(nums[0] === 0 && nums[nums.length-1] === 0){
        return [[0,0,0]]
    }
    sorted.forEach((number, index) => {
        let leftIndex = index+1
        let rightIndex = sorted.length-1
        
        if(number !== sorted[index-1]){
            while( leftIndex < rightIndex) {
                const threeSum = number + sorted[leftIndex] + sorted[rightIndex]
                if(threeSum > 0) {
                    rightIndex--
                } 
                else if(threeSum < 0) {
                    leftIndex++
                }
                else if(threeSum === 0) {
                    res.push([number, sorted[leftIndex], sorted[rightIndex]])
                    leftIndex+=1
                    
                    while(sorted[leftIndex] === sorted[leftIndex-1] && leftIndex < rightIndex){
                        leftIndex+=1
                    }
                }
            }
        }
    })

    return res
}

console.log(threeSum([1,-1,-1,0]))

//-4 -1 -1 0 1 2