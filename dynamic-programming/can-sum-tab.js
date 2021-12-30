const canSum = (targetSum, numbers) => {
    const table = Array(targetSum+1).fill(false)
    table[0] = true
    for(let index = 0; index <= targetSum; index++) {
        for(let number of numbers) {
            if(table[index] === true && (number + index) <= targetSum) {
                table[number+index] = true
            }
        }
    }

    return table[targetSum]
}

console.log(canSum(7, [2,3]))
console.log(canSum(7, [2,4]))
console.log(canSum(7, [5,3, 4, 7]))