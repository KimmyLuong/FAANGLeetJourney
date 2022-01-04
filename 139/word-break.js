/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 const wordBreak = function(s, wordDict) {
    

    return recursion(s, wordDict)
}

const recursion = (s, wordDict, memo={}) => {
    if(s in memo) return memo[s]
    if(s === '') {
        
        return true
    }

    for(let word of wordDict) {
        
        if(s.indexOf(word) === 0) {
            //match found
            const remainingText = s.slice(word.length, s.length)
        
            if(recursion(remainingText, wordDict, memo)){
                memo[s] = true
                return true
            }
        }
    }
    memo[s] = false
    return false
}

console.log(wordBreak('leetcode', ["leet","code"]))
console.log(wordBreak('applepenapple', ["apple","pen"]))
console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"]))
console.log(wordBreak("bb", ["a","b","bbb","bbbb"]))
console.log(wordBreak("cars", ["car","ca","rs"]))