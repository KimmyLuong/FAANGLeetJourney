/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    if(target === 0) return []
    if(target < 0) return null
    let returnValue = []
    for(let [index, candidate] of candidates.entries()) {
        const remainder = target - candidate
        const remainderResult = combinationSum(candidates, remainder)
        console.log('inner index', index)
        
        if( remainderResult !== null) {
            const combination = [...remainderResult, candidate]
            if(index === 0) {
                console.log('pls', [...remainderResult, candidate])
            }
            if(remainder === 0) {
                console.log('dis is combination:', combination)
                console.log('current returnValue', returnValue)
                returnValue.push(...combination)
                console.log('current returnValue', returnValue)
            }
            console.log([...remainderResult, candidate])
            returnValue.push(combination)
            console.log('remainder:', remainder)
            console.log('remainder result:', remainderResult)
            console.log('candidate:', candidate)
            console.log('index', index)
            returnValue = combination
            // console.log('returnValue:', returnValue)
            return combination
        }
    }
    console.log('nani')
    return null
}
let haha = []
haha.push(combinationSum([2,3,6,7], 7))
console.log(haha)
// console.log(combinationSum([2,3,6,7], 7))