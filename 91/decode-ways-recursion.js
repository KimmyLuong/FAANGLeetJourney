/**
 * @param {string} s
 * @return {number}
 */
 const numDecodings = function(s) {
    return helper(s, 0)
}

const helper = (s, index, memo={}) => {
    if(index in memo) return memo[index]
    if(s.charAt(index) === '0') return 0
    if(index === s.length) return 1
    if(index === s.length-1) return 1
    
    let answer = helper(s, index + 1, memo)
    if(s.substring(index, index+2) <= 26) {
        answer += helper(s, index + 2, memo)
    }
    memo[index] = answer
    return answer
}

console.log(numDecodings('226'))
console.log(numDecodings('2101'))
console.log(numDecodings('10011'))
console.log(numDecodings('12'))
console.log(numDecodings('10'))
console.log(numDecodings('0006'))