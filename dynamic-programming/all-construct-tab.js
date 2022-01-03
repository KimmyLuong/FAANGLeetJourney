const allConstruct = (target, wordBank) => {
    const table = Array(target.length +1).fill().map(() => [])
    table[0] = [[]]
    
    for (let index = 0; index < target.length; index++) {
        for(let word of wordBank) {
            if(target.slice(index, index + word.length) === word) {
                table[index + word.length].push(...table[index].map(item => [word, ...item]))
            }
        }
        
    }
    
    return table[target.length]
}

console.log(allConstruct('abcdef', [ 'ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('eeee', ['e', 'ee', 'eee', 'eeee', 'eeeee']))