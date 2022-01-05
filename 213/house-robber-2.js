/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    if(nums.length === 1) return nums[0]
    if(nums.length === 2 || nums.length === 3) return Math.max(...nums)
    
    
    const array1 = [...nums]
    const pop = array1.pop()
    
    let tabulationTable = Array(array1.length).fill(0)

    tabulationTable[0] = array1[0]
    tabulationTable[1] = array1[1]
    tabulationTable[2] = array1[0] + array1[2]

    for(let index = 3; index < array1.length; index++) {
        tabulationTable[index] = Math.max(tabulationTable[index-2], tabulationTable[index-3]) + array1[index]
    }

    let result = Math.max(tabulationTable[array1.length-1], tabulationTable[array1.length-2])
    
    array1.shift()
    array1.push(pop)
    tabulationTable = Array(array1.length).fill(0)
    tabulationTable[0] = array1[0]
    tabulationTable[1] = array1[1]
    tabulationTable[2] = array1[0] + array1[2]
    
    for(let index = 3; index < array1.length; index++) {
        tabulationTable[index] = Math.max(tabulationTable[index-2], tabulationTable[index-3]) + array1[index]
    }

    result = Math.max(result, tabulationTable[array1.length-1], tabulationTable[array1.length-2])

    return result

}

console.log(rob([2,3,2])) //3
console.log(rob([1,2,3,1])) //4
console.log(rob([2,1,1,2])) //3
console.log(rob([1,3,1,3,100])) //103
console.log(rob([200,3,140,20,10])) //340
console.log(rob([1,2,3])) //3
console.log(rob([2,7,9,3,1])) //11