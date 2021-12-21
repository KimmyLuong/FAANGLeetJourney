/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let results = []
    for(i=0; i < nums.length; i++) {
        if(i===0) {
            results[i] = 1
        }
        else {
            results[i] = nums[i-1] * results[i-1]
        }
    }
    let postFix = 1
    for(i=nums.length-1; i>=0; i--){
        if(i===nums.length) {
            results[i] = results[i] * postFix
        }
        else {
            results[i] = postFix * results[i]
        }
        postFix*=nums[i]
    }
    
    return results
}
// 1 1 2 6

console.log(productExceptSelf([-1,1,0,-3,3]))