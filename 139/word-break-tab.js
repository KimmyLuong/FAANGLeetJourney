/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 const wordBreak = function(s, wordDict) {
    const table = Array(s.length+1).fill(false)
    table[0] = true

    for(let index = 0; index <= s.length; index++) {
        if(table[index]) {
            for(let word of wordDict) {
                if(s.slice(index, s.length).indexOf(word) === 0) {
                    table[index + word.length] = true
                }
            }
        }
    }

    return table[s.length]

}


console.log(wordBreak('leetcode', ["leet","code"]))
console.log(wordBreak('applepenapple', ["apple","pen"]))
console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"]))
console.log(wordBreak("bb", ["a","b","bbb","bbbb"]))
console.log(wordBreak("cars", ["car","ca","rs"]))