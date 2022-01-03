const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false)
    table[0] = true

    for(let index = 0; index <= target.length; index++) {
        if(table[index] === true) {
            for(let word of wordBank) {
                if(target.slice(index, index + word.length) === word) {
                    table[index + word.length] = true
                }
            }
        }
    }

    return table[target.length]
}

console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o' ,'t']))
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))