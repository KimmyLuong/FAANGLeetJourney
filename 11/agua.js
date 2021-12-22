/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let areaResult = 0
    while(left < right) {
        const maxHeight = Math.min(height[left], height[right])
        const area = maxHeight * (right - left)
        console.log('area:', area)
        if(area > areaResult){
            areaResult = area
        }

        if(height[right] > height[left]) {
            left++
        }
        else {
            right--
        }
    }
    return areaResult
}

console.log('answer:', maxArea([2,3,4,5,18,17,6]))