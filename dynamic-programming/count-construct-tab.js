const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0)
    table[0] = 1

    for(let index = 0; index <= target.length; index++) {
        if(table[index] !== 0) {
            for(let word of wordBank) {
                if(target.slice(index, index + word.length) === word) {
                    table[index + word.length] += table[index]
                }
            }
        }
    }

    return table[target.length]
}

console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o' ,'t']))
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']))