const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)

    table[0] = []

    for(let index = 0; index <= targetSum; index ++) {
        for(let number of numbers) {
            if(table[index] !== null) {
                table[index + number] = [...table[index], number]
            }
        }
    }
    
    return table[targetSum]
}

console.log(howSum(7, [5, 3, 4]))
console.log(howSum(7, [2,4]))
console.log(howSum(8, [2,3,5]))