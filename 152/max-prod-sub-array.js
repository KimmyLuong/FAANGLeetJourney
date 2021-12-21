/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxProduct = function(nums) {
     if(nums.length === 1) {
         return nums[0]
    }
    let max = 1
    let min = 1
    let returnValue= Math.max(...nums)

    nums.forEach((num) => {
        let maxNumCalc = num*max
        let minNumCalc = num*min
        if(num === 0){
            max = 1
            min = 1
        }
        else {
            max = Math.max(maxNumCalc, minNumCalc, num)
            min = Math.min(maxNumCalc, minNumCalc, num)
            returnValue = Math.max(returnValue, max)
        }
        console.log('max value:', max)
        console.log('min value:', min)
        console.log('return value:', returnValue)
    })
    return returnValue
}

console.log('dat product', maxProduct([2,3,-2,4]))

        // if(num === 0) {
        //     max = 1
        //     min = 1
        //     returnValue = 0 > returnValue ? 0 : returnValue
        // }
        // else if(nums < 0) {
        //     min = maxNumCalc < min ? maxNumCalc : min
        //     min = (minNumCalc < min) ? minNumCalc : min
        // }
        // else {
        //     if(nums[index-1] < 0){
        //         min = (maxNumCalc < min) ? maxNumCalc : min
        //         min = minNumCalc < min ? minNumCalc : min    
        //     }
        //     else {
        //         min = (maxNumCalc < min) ? maxNumCalc : min
        //         min = minNumCalc < min ? minNumCalc : min    
        //         max = (maxNumCalc > returnValue) ? maxNumCalc : max
        //         max = minNumCalc > returnValue ? minNumCalc : max
        //     }
            
        //     returnValue = max > returnValue ? max : returnValue
        // }