const allConstruct = (target, wordBank, memo={}) => {
    if(target === '') return [[]]
    let res = []
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            suffixWays.map((values) => res.push([word, ... values]))
        }
    }
    memo[target] = res
    return res
}

console.log(allConstruct('abcdef', [ 'ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))