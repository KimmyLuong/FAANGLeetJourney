/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 const combinationSum = function(candidates, target) {
    let result = []

    const dfs = (pointer, current, targetSum) => {
        if(targetSum === target) {
            result.push([...current])
            return
        }
        if(pointer >= candidates.length || targetSum > target){
            return
        }
        
        current.push(candidates[pointer])
        dfs(pointer, current, targetSum + candidates[pointer])
        current.pop()
        dfs(pointer+1, current, targetSum)
    }

    dfs(0, [], 0)
    return result
}

console.log(combinationSum([2,3,6,7], 7))