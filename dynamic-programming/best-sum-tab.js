const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)

    table[0] = []

    for(let index = 0; index <= targetSum; index++) {
        if(table[index] !== null) {
            for(let number of numbers) {
                // console.log('dat table', table[index + number])
                // console.log('current table', table)
                if(number + index <= targetSum) {
                    if(table[index + number] === null) {
                        table[index + number] = [...table[index], number]
                    }
                    else {
                        if(table[index + number].length > [...table[index], number].length){
                            table[index + number] = [...table[index], number]
                        }
                    }
                }
            }
        }
    }

    return table[targetSum]

}

console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))